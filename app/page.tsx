import type { Metadata } from "next";

const sfRecSignup =
  "https://anc.apm.activecommunities.com/sfrecpark/activity/search?onlineSiteId=0&activity_select_param=2&instructor_ids=520&viewMode=list";

const instagramUrl = "https://www.instagram.com/aditi_yoga_sf/";
const calendarSubscribeUrl =
  "https://calendar.google.com/calendar/render?cid=communityflowsf%40gmail.com";
const calendarEmbedBase =
  "https://calendar.google.com/calendar/embed?height=720&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&showTabs=0&showCalendars=0&showTitle=0&src=communityflowsf%40gmail.com";

const locationMaps: Record<string, string> = {
  "49 South Van Ness":
    "https://www.google.com/maps/search/?api=1&query=49+South+Van+Ness+San+Francisco",
  "Haum Haight":
    "https://www.google.com/maps/search/?api=1&query=HAUM+STUDIOS+HAIGHT+ASHBURY+780+Stanyan+St+San+Francisco",
  "Haum Mission":
    "https://www.google.com/maps/search/?api=1&query=HAUM+STUDIOS+MISSION+2973+16th+St+San+Francisco",
  "Lovestory Larkspur":
    "https://www.google.com/maps/search/?api=1&query=Love+Story+Yoga+Larkspur",
  "Lovestory Valencia":
    "https://www.google.com/maps/search/?api=1&query=Love+Story+Yoga+Valencia+San+Francisco",
  "Mission Cliffs":
    "https://www.google.com/maps/search/?api=1&query=Mission+Cliffs+2295+Harrison+St+San+Francisco",
  "The Castro Room":
    "https://www.google.com/maps/search/?api=1&query=The+Castro+Room+97+Collingwood+St+San+Francisco",
  "Upper Noe Rec":
    "https://www.google.com/maps/search/?api=1&query=Upper+Noe+Recreation+Center+295+Day+St+San+Francisco",
};

const locations = [
  {
    name: "SF Parks & Rec",
    area: "Upper Noe Valley + Civic Center",
    format: "Rec center sessions and free city class",
    link: sfRecSignup,
    cta: "SF Rec schedule",
  },
  {
    name: "49 South Van Ness",
    area: "Civic Center",
    format: "Free Wednesday lunchtime class",
    link: "https://www.google.com/maps/search/?api=1&query=49+South+Van+Ness+San+Francisco",
    cta: "View location",
    image: "/49-south-van-ness.png",
    imageAlt: "49 South Van Ness lobby where the free Wednesday yoga class meets",
  },
  {
    name: "Mission Cliffs",
    area: "Mission",
    format: "Touchstone fitness calendar",
    link: "https://touchstoneclimbing.com/mission-cliffs/calendar/",
    cta: "Mission Cliffs calendar",
  },
  {
    name: "Lovestory",
    area: "Mission",
    format: "Studio practice",
    link: "https://lovestoryyoga.com/schedule?_mt=%2Fschedule%2Fdaily%2F48541%3FactiveDate%3D2026-07-12",
    cta: "Lovestory schedule",
  },
  {
    name: "Haum",
    area: "Mission / Haight",
    format: "Studio practice",
    link: "https://www.haumstudios.com/schedule",
    cta: "Haum schedule",
  },
  {
    name: "The Castro Room",
    area: "Castro",
    format: "Community class",
    link: "https://www.castroroom.com/schedule",
    cta: "Castro Room schedule",
  },
];

const weeklySchedule = [
  {
    date: "Jul 14, 2026",
    day: "Tuesday",
    time: "6:30-7:30pm",
    location: "Upper Noe Rec",
    signup: sfRecSignup,
    signupLabel: "Sign up",
  },
  {
    date: "Jul 15, 2026",
    day: "Wednesday",
    time: "12:10-12:55pm",
    location: "49 South Van Ness",
    signup: "https://www.google.com/maps/search/?api=1&query=49+South+Van+Ness+San+Francisco",
    signupLabel: "No sign up needed",
  },
  {
    date: "Jul 15, 2026",
    day: "Wednesday",
    time: "7:15-8:25pm",
    location: "Mission Cliffs",
    signup: "https://touchstoneclimbing.com/mission-cliffs/calendar/",
    signupLabel: "Sign up",
  },
  {
    date: "Jul 17, 2026",
    day: "Friday",
    time: "4:30-5:45pm",
    location: "Haum Mission",
    signup: "https://www.haumstudios.com/schedule",
    signupLabel: "Sign up",
  },
];

