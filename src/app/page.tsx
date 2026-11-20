"use client";

import { useEffect, useState } from "react";

const LAUNCH_DATE = new Date("2027-01-01T04:00:00+05:30").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const difference = Math.max(0, LAUNCH_DATE - Date.now());

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function LockIcon() {
  return (
    <svg viewBox="0 0 64 64" className="lock-icon" fill="none">
      <rect x="10" y="27" width="44" height="32" rx="6" fill="#f00016" />
      <path
        d="M19 27V19a13 13 0 0 1 26 0v8"
        stroke="#ff1828"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle cx="32" cy="40" r="5" fill="#080808" />
      <path d="M30 43h4l2 9h-8l2-9Z" fill="#080808" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" width="28" height="28">
      <circle cx="24" cy="16" r="9" fill="white" />
      <path
        d="M7 42c0-10 7-15 17-15s17 5 17 15"
        fill="white"
      />
    </svg>
  );
}

export default function Home() {
  const [time, setTime] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const update = () => setTime(getTimeLeft());
    update();

    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const format = (value: number) => String(value).padStart(2, "0");

  return (
    <main className="htgsrs-page">
      <header className="site-header">
        <a href="/" className="brand" aria-label="HTGSRS Home">
          <img
            src="/htgsrs-logo.png"
            alt="HTGSRS Logo"
            className="brand-logo"
          />
        </a>

        <button
          className="profile-button"
          aria-label="Google profile"
          title="Google Profile"
        >
          <ProfileIcon />
        </button>
      </header>

      <section className="countdown-section">
        <LockIcon />

        <h1 className="countdown-heading">
          LAUNCH COUNTDOWN
        </h1>

        <div className="countdown-timer" aria-live="off">
          <span>{format(time.days)}</span>
          <b>:</b>
          <span>{format(time.hours)}</span>
          <b>:</b>
          <span>{format(time.minutes)}</span>
          <b>:</b>
          <span>{format(time.seconds)}</span>
          <div className="countdown-status">
  <span className="status-dot">
    
  </span>
  UPCOMING
</div>
        </div>
      </section>

      <section className="content-section">
        <article className="mission-section">
          <h2>
            <span className="section-mark">|</span>
            HTGSRS <span>MISSION</span>
          </h2>

          <p>
            HTGSRS aims to create innovative technology, develop
            powerful digital platforms, build advanced software
            tools and deliver meaningful digital experiences.
            Our mission is to transform creative ideas into
            real-world technology through independent development,
            continuous innovation and engineering excellence.
          </p>

          <p>
            We strive to make advanced technology more accessible,
            encourage creativity, simplify complex digital
            processes and empower individuals, developers and
            creators around the world.
          </p>
        </article>

        <article className="vision-section">
          <h2>
            <span className="section-mark">|</span>
            HTGSRS <span>VISION</span>
          </h2>

          <p>
            HTGSRS envisions becoming a globally recognised
            technology ecosystem, bringing together software
            development, gaming technology, creative applications
            and intelligent digital solutions under one platform.
          </p>

          <p>
            Our vision is to build a future where innovation
            has no boundaries, technology creates new
            opportunities and every product reflects quality,
            reliability, creativity and excellence.
          </p>
        </article>
      </section>

      <footer className="site-footer">
        <span>HTGSRS</span>
      </footer>
    </main>
  );
}