'use client'

import { useActionState } from 'react'
import { submitIntakeForm, type FormState } from '@/app/actions/submitIntakeForm'

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[#e5e3db] bg-[#fafaf7] text-[#071f1b] text-sm font-light placeholder:text-[#071f1b]/30 focus:outline-none focus:border-[#ff6464] focus:ring-2 focus:ring-[#ff6464]/10 transition-all duration-200"

const labelClass = "block text-sm font-medium text-[#071f1b] mb-2"

const initialState: FormState = { status: 'idle', message: '' }

export default function IntakeForm() {
  const [state, formAction, pending] = useActionState(submitIntakeForm, initialState)

  return (
    <section id="intake-form" className="py-28 bg-[#fafaf7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
            <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
              Get Started
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#071f1b] mb-6">
            Tell us about your operation
          </h2>
          <p className="text-lg text-[#071f1b]/60 font-light leading-relaxed">
            Share a few details and we&apos;ll come prepared with automation
            ideas specific to your hotel and your biggest pain points.
          </p>
        </div>

        {state.status === 'success' ? (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-[#e5e3db] p-8 lg:p-12 shadow-sm text-center">
            <div className="w-12 h-12 rounded-full bg-[#ff6464]/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-[#ff6464]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl text-[#071f1b] mb-3">You&apos;re all set</h3>
            <p className="text-[#071f1b]/60 font-light">{state.message}</p>
          </div>
        ) : (
          <form action={formAction} className="max-w-2xl mx-auto bg-white rounded-2xl border border-[#e5e3db] p-8 lg:p-12 shadow-sm">
            {/* Full Name + Job Title */}
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullName" className={labelClass}>
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Jane Smith"
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label htmlFor="jobTitle" className={labelClass}>
                  Job Title
                </label>
                <input
                  id="jobTitle"
                  name="jobTitle"
                  type="text"
                  placeholder="Director of Sales"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            {/* Hotel Name + Number of Rooms */}
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="hotelName" className={labelClass}>
                  Hotel Name
                </label>
                <input
                  id="hotelName"
                  name="hotelName"
                  type="text"
                  placeholder="The Grand Coastal"
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label htmlFor="numberOfRooms" className={labelClass}>
                  Number of Rooms
                </label>
                <input
                  id="numberOfRooms"
                  name="numberOfRooms"
                  type="number"
                  min="1"
                  placeholder="120"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            {/* Biggest Pain Point */}
            <div className="mb-6">
              <label htmlFor="painPoint" className={labelClass}>
                Biggest Pain Point
              </label>
              <select id="painPoint" name="painPoint" className={inputClass} required defaultValue="">
                <option value="" disabled>
                  Select your biggest pain point…
                </option>
                <option value="slow-rfp">Slow RFP responses</option>
                <option value="manual-proposals">Manual proposals</option>
                <option value="no-linkedin">No LinkedIn presence</option>
                <option value="lead-followup">Lead follow-up</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Which Automation */}
            <div className="mb-6">
              <label htmlFor="automationInterest" className={labelClass}>
                Which automation interests you most?
              </label>
              <select
                id="automationInterest"
                name="automationInterest"
                className={inputClass}
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select an automation…
                </option>
                <option value="event-inquiry">Event Inquiry Automation</option>
                <option value="linkedin-content">LinkedIn Content Automation</option>
                <option value="lead-prospecting">Lead Prospecting Automation</option>
                <option value="proposal-generation">Proposal Generation Automation</option>
              </select>
            </div>

            {/* How did you hear */}
            <div className="mb-6">
              <label htmlFor="referralSource" className={labelClass}>
                How did you hear about us?
              </label>
              <input
                id="referralSource"
                name="referralSource"
                type="text"
                placeholder="LinkedIn, referral, Google…"
                className={inputClass}
              />
            </div>

            {/* Message */}
            <div className="mb-10">
              <label htmlFor="message" className={labelClass}>
                Message{" "}
                <span className="text-[#071f1b]/30 font-light">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Anything else you'd like us to know before we connect…"
                className={`${inputClass} resize-none`}
              />
            </div>

            {state.status === 'error' && (
              <p className="text-sm text-red-500 mb-6 text-center">{state.message}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={pending}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#ff6464] hover:bg-[#e54d4d] text-white font-medium px-7 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#ff6464]/25 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              {pending ? 'Sending…' : "Let's Build Your Automation"}
              {!pending && (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              )}
            </button>

            <p className="text-center text-xs text-[#071f1b]/30 font-light mt-6">
              No commitment required &nbsp;·&nbsp; We&apos;ll follow up within one business day
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
