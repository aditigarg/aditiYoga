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
    area: "Upper Noe Valley Rec Center",
    address: "295 Day Street",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Upper+Noe+Recreation+Center+295+Day+St+San+Francisco",
    link: sfRecSignup,
    cta: "SF Rec schedule",
    image: "/upper-noe-rec-center.png",
    imageAlt: "Upper Noe Valley Rec Center practice room with wood floor and vaulted ceiling",
  },
  {
    name: "49 South Van Ness",
    area: "SF Arts Commission",
    address: "49 South Van Ness",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=49+South+Van+Ness+San+Francisco",
    link: "https://www.google.com/maps/search/?api=1&query=49+South+Van+Ness+San+Francisco",
    cta: "View location",
    image: "/49-south-van-ness.png",
    imageAlt: "49 South Van Ness lobby where the free Wednesday yoga class meets",
  },
  {
    name: "Mission Cliffs",
    area: "Mission Cliffs",
    address: "2295 Harrison Street",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Mission+Cliffs+2295+Harrison+St+San+Francisco",
    link: "https://touchstoneclimbing.com/mission-cliffs/calendar/",
    cta: "Mission Cliffs calendar",
  },
  {
    name: "Lovestory",
    area: "Lovestory",
    addresses: [
      {
        label: "473 Valencia Street",
        href: "https://www.google.com/maps/search/?api=1&query=Love+Story+Yoga+473+Valencia+Street+San+Francisco",
      },
      {
        label: "Marin Country Mart, Larkspur",
        href: "https://www.google.com/maps/search/?api=1&query=Love+Story+Yoga+Marin+Country+Mart+Larkspur",
      },
    ],
    link: "https://lovestoryyoga.com/schedule?_mt=%2Fschedule%2Fdaily%2F48541%3FactiveDate%3D2026-07-12",
    cta: "Lovestory schedule",
  },
  {
    name: "Haum",
    area: "Haum",
    addresses: [
      {
        label: "2973 16th St, 5th Floor",
        href: "https://www.google.com/maps/search/?api=1&query=HAUM+STUDIOS+MISSION+2973+16th+St+5th+Floor+San+Francisco",
      },
      {
        label: "780 Stanyan Street",
        href: "https://www.google.com/maps/search/?api=1&query=HAUM+STUDIOS+HAIGHT+ASHBURY+780+Stanyan+Street+San+Francisco",
      },
    ],
    link: "https://www.haumstudios.com/schedule",
    cta: "Haum schedule",
  },
  {
    name: "The Castro Room",
    area: "The Castro Room",
    address: "97 Collingwood Street",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=The+Castro+Room+97+Collingwood+St+San+Francisco",
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
          <a href={calendarSubscribeUrl}>Add Calendar</a>
          <a href="#locations">Locations</a>
          <a href={instagramUrl}>Instagram</a>
        </nav>
        <div className="hero__content">
          <p className="eyebrow">San Francisco yoga classes</p>
          <h1 id="hero-title">Practice Yoga with Aditi</h1>
          <p>Pragmatic practice of breath, movement and philosophy</p>
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
        </div>
        <div className="intro__copy">
          <p>
            Aditi has been leading classes for over 20 years in settings as
            varied as MIT, youth camps, SF Parks & Rec, Bay Area tech
            companies, and local studios. She was exposed to yoga philosophy
            and elements of the Asana practice, Pranayama, and Naada Yoga from
            a very young age at ashrams and schools in Rishikesh, Dharamshala,
            Jaipur, and Delhi. She began delving into the physical practice in
            her teens under the guidance of{" "}
            <a href="https://www.hinduismtoday.com/magazine/jul-aug-sept-2023/i-learned-yoga-from-a-living-master/">
              Swami Bua
            </a>{" "}
            (who was nearly 100 years old at the time). More recently, she’s
            explored interests in Ayurveda, Advaita Vedanta, Panchakarma and
            Karma Yoga (as it relates to bringing startups to success in the Bay
            Area as well), and has deepened her training in many different
            styles of the physical and Pranayama practice, including locally
            with{" "}
            <a href="https://www.rustywells.com/meet-rusty">Rusty Wells</a>,{" "}
            <a href="https://www.stephaniesnyder.com/">Stephanie Snyder</a> and{" "}
            <a href="https://jasonyoga.com/">Jason Crandell</a>.
          </p>
          <p>
            You can practice with Aditi across San Francisco at{" "}
            <a href="https://lovestoryyoga.com/schedule-valencia">Lovestory</a>,{" "}
            <a href="https://www.haumstudios.com/schedule">Haum</a>, Mission
            Cliffs,{" "}
            <a href="https://www.castroroom.com/schedule">The Castro Room</a>,
            and SF Parks & Rec offerings.
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
        </div>
        <div className="venue-grid">
          {locations.map((location) => (
            <article className="venue-card" key={location.name}>
              {location.image ? (
                <img
                  className="venue-card__image"
                  src={location.image}
                  alt={location.imageAlt}
                />
              ) : null}
              <div>
                <p>{location.area}</p>
                {"address" in location ? (
                  <a className="venue-card__address" href={location.mapLink}>
                    {location.address}
                  </a>
                ) : null}
                {"addresses" in location ? (
                  <div className="venue-card__addresses">
                    {location.addresses.map((address) => (
                      <a
                        className="venue-card__address"
                        href={address.href}
                        key={address.label}
                      >
                        {address.label}
                      </a>
                    ))}
                  </div>
                ) : null}
                {"address" in location || "addresses" in location ? null : (
                  <h3>{location.name}</h3>
                )}
              </div>
              {"format" in location ? <span>{location.format}</span> : null}
              <a className="venue-card__cta" href={location.link}>
                {location.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="instagram" aria-labelledby="instagram-title">
        <div>
          <p className="eyebrow">Follow</p>
        </div>
        <p>
          Follow along for schedule updates and community practice
          announcements.
        </p>
        <div className="contact__actions">
          <a className="button button--primary" href={instagramUrl}>
            Open Instagram
          </a>
          <a className="button button--outline" href={calendarSubscribeUrl}>
            Add Calendar
          </a>
        </div>
      </section>
    </main>
  );
}
