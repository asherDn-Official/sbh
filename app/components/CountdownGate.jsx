"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export const LAUNCH_DATE_ISO =
  process.env.NEXT_PUBLIC_LAUNCH_DATE_ISO ?? "2025-10-20T00:00:00+05:30"; // October 20th, 12:00 AM IST

function computeTimeSegments(targetDate) {
  const diff = targetDate.getTime() - Date.now();

  if (diff <= 0) {
    return null;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return value.toString().padStart(2, "0");
}

export function useCountdown(targetIso) {
  const targetDate = useMemo(() => new Date(targetIso), [targetIso]);
  const [timeLeft, setTimeLeft] = useState(undefined);

  useEffect(() => {
    if (!isFinite(targetDate.getTime())) {
      console.error("Invalid countdown target date:", targetIso);
      setTimeLeft(null);
      return undefined;
    }

    let intervalId = null;

    const update = () => {
      const next = computeTimeSegments(targetDate);
      setTimeLeft(next);

      if (!next && intervalId) {
        clearInterval(intervalId);
      }
    };

    update();
    intervalId = setInterval(update, 1000);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [targetDate, targetIso]);

  const hasHydrated = timeLeft !== undefined;
  const isLive = hasHydrated && timeLeft === null;

  return { timeLeft, isLive, hasHydrated, targetDate };
}

export function CountdownContent({ timeLeft }) {
  if (!timeLeft) {
    return null;
  }

  return (
    <section className="countdown-gradient relative flex flex-col min-h-screen items-center justify-center text-white text-center px-6 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div className="diwali-fireworks" aria-hidden="true">
        <span className="firework firework-1" />
        <span className="firework firework-2" />
        <span className="firework firework-3" />
        <span className="firework firework-4" />
      </div>
      <div className="diwali-firecracker" aria-hidden="true">
        <span className="cracker-segment segment-1" />
        <span className="cracker-segment segment-2" />
        <span className="cracker-segment segment-3" />
        <span className="cracker-spark" />
      </div>
      <div className="floating-diyas" aria-hidden="true">
        <span className="diya diya-left" />
        <span className="diya diya-center" />
        <span className="diya diya-right" />
      </div>

      <div className="relative flex flex-col items-center space-y-10 max-w-lg">
        <Image
          src="/assets/home/sbh-logo-white.png"
          alt="Sri Balaji Homes Logo"
          width={200}
          height={200}
          className="w-48 h-auto"
          priority
        />

        <div className="space-y-4">
          <div className="diwali-banner">
            <span role="img" aria-label="Diya">
              🪔
            </span>
            <p className="diwali-banner__text">Wishing You a Happy Deepavali</p>
            <span role="img" aria-label="Diya">
              🪔
            </span>
          </div>

          <p className="uppercase tracking-[0.3em] text-sm text-green-200">
            We are gearing up
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-yellow-300 drop-shadow-md">
            Our website will go live on Diwali.
          </h1>
          <div className="celebration-pop" aria-hidden="true">
            <span className="pop-burst pop-burst-left" />
            <span className="pop-burst pop-burst-right" />
          </div>
          <div className="flex align-middle justify-center space-x-3">
            {/* <span
              role="img"
              aria-label="Firecracker"
              className="text-3xl"
              aria-hidden="true"
            >
              🧨
            </span> */}
            {/* <p className="text-2xl font-semibold text-yellow-300 drop-shadow-md">
              Live on Diwali
            </p> */}
            {/* <span
              role="img"
              aria-label="Firecracker"
              className="text-3xl"
              aria-hidden="true"
            >
              🎇
            </span> */}
          </div>

          <p className="text-base text-green-100">
            Get ready for the grand launch on October 20th at midnight IST.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            <TimeCard label="Days" value={pad(timeLeft.days)} />
            <TimeCard label="Hours" value={pad(timeLeft.hours)} />
            <TimeCard label="Minutes" value={pad(timeLeft.minutes)} />
            <TimeCard label="Seconds" value={pad(timeLeft.seconds)} />
          </div>
          <div className="festive-divider" aria-hidden="true" />
          <p className="festive-message">
            May the festival of lights brighten your home and our launch with
            joy, prosperity, and sparkling celebrations.
          </p>
          <div className="sparkle-row" aria-hidden="true">
            <span className="sparkle sparkle-1" />
            <span className="sparkle sparkle-2" />
            <span className="sparkle sparkle-3" />
          </div>

          <footer className="contact-card">
            <h2 className="contact-title">Stay in Touch</h2>
            <div className="contact-grid">
              <a
                className="contact-item"
                href="mailto:info.sribalajihomes@gmail.com"
                aria-label="Email info.sribalajihomes@gmail.com"
              >
                <span className="contact-icon" aria-hidden="true">
                  <FaEnvelope />
                </span>
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-value">info.sribalajihomes@gmail.com</p>
                </div>
              </a>
              <a
                className="contact-item"
                href="tel:+917200940777"
                aria-label="Call  +91 7200940777"
              >
                <span className="contact-icon" aria-hidden="true">
                  <FaPhoneAlt />
                </span>
                <div>
                  <p className="contact-label">Phone</p>
                  <p className="contact-value"> +91 7200940777</p>
                </div>
              </a>
              <div className="contact-item" role="group" aria-label="Address">
                <span className="contact-icon" aria-hidden="true">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <p className="contact-label">Visit Us</p>
                  <p className="contact-value">
                    A.S. Mani Garden, Plot No. 143, Pallavan Nagar,
                    Katrambakkam, Chennai - 602 103.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
          <TimeCard label="Days" value={pad(timeLeft.days)} />
          <TimeCard label="Hours" value={pad(timeLeft.hours)} />
          <TimeCard label="Minutes" value={pad(timeLeft.minutes)} />
          <TimeCard label="Seconds" value={pad(timeLeft.seconds)} />
        </div> */}
      </div>
    </section>
  );
}

function TimeCard({ label, value }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-8 flex flex-col items-center">
      <span className="text-4xl font-semibold">{value}</span>
      <span className="text-sm uppercase tracking-wide text-green-100 mt-2">
        {label}
      </span>
    </div>
  );
}

export default function CountdownGate({ children }) {
  const { timeLeft, isLive, hasHydrated } = useCountdown(LAUNCH_DATE_ISO);

  if (!hasHydrated) {
    return null;
  }

  if (isLive) {
    return <>{children}</>;
  }

  if (!timeLeft) {
    return null;
  }

  return <CountdownContent timeLeft={timeLeft} />;
}
