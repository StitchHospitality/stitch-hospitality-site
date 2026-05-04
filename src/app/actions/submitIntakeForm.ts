'use server'

import { Resend } from 'resend'
import { writeClient } from '@/sanity/lib/client'

const resend = new Resend(process.env.RESEND_API_KEY)

export type FormState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function submitIntakeForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const fullName = (formData.get('fullName') as string)?.trim()
  const hotelName = (formData.get('hotelName') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const message = (formData.get('message') as string)?.trim()

  if (!fullName || !hotelName || !email) {
    return { status: 'error', message: 'Please fill out all required fields.' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  try {
    await Promise.all([
      writeClient.create({
        _type: 'intakeLead',
        fullName,
        hotelName,
        email,
        message: message || undefined,
        submittedAt: new Date().toISOString(),
      }),
      resend.emails.send({
        from: 'Stitch Hospitality <noreply@stitchhospitality.com>',
        to: 'chris@stitchhospitality.com',
        subject: `New Inquiry: ${hotelName} — ${fullName}`,
        html: `
          <h2>New Intake Form Submission</h2>
          <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td><strong>Name</strong></td><td>${fullName}</td></tr>
            <tr><td><strong>Hotel</strong></td><td>${hotelName}</td></tr>
            <tr><td><strong>Email</strong></td><td>${email}</td></tr>
            <tr><td><strong>Message</strong></td><td>${message || '—'}</td></tr>
          </table>
        `,
      }),
    ])

    return { status: 'success', message: "Thanks! We'll be in touch within one business day." }
  } catch {
    return { status: 'error', message: 'Something went wrong. Please try again.' }
  }
}
