'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export type FormState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function submitIntakeForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const fullName = formData.get('fullName') as string
  const jobTitle = formData.get('jobTitle') as string
  const hotelName = formData.get('hotelName') as string
  const numberOfRooms = formData.get('numberOfRooms') as string
  const painPoint = formData.get('painPoint') as string
  const automationInterest = formData.get('automationInterest') as string
  const referralSource = formData.get('referralSource') as string
  const message = formData.get('message') as string

  if (!fullName || !jobTitle || !hotelName || !numberOfRooms || !painPoint || !automationInterest) {
    return { status: 'error', message: 'Please fill out all required fields.' }
  }

  const painPointLabels: Record<string, string> = {
    'slow-rfp': 'Slow RFP responses',
    'manual-proposals': 'Manual proposals',
    'no-linkedin': 'No LinkedIn presence',
    'lead-followup': 'Lead follow-up',
    'other': 'Other',
  }

  const automationLabels: Record<string, string> = {
    'event-inquiry': 'Event Inquiry Automation',
    'linkedin-content': 'LinkedIn Content Automation',
    'lead-prospecting': 'Lead Prospecting Automation',
    'proposal-generation': 'Proposal Generation Automation',
  }

  try {
    await resend.emails.send({
      from: 'Stitch Hospitality <noreply@stitchhospitality.com>',
      to: 'chris@stitchhospitality.com',
      subject: `New Intake Form: ${hotelName} — ${fullName}`,
      html: `
        <h2>New Intake Form Submission</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td><strong>Name</strong></td><td>${fullName}</td></tr>
          <tr><td><strong>Job Title</strong></td><td>${jobTitle}</td></tr>
          <tr><td><strong>Hotel</strong></td><td>${hotelName}</td></tr>
          <tr><td><strong>Rooms</strong></td><td>${numberOfRooms}</td></tr>
          <tr><td><strong>Pain Point</strong></td><td>${painPointLabels[painPoint] ?? painPoint}</td></tr>
          <tr><td><strong>Automation Interest</strong></td><td>${automationLabels[automationInterest] ?? automationInterest}</td></tr>
          <tr><td><strong>How they heard</strong></td><td>${referralSource || '—'}</td></tr>
          <tr><td><strong>Message</strong></td><td>${message || '—'}</td></tr>
        </table>
      `,
    })

    return { status: 'success', message: "Thanks! We'll be in touch within one business day." }
  } catch {
    return { status: 'error', message: 'Something went wrong. Please try again.' }
  }
}
