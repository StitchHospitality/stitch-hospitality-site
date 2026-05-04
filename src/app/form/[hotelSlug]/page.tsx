"use client";

import { useState, useRef } from "react";

const HOTEL_ID_MAP: Record<string, string> = {
  "nobu-palo-alto": "a910828b-f457-45a6-80ac-59fbadecda0f",
};

const WEBHOOK_URL =
  "https://primary-production-403e7.up.railway.app/webhook/hotel-inquiry-parser";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[#e5e3db] bg-[#fafaf7] text-[#071f1b] text-sm font-light placeholder:text-[#071f1b]/30 focus:outline-none focus:border-[#ff6464] focus:ring-2 focus:ring-[#ff6464]/10 transition-all duration-200";

const inputErrorClass =
  "w-full px-4 py-3 rounded-xl border border-red-400 bg-[#fafaf7] text-[#071f1b] text-sm font-light placeholder:text-[#071f1b]/30 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200";

const labelClass = "block text-sm font-medium text-[#071f1b] mb-2";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  eventType: string;
  checkin: string;
  checkout: string;
  numGuests: string;
  guestRooms: string;
  functionSpace: string;
  foodBeverage: string;
  budget: string;
  dateFlexibility: string;
  notes: string;
};

type ErrorState = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  eventType: "",
  checkin: "",
  checkout: "",
  numGuests: "",
  guestRooms: "",
  functionSpace: "",
  foodBeverage: "",
  budget: "",
  dateFlexibility: "",
  notes: "",
};

function buildInquiryDetails(form: FormState): string {
  const parts: string[] = [];

  parts.push(
    `Hi, my name is ${form.fullName}${form.company ? ` from ${form.company}` : ""}.`
  );

  parts.push(
    `We are planning a ${form.eventType || "corporate event"} and are looking for a venue.`
  );

  if (form.checkin && form.checkout) {
    parts.push(`Our preferred dates are ${form.checkin} to ${form.checkout}.`);
  }

  if (form.numGuests) {
    parts.push(`We expect approximately ${form.numGuests} guests.`);
  }

  if (form.guestRooms) {
    parts.push(`We will need approximately ${form.guestRooms} guest rooms.`);
  }

  if (form.functionSpace && form.functionSpace !== "None needed") {
    parts.push(`For meeting space, we need: ${form.functionSpace}.`);
  }

  if (
    form.foodBeverage &&
    form.foodBeverage !== "None/Not sure yet"
  ) {
    parts.push(`Food & beverage requirements: ${form.foodBeverage}.`);
  }

  if (form.budget) {
    parts.push(`Our estimated budget is: ${form.budget}.`);
  }

  if (form.dateFlexibility) {
    parts.push(`Date flexibility: ${form.dateFlexibility}.`);
  }

  if (form.notes) {
    parts.push(`Additional notes: ${form.notes}`);
  }

  if (form.email) {
    parts.push(`Please send the proposal to ${form.email}.`);
  }

  if (form.phone) {
    parts.push(`You can also reach me at ${form.phone}.`);
  }

  return parts.join(" ");
}

