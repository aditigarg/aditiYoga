import type { Metadata } from "next";

const venues = [
  {
    name: "Lovestory",
    area: "Mission",
    format: "Studio practice",
    signup: "https://www.lovestoryyoga.com/",
    cta: "Book through Lovestory",
  },
  {
    name: "Haum",
    area: "Mission / Haight",
    format: "Studio practice",
    signup: "https://www.haumsf.com/",
    cta: "Book through Haum",
  },
  {
    name: "The Castro Room",
    area: "Castro",
    format: "Community class",
    signup: "#contact",
    cta: "Ask about the next class",
  },
  {
    name: "SF Parks & Rec",
    area: "San Francisco parks",
    format: "Outdoor public practice",
    signup: "https://sfrecpark.org/register",
    cta: "Register with SF Rec",
  },
];

const classes = [
  {
    date: "Weekly",
    day: "Studio schedule",
    time: "Check live times",
    title: "Lovestory Yoga",
    venue: "Lovestory",
    note: "Regular classes are booked through Lovestory's schedule.",
    signup: "https://www.lovestoryyoga.com/",
  },
  {
    date: "Weekly",
    day: "Studio schedule",
    time: "Check live times",
    title: "Haum Yoga",
    venue: "Haum",
    note: "Find current class times and reserve your mat through Haum.",
    signup: "https://www.haumsf.com/",
  },
  {
    date: "Next pop-up",
    day: "Announced soon",
    time: "TBA",
    title: "Practice at The Castro Room",
    venue: "The Castro Room",
    note: "Join the interest list for the next community class.",
    signup: "#contact",
  },
  {
    date: "Seasonal",
    day: "Parks session",
    time: "TBA",
    title: "Yoga with SF Parks & Rec",
    venue: "SF Parks & Rec",
    note: "Registration opens through the city recreation portal.",
    signup: "https://sfrecpark.org/register",
  },
];

export const metadata: Metadata = {
  title: "Aditi Yoga | San Francisco Classes",
  description:
    "Bio, class calendar, and signup links for Aditi's San Francisco yoga classes.",
};

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/aditi-yoga-hero.png"
          alt="A calm yoga class in a sunny San Francisco studio"
        />
        <div className="hero__overlay" />
        <nav className="nav" aria-label="Primary navigation">
          <a href="#calendar">Calendar</a>
          <a href="#venues">Studios</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hero__content">
          <p className="eyebrow">San Francisco yoga classes</p>
          <h1 id="hero-title">Aditi Yoga</h1>
          <p>
            Grounded, breath-led yoga for people who want to feel stronger,
            steadier, and more at home in their bodies.
          </p>
          <div className="hero__actions" aria-label="Class actions">
            <a className="button button--primary" href="#calendar">
              See upcoming classes
            </a>
            <a className="button button--secondary" href="#venues">
              Choose a studio
            </a>
          </div>
        </div>
      </section>

      <section className="section intro" aria-labelledby="bio-title">
        <div>
          <p className="eyebrow">Meet Aditi</p>
          <h2 id="bio-title">Practice that makes room for real life.</h2>
        </div>
        <div className="intro__copy">
          <p>
            Aditi teaches yoga with an emphasis on clear alignment, steady
            breath, and an atmosphere that feels welcoming without losing depth.
            Her classes move with intention: enough heat to build capacity,
            enough stillness to listen, and enough choice to meet the body you
            arrived with today.
          </p>
          <p>
            You can practice with Aditi across San Francisco at Lovestory,
            Haum, The Castro Room, and seasonal SF Parks & Rec offerings.
          </p>
        </div>
      </section>

      <section className="section calendar" id="calendar" aria-labelledby="calendar-title">
        <div className="section__heading">
          <p className="eyebrow">Class calendar</p>
          <h2 id="calendar-title">Upcoming ways to practice</h2>
          <p>
            Exact dates can be swapped into this calendar as soon as they are
            confirmed. Each listing points students to the right booking path.
          </p>
        </div>
        <div className="calendar__list">
          {classes.map((classItem) => (
            <article className="class-card" key={classItem.title}>
              <div className="class-card__date">
                <strong>{classItem.date}</strong>
                <span>{classItem.day}</span>
              </div>
              <div className="class-card__body">
                <div>
                  <p className="class-card__venue">{classItem.venue}</p>
                  <h3>{classItem.title}</h3>
                </div>
                <p>{classItem.note}</p>
              </div>
              <div className="class-card__meta">
                <span>{classItem.time}</span>
                <a href={classItem.signup}>Sign up</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section venues" id="venues" aria-labelledby="venues-title">
        <div className="section__heading">
          <p className="eyebrow">Where to book</p>
          <h2 id="venues-title">Find the class that fits your week</h2>
        </div>
        <div className="venue-grid">
          {venues.map((venue) => (
            <article className="venue-card" key={venue.name}>
              <div>
                <p>{venue.area}</p>
                <h3>{venue.name}</h3>
              </div>
              <span>{venue.format}</span>
              <a href={venue.signup}>{venue.cta}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Stay in the loop</p>
          <h2 id="contact-title">Want the next Castro Room or parks class?</h2>
        </div>
        <p>
          Add your preferred email, newsletter, or booking link here so students
          can get notified when pop-ups and seasonal sessions are announced.
        </p>
        <a className="button button--primary" href="mailto:hello@aditiyoga.com">
          Email Aditi
        </a>
      </section>
    </main>
  );
}