const monthlySchedule = [
  ...weeklySchedule,
  {
    date: "Jul 20, 2026",
    day: "Monday",
    time: "6:15-7:30pm",
    location: "Haum Haight",
    signup: "https://www.haumstudios.com/schedule",
    signupLabel: "Sign up",
  },
  {
    date: "Jul 21, 2026",
    day: "Tuesday",
    time: "6:30-7:30pm",
    location: "Upper Noe Rec",
    signup: sfRecSignup,
    signupLabel: "Sign up",
  },
  {
    date: "Jul 22, 2026",
    day: "Wednesday",
    time: "12:10-12:55pm",
    location: "49 South Van Ness",
    signup:
      "https://www.google.com/maps/search/?api=1&query=49+South+Van+Ness+San+Francisco",
    signupLabel: "No sign up needed",
  },
  {
    date: "Jul 22, 2026",
    day: "Wednesday",
    time: "7:15-8:25pm",
    location: "Mission Cliffs",
    signup: "https://touchstoneclimbing.com/mission-cliffs/calendar/",
    signupLabel: "Sign up",
  },
  {
    date: "Jul 26, 2026",
    day: "Sunday",
    time: "10:15-11:45am",
    location: "Lovestory Larkspur",
    signup: "https://lovestoryyoga.com/schedule",
    signupLabel: "Sign up",
  },
  {
    date: "Jul 27, 2026",
    day: "Monday",
    time: "12:00-1:00pm",
    location: "The Castro Room",
    signup: "https://www.castroroom.com/schedule",
    signupLabel: "Sign up",
  },
  {
    date: "Jul 27, 2026",
    day: "Monday",
    time: "6:15-7:30pm",
    location: "Haum Haight",
    signup: "https://www.haumstudios.com/schedule",
    signupLabel: "Sign up",
  },
  {
    date: "Jul 29, 2026",
    day: "Wednesday",
    time: "12:10-12:55pm",
    location: "49 South Van Ness",
    signup:
      "https://www.google.com/maps/search/?api=1&query=49+South+Van+Ness+San+Francisco",
    signupLabel: "No sign up needed",
  },
  {
    date: "Jul 29, 2026",
    day: "Wednesday",
    time: "7:15-8:25pm",
    location: "Mission Cliffs",
    signup: "https://touchstoneclimbing.com/mission-cliffs/calendar/",
    signupLabel: "Sign up",
  },
  {
    date: "Aug 3, 2026",
    day: "Monday",
    time: "12:00-1:00pm",
    location: "The Castro Room",
    signup: "https://www.castroroom.com/schedule",
    signupLabel: "Sign up",
  },
  {
    date: "Aug 5, 2026",
    day: "Wednesday",
    time: "12:10-12:55pm",
    location: "49 South Van Ness",
    signup:
      "https://www.google.com/maps/search/?api=1&query=49+South+Van+Ness+San+Francisco",
    signupLabel: "No sign up needed",
  },
  {
    date: "Aug 5, 2026",
    day: "Wednesday",
    time: "7:15-8:25pm",
    location: "Mission Cliffs",
    signup: "https://touchstoneclimbing.com/mission-cliffs/calendar/",
    signupLabel: "Sign up",
  },
  {
    date: "Aug 7, 2026",
    day: "Friday",
    time: "12:00-1:00pm",
    location: "The Castro Room",
    signup: "https://www.castroroom.com/schedule",
    signupLabel: "Sign up",
  },
  {
    date: "Aug 12, 2026",
    day: "Wednesday",
    time: "12:10-12:55pm",
    location: "49 South Van Ness",
    signup:
      "https://www.google.com/maps/search/?api=1&query=49+South+Van+Ness+San+Francisco",
    signupLabel: "No sign up needed",
  },
  {
    date: "Aug 12, 2026",
    day: "Wednesday",
    time: "7:15-8:25pm",
    location: "Mission Cliffs",
    signup: "https://touchstoneclimbing.com/mission-cliffs/calendar/",
    signupLabel: "Sign up",
  },
  {
    date: "Aug 13, 2026",
    day: "Thursday",
    time: "4:30-5:45pm",
    location: "Lovestory Valencia",
    signup: "https://lovestoryyoga.com/schedule",
    signupLabel: "Sign up",
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
          <a href="#weekly">Weekly</a>
          <a href="#monthly">Monthly</a>
          <a href="#locations">Locations</a>
          <a href={instagramUrl}>Instagram</a>
        </nav>
        <div className="hero__content">
          <p className="eyebrow">San Francisco yoga classes</p>
          <h1 id="hero-title">Aditi Yoga</h1>
          <p>
            Grounded, breath-led yoga for people who want to feel stronger,
            steadier, and more at home in their bodies.
          </p>
          <div className="hero__actions" aria-label="Class actions">
            <a className="button button--primary" href="#weekly">
              See upcoming classes
            </a>
          </div>
        </div>
      </section>

      <section className="section intro" aria-labelledby="bio-title">
        <div>
          <p className="eyebrow">Practice with Aditi</p>
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
            Haum, Mission Cliffs, The Castro Room, and SF Parks & Rec
            offerings.
          </p>
        </div>
      </section>

      <section className="section calendar" id="weekly" aria-labelledby="weekly-title">
        <div className="section__heading">
          <p className="eyebrow">Live week view</p>
          <h2 id="weekly-title">Upcoming week</h2>
          <p>
            A live Google Calendar view of where Aditi is teaching this week.
            Updates here will stay in sync with the public calendar.
          </p>
          <div className="calendar-actions" aria-label="Calendar and social links">
            <a className="button button--outline" href={calendarSubscribeUrl}>
              Add to Google Calendar
            </a>
            <a className="button button--outline" href={instagramUrl}>
              Follow on Instagram
            </a>
          </div>
        </div>
        <div className="calendar-embed">
          <iframe
            src={`${calendarEmbedBase}&mode=WEEK`}
            title="Aditi Yoga upcoming week calendar"
          />
        </div>
      </section>

      <section className="section monthly" id="monthly" aria-labelledby="monthly-title">
        <div className="section__heading">
          <p className="eyebrow">Live month view</p>
          <h2 id="monthly-title">Upcoming month</h2>
          <p>
            A broader month view for planning ahead. Select an event in the
            calendar for the latest location and time details.
          </p>
        </div>
        <div className="calendar-embed">
          <iframe
            src={`${calendarEmbedBase}&mode=MONTH`}
            title="Aditi Yoga upcoming month calendar"
          />
        </div>
      </section>

      <section className="section locations" id="locations">
        <div className="section__heading">
          <p className="eyebrow">Locations</p>
          <p>
            Each location links to its live schedule or map. The 49 South Van
            Ness image shows the Wednesday class space.
          </p>
        </div>
        <div className="venue-grid">
          {locations.map((location) => (
            <article className="venue-card" key={location.name}>
              {location.name === "49 South Van Ness" ? (
                <img
                  className="venue-card__image"
                  src="/49-south-van-ness.png"
                  alt="49 South Van Ness lobby where the free Wednesday yoga class meets"
                />
              ) : null}
              <div>
                <p>{location.area}</p>
                <h3>{location.name}</h3>
              </div>
              <span>{location.format}</span>
              <a href={location.link}>{location.cta}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="instagram" aria-labelledby="instagram-title">
        <div>
          <p className="eyebrow">Instagram</p>
          <h2 id="instagram-title">Follow Aditi Yoga SF</h2>
        </div>
        <p>
          Follow along for schedule updates, class notes, and community
          practice announcements.
        </p>
        <a className="button button--primary" href={instagramUrl}>
          Open Instagram
        </a>
      </section>
    </main>
  );
}
