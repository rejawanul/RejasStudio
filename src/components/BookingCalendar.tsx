"use client";

import { useState, useEffect } from "react";

const GOOGLE_CALENDAR_SCHEDULE_URL = "https://calendar.app.google/FXV3pmuVkiASMcbt6";

interface Slot {
  timeBST: string;
  timeEDT: string;
  utcHour: number;
  utcMin: number;
}

// Exactly the 2 slots Reja configured in Google Calendar: 8:00 AM & 9:00 PM BST
const standardSlots: Slot[] = [
  { timeBST: "08:00 AM BST", timeEDT: "10:00 PM EDT (Prev Day)", utcHour: 2, utcMin: 0 },
  { timeBST: "09:00 PM BST", timeEDT: "11:00 AM EDT (US Morning)", utcHour: 15, utcMin: 0 },
];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export default function BookingCalendar() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(9); // October
  const [selectedDay, setSelectedDay] = useState<number>(16);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(standardSlots[0]);
  const [step, setStep] = useState<"calendar" | "details" | "confirmed">("calendar");

  // Form inputs
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [meetingTopic, setMeetingTopic] = useState("YouTube Long-Form / Athlete Recruitment");
  const [projectNotes, setProjectNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // In-memory booked slots for current session (purges old mock data so 8:00 AM is free)
  const [bookedMap, setBookedMap] = useState<Record<string, string[]>>({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem("reja_booked_slots");
        localStorage.removeItem("reja_booked_slots_v2");
      } catch {
        // ignore
      }
    }
  }, []);

  const saveBookingToStorage = (dateKey: string, slotStr: string) => {
    setBookedMap((prev) => {
      const current = prev[dateKey] || [];
      return { ...prev, [dateKey]: [...current, slotStr] };
    });
  };

  // Month calculations
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

  const handlePrevMonth = () => {
    if (currentMonth === 9 && currentYear === 2026) return;
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
    setSelectedDay(1);
    setSelectedSlot(null);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
    setSelectedDay(1);
    setSelectedSlot(null);
  };

  const currentDateKey = `${currentYear}-${String(currentMonth).padStart(2, "0")}-${String(
    selectedDay
  ).padStart(2, "0")}`;

  const bookedForSelectedDay = bookedMap[currentDateKey] || [];
  const formattedSelectedDate = `${months[currentMonth]} ${selectedDay}, ${currentYear}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) return;
    setIsSubmitting(true);

    saveBookingToStorage(currentDateKey, selectedSlot.timeBST);

    try {
      await fetch("https://formsubmit.co/ajax/rejasstudio@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Discovery Call Brief: ${clientName} on ${formattedSelectedDate} (${selectedSlot.timeBST})`,
          Client_Name: clientName,
          Client_Email: clientEmail,
          Meeting_Date: formattedSelectedDate,
          Meeting_Time_BST: selectedSlot.timeBST,
          Meeting_Time_US_EDT: selectedSlot.timeEDT,
          Meeting_Topic: meetingTopic,
          Project_Notes: projectNotes || "N/A",
          Google_Calendar_Schedule: GOOGLE_CALENDAR_SCHEDULE_URL,
          Host_Email: "rejasstudio@gmail.com",
          Location: "Dhaka, Bangladesh (BST / UTC+6)",
        }),
      });
    } catch {
      // offline/cors fallback
    }

    setIsSubmitting(false);
    setStep("confirmed");
  };

  return (
    <div className="booking-compact-card">
      {/* Card Header: Location & Meta Badges */}
      <div className="booking-compact-header">
        <div className="booking-location-pill">
          <span className="live-pulse-dot"></span>
          <span>Dhaka, Bangladesh (BST / UTC+6)</span>
        </div>
        <div className="booking-call-meta-row">
          <span className="meta-badge">⏱ 30 Min</span>
          <span className="meta-badge">📹 Google Meet</span>
        </div>
      </div>

      {/* Step 1: Clean Interactive Calendar & 2 Daily Slots */}
      {step === "calendar" && (
        <div className="booking-view-split">
          {/* Left: Compact Month Calendar */}
          <div className="calendar-left-col">
            <div className="calendar-nav-bar-mini">
              <button
                type="button"
                className="cal-mini-nav-btn"
                onClick={handlePrevMonth}
                disabled={currentMonth === 9 && currentYear === 2026}
                aria-label="Previous month"
              >
                ‹
              </button>
              <div className="cal-mini-title">
                {months[currentMonth]} {currentYear}
              </div>
              <button
                type="button"
                className="cal-mini-nav-btn"
                onClick={handleNextMonth}
                aria-label="Next month"
              >
                ›
              </button>
            </div>

            <div className="calendar-weekdays-mini">
              {daysOfWeek.map((day) => (
                <span key={day} className="cal-mini-weekday">
                  {day}
                </span>
              ))}
            </div>

            <div className="calendar-grid-mini">
              {Array.from({ length: firstDayOfWeek }).map((_, idx) => (
                <div key={`empty-${idx}`} className="cal-mini-empty"></div>
              ))}

              {Array.from({ length: daysInMonth }).map((_, idx) => {
                const day = idx + 1;
                const isPast =
                  currentYear === 2026 && currentMonth === 9 && day < 15;
                const isSelected = selectedDay === day;

                return (
                  <button
                    key={day}
                    type="button"
                    disabled={isPast}
                    onClick={() => {
                      setSelectedDay(day);
                      const newDateKey = `${currentYear}-${String(currentMonth).padStart(
                        2,
                        "0"
                      )}-${String(day).padStart(2, "0")}`;
                      const bookedList = bookedMap[newDateKey] || [];
                      const firstAvail = standardSlots.find(
                        (s) => !bookedList.includes(s.timeBST)
                      );
                      setSelectedSlot(firstAvail || null);
                    }}
                    className={`cal-mini-day-btn ${isSelected ? "active" : ""} ${
                      isPast ? "disabled" : "available"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Exactly 2 Slots (8:00 AM & 9:00 PM BST) */}
          <div className="slots-right-col">
            <div className="slots-date-label">
              <span>Selected Date:</span>
              <strong>{formattedSelectedDate}</strong>
            </div>

            <div className="slots-list-compact">
              {standardSlots.map((slot) => {
                const isBooked = bookedForSelectedDay.includes(slot.timeBST);
                const isSelected = selectedSlot?.timeBST === slot.timeBST;

                return (
                  <button
                    key={slot.timeBST}
                    type="button"
                    disabled={isBooked}
                    onClick={() => setSelectedSlot(slot)}
                    className={`daily-slot-card ${isSelected ? "selected" : ""} ${
                      isBooked ? "is-booked" : ""
                    }`}
                  >
                    <div className="slot-card-left">
                      <span className="slot-primary-time">{slot.timeBST}</span>
                      <span className="slot-secondary-time">{slot.timeEDT}</span>
                    </div>
                    <div className="slot-card-status">
                      {isBooked ? (
                        <span className="badge-booked">Booked 🔒</span>
                      ) : (
                        <span className="badge-free">Available ✓</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="slot-action-btn-group">
              <a
                href={GOOGLE_CALENDAR_SCHEDULE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-red btn-book-next"
                style={{ textAlign: "center" }}
              >
                Schedule on Google Calendar ↗
              </a>
              <button
                type="button"
                disabled={!selectedSlot}
                className="btn btn-outline-dark btn-book-alt"
                onClick={() => setStep("details")}
              >
                Send Project Brief First →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Client Project Brief Form */}
      {step === "details" && selectedSlot && (
        <form className="booking-compact-form" onSubmit={handleSubmit}>
          <div className="booking-summary-banner">
            <div>
              <div className="summary-date-line">📅 {formattedSelectedDate}</div>
              <div className="summary-time-line">
                ⏰ <strong>{selectedSlot.timeBST}</strong> ({selectedSlot.timeEDT})
              </div>
            </div>
            <button
              type="button"
              className="btn-change-slot"
              onClick={() => setStep("calendar")}
            >
              Change
            </button>
          </div>

          <div className="meet-info-banner">
            <div className="meet-icon">📹</div>
            <div className="meet-text">
              <span className="meet-title">Automatic Google Meet Room</span>
              <span className="meet-link-preview">Synchronized with Google Calendar appointment</span>
            </div>
          </div>

          <div className="form-group-compact">
            <label htmlFor="client-name" className="form-label-compact">
              Your Name *
            </label>
            <input
              type="text"
              id="client-name"
              required
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Marcus Thompson"
              className="form-input"
            />
          </div>

          <div className="form-group-compact">
            <label htmlFor="client-email" className="form-label-compact">
              Email Address (For Calendar Invite &amp; Google Meet Link) *
            </label>
            <input
              type="email"
              id="client-email"
              required
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              placeholder="marcus@example.com"
              className="form-input"
            />
          </div>

          <div className="form-group-compact">
            <label htmlFor="meeting-topic" className="form-label-compact">
              Project Type / Goal *
            </label>
            <select
              id="meeting-topic"
              value={meetingTopic}
              onChange={(e) => setMeetingTopic(e.target.value)}
              className="form-select"
            >
              <option value="YouTube Long-Form Highlights">YouTube Long-Form Highlights</option>
              <option value="Viral Reels & TikTok Package ($100)">Viral Reels &amp; TikTok Package ($100)</option>
              <option value="Starter YouTube Package ($240)">Starter YouTube Package ($240)</option>
              <option value="Pro Creator Package ($500)">Pro Creator Package ($500)</option>
              <option value="Athlete Recruitment Video Scouting">Athlete Recruitment Video Scouting</option>
              <option value="Custom Monthly Retainer">Custom Monthly Retainer</option>
            </select>
          </div>

          <div className="form-group-compact">
            <label htmlFor="project-notes" className="form-label-compact">
              Channel / Footage Link (Optional)
            </label>
            <input
              type="text"
              id="project-notes"
              value={projectNotes}
              onChange={(e) => setProjectNotes(e.target.value)}
              placeholder="youtube.com/@channel or athlete game tape link"
              className="form-input"
            />
          </div>

          <div className="form-actions-row">
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => setStep("calendar")}
              style={{ padding: "10px 18px", fontSize: "14px" }}
            >
              ← Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-red"
              style={{ flexGrow: 1, padding: "12px 20px" }}
            >
              {isSubmitting ? "Submitting..." : "Confirm & Send Project Brief →"}
            </button>
          </div>
        </form>
      )}

      {/* Step 3: Confirmed Screen */}
      {step === "confirmed" && selectedSlot && (
        <div className="booking-compact-confirmed">
          <div className="confirmed-check-icon">✓</div>
          <h3>Project Details Received!</h3>
          <p className="confirmed-desc">
            Your brief for <strong>{formattedSelectedDate}</strong> at <strong>{selectedSlot.timeBST}</strong> has been sent to Reja.
          </p>

          <div className="meet-link-box">
            <div className="meet-link-label">Official Google Calendar Booking Link:</div>
            <a
              href={GOOGLE_CALENDAR_SCHEDULE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="meet-url-pill"
            >
              📅 {GOOGLE_CALENDAR_SCHEDULE_URL}
            </a>
            <p className="meet-note">
              Reja will reach out directly to <strong>{clientEmail}</strong> with your Google Meet invite.
            </p>
          </div>

          <div className="confirmed-action-buttons">
            <a
              href={GOOGLE_CALENDAR_SCHEDULE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-red add-gcal-btn"
            >
              📅 Open Google Calendar Schedule
            </a>
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => {
                setStep("calendar");
                setClientName("");
                setClientEmail("");
                setProjectNotes("");
              }}
            >
              Book Another Slot
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