export default function HotelFormPage({
  params,
}: {
  params: { hotelSlug: string };
}) {
  const hotelId = HOTEL_ID_MAP[params.hotelSlug] ?? null;
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<ErrorState>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const checkoutRef = useRef<HTMLInputElement>(null);

  function set(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function validate(): ErrorState {
    const e: ErrorState = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.company.trim()) e.company = "Company is required.";
    if (!form.eventType) e.eventType = "Please select an event type.";
    if (!form.checkin) e.checkin = "Check-in date is required.";
    if (!form.checkout) {
      e.checkout = "Check-out date is required.";
    } else if (form.checkin && form.checkout <= form.checkin) {
      e.checkout = "Check-out must be after check-in.";
    }
    if (!form.numGuests.trim()) e.numGuests = "Number of guests is required.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus("loading");

    const inquiry_details = buildInquiryDetails(form);
    const payload = {
      hotel_id: hotelId,
      inquiry_details,
      full_name: form.fullName,
      email: form.email,
      phone: form.phone,
      company: form.company,
      event_type: form.eventType,
      checkin_date: form.checkin,
      checkout_date: form.checkout,
      num_guests: form.numGuests,
      guest_rooms: form.guestRooms,
      function_space: form.functionSpace,
      food_beverage: form.foodBeverage,
      budget: form.budget,
      date_flexibility: form.dateFlexibility,
      notes: form.notes,
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const today = new Date().toISOString().split("T")[0];

  if (!hotelId) {
    return (
      <div className="min-h-screen bg-[#fafaf7] flex items-center justify-center px-6">
        <p className="text-[#071f1b]/50 text-sm">Form not available.</p>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="min-h-screen bg-[#fafaf7] flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-7 h-7 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <h2 className="text-3xl text-[#071f1b] mb-3" style={{ fontFamily: "var(--font-belleza, Georgia, serif)" }}>
            We&apos;re On It
          </h2>
          <p className="text-[#071f1b]/60 font-light leading-relaxed">
            Your proposal request has been received. Expect it in your inbox
            shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafaf7] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#ff6464]" />
            <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#8b9190]">
              Event Proposal Request
            </span>
          </div>
          <h1
            className="text-3xl lg:text-4xl text-[#071f1b] mb-3"
            style={{ fontFamily: "var(--font-belleza, Georgia, serif)" }}
          >
            Tell Us About Your Event
          </h1>
          <p className="text-[#071f1b]/55 font-light text-sm leading-relaxed">
            Fill in the details below and we&apos;ll send a custom proposal
            directly to your inbox.
          </p>
        </div>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white rounded-2xl border border-[#e5e3db] p-7 lg:p-10 shadow-sm"
        >
          {/* Full Name + Email */}
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="fullName" className={labelClass}>
                Full Name <span className="text-[#ff6464]">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Jane Smith"
                value={form.fullName}
                onChange={(e) => set("fullName", e.target.value)}
                className={errors.fullName ? inputErrorClass : inputClass}
              />
              {errors.fullName && (
                <p className="mt-1.5 text-xs text-red-500">{errors.fullName}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email <span className="text-[#ff6464]">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="jane@acmecorp.com"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                className={errors.email ? inputErrorClass : inputClass}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Phone + Company */}
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+1 (415) 000-0000"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="company" className={labelClass}>
                Company / Organization <span className="text-[#ff6464]">*</span>
              </label>
              <input
                id="company"
                type="text"
                placeholder="Acme Corp"
                value={form.company}
                onChange={(e) => set("company", e.target.value)}
                className={errors.company ? inputErrorClass : inputClass}
              />
              {errors.company && (
                <p className="mt-1.5 text-xs text-red-500">{errors.company}</p>
              )}
            </div>
          </div>

          {/* Event Type */}
          <div className="mb-5">
            <label htmlFor="eventType" className={labelClass}>
              Type of Event <span className="text-[#ff6464]">*</span>
            </label>
            <select
              id="eventType"
              value={form.eventType}
              onChange={(e) => set("eventType", e.target.value)}
              className={errors.eventType ? inputErrorClass : inputClass}
            >
              <option value="">Select event type…</option>
              <option>Corporate Meeting</option>
              <option>Conference</option>
              <option>Team Retreat/Offsite</option>
              <option>Wedding/Social Event</option>
              <option>Gala/Fundraiser</option>
              <option>Holiday Party</option>
              <option>Training/Workshop</option>
              <option>Board Meeting</option>
              <option>Product Launch</option>
              <option>Other</option>
            </select>
            {errors.eventType && (
              <p className="mt-1.5 text-xs text-red-500">{errors.eventType}</p>
            )}
          </div>

          {/* Check-in + Check-out */}
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="checkin" className={labelClass}>
                Check-in Date <span className="text-[#ff6464]">*</span>
              </label>
              <input
                id="checkin"
                type="date"
                min={today}
                value={form.checkin}
                onChange={(e) => {
                  set("checkin", e.target.value);
                  if (form.checkout && form.checkout <= e.target.value) {
                    set("checkout", "");
                  }
                }}
                className={errors.checkin ? inputErrorClass : inputClass}
              />
              {errors.checkin && (
                <p className="mt-1.5 text-xs text-red-500">{errors.checkin}</p>
              )}
            </div>
            <div>
              <label htmlFor="checkout" className={labelClass}>
                Check-out Date <span className="text-[#ff6464]">*</span>
              </label>
              <input
                id="checkout"
                ref={checkoutRef}
                type="date"
                min={form.checkin || today}
                value={form.checkout}
                onChange={(e) => set("checkout", e.target.value)}
                className={errors.checkout ? inputErrorClass : inputClass}
              />
              {errors.checkout && (
                <p className="mt-1.5 text-xs text-red-500">{errors.checkout}</p>
              )}
            </div>
          </div>

          {/* Guests + Rooms */}
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="numGuests" className={labelClass}>
                Number of Guests <span className="text-[#ff6464]">*</span>
              </label>
              <input
                id="numGuests"
                type="number"
                min="1"
                placeholder="75"
                value={form.numGuests}
                onChange={(e) => set("numGuests", e.target.value)}
                className={errors.numGuests ? inputErrorClass : inputClass}
              />
              {errors.numGuests && (
                <p className="mt-1.5 text-xs text-red-500">{errors.numGuests}</p>
              )}
            </div>
            <div>
              <label htmlFor="guestRooms" className={labelClass}>
                Guest Rooms Needed
              </label>
              <input
                id="guestRooms"
                type="number"
                min="0"
                placeholder="20"
                value={form.guestRooms}
                onChange={(e) => set("guestRooms", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          {/* Function Space */}
          <div className="mb-5">
            <label htmlFor="functionSpace" className={labelClass}>
              Meeting / Function Space Needs
            </label>
            <select
              id="functionSpace"
              value={form.functionSpace}
              onChange={(e) => set("functionSpace", e.target.value)}
              className={inputClass}
            >
              <option value="">Select space needs…</option>
              <option>None needed</option>
              <option>General Session Only</option>
              <option>General Session + Breakout Rooms</option>
              <option>Reception/Cocktail Space</option>
              <option>Banquet/Seated Dinner</option>
              <option>Multiple Function Rooms</option>
              <option>Other</option>
            </select>
          </div>

          {/* Food & Beverage */}
          <div className="mb-5">
            <label htmlFor="foodBeverage" className={labelClass}>
              Food &amp; Beverage Requirements
            </label>
            <select
              id="foodBeverage"
              value={form.foodBeverage}
              onChange={(e) => set("foodBeverage", e.target.value)}
              className={inputClass}
            >
              <option value="">Select F&amp;B needs…</option>
              <option>None/Not sure yet</option>
              <option>Breakfast Only</option>
              <option>Breaks/Refreshments</option>
              <option>Lunch</option>
              <option>Dinner/Reception</option>
              <option>Full Day Package</option>
              <option>Multi-Day Catering</option>
            </select>
          </div>

          {/* Budget + Date Flexibility */}
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="budget" className={labelClass}>
                Estimated Budget
              </label>
              <select
                id="budget"
                value={form.budget}
                onChange={(e) => set("budget", e.target.value)}
                className={inputClass}
              >
                <option value="">Select budget range…</option>
                <option>Under $5,000</option>
                <option>$5,000 – $15,000</option>
                <option>$15,000 – $30,000</option>
                <option>$30,000 – $75,000</option>
                <option>$75,000 – $150,000</option>
                <option>$150,000+</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div>
              <label htmlFor="dateFlexibility" className={labelClass}>
                Date Flexibility
              </label>
              <select
                id="dateFlexibility"
                value={form.dateFlexibility}
                onChange={(e) => set("dateFlexibility", e.target.value)}
                className={inputClass}
              >
                <option value="">Select flexibility…</option>
                <option>Exact dates only</option>
                <option>Flexible within the same week</option>
                <option>Flexible within the same month</option>
                <option>Very flexible (open to suggestions)</option>
              </select>
            </div>
          </div>

          {/* Notes */}
          <div className="mb-8">
            <label htmlFor="notes" className={labelClass}>
              Additional Notes{" "}
              <span className="text-[#071f1b]/30 font-light">(optional)</span>
            </label>
            <textarea
              id="notes"
              rows={4}
              placeholder="Anything else we should know — AV needs, dietary restrictions, special requests…"
              value={form.notes}
              onChange={(e) => set("notes", e.target.value)}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Error banner */}
          {status === "error" && (
            <div className="mb-6 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-600">
              Something went wrong submitting your request. Please try again or
              email us directly.
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#ff6464] hover:bg-[#e54d4d] disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium px-7 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#ff6464]/25 hover:-translate-y-0.5"
          >
            {status === "loading" ? (
              <>
                <svg
                  className="w-4 h-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Sending…
              </>
            ) : (
              <>
                Send My Request
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
              </>
            )}
          </button>

          <p className="text-center text-xs text-[#071f1b]/30 font-light mt-5">
            We&apos;ll follow up within one business day.
          </p>
        </form>
      </div>
    </div>
  );
}
