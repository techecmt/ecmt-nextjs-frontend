import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import {
  AirVent,
  ArrowRight,
  Bus,
  Car,
  ChevronRight,
  Coffee,
  ConciergeBell,
  Users,
  Fan,
  Mail,
  MapPin,
  MonitorPlay,
  Phone,
  Presentation,
  ShieldCheck,
  Sun,
  Table2,
  TrainFront,
  Wifi,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Training Room for Rent at Beach Road | Edusphere College Singapore",
  description:
    "Bright, classroom-style training room for rent at 7500A Beach Road, The Plaza. Up to 46 pax, projector, screen and high-speed Wi-Fi from $350 + GST per full day.",
  alternates: {
    canonical: "https://edusphere.edu.sg/training-room-rental-beach-road",
  },
  openGraph: {
    title: "Training Room for Rent at Beach Road | Edusphere College",
    description:
      "Up to 46 pax, classroom-style, projector & screen, high-speed Wi-Fi. $350 + GST per full day at The Plaza, Beach Road.",
    url: "https://edusphere.edu.sg/training-room-rental-beach-road",
    images: ["/facilities/classroom-2.jpg"],
  },
};

const WHATSAPP_URL = "https://wa.me/6582200095";
const PHONE_DISPLAY = "(+65) 8220 0095";
const PHONE_TEL = "+6582200095";
const EMAIL = "tahir@edusphere.edu.sg";

const highlights = [
  { icon: Users, label: "Up to 46 pax" },
  { icon: Presentation, label: "Classroom style" },
  { icon: MonitorPlay, label: "Projector & screen" },
  { icon: Wifi, label: "High-speed Wi-Fi" },
  { icon: AirVent, label: "Air-conditioned" },
  { icon: Coffee, label: "Pantry & reception" },
];

const roomFeatures = [
  "Large windows with city view — natural light and an airy environment",
  "Classroom-style setup for focused learning",
  "High-speed Wi-Fi, projector and screen",
  "Pantry and reception area for your convenience",
  "Self-service venue with no on-site staff support",
];

const included = [
  { icon: Table2, label: "Classroom-style tables & chairs" },
  { icon: MonitorPlay, label: "Projector & screen" },
  { icon: Wifi, label: "High-speed Wi-Fi" },
  { icon: Coffee, label: "Pantry area" },
  { icon: ConciergeBell, label: "Reception area" },
  { icon: Fan, label: "2 portable air-coolers" },
];

const airconHours = [
  { day: "Mon – Fri", hours: "approx. 8:00am – 7:00pm" },
  { day: "Saturday", hours: "approx. 8:00am – 1:00pm" },
  { day: "Sun & Public Holiday", hours: "No central air-conditioning" },
];

const gettingHere = [
  { icon: TrainFront, label: "7-min walk to Nicoll Highway MRT" },
  { icon: TrainFront, label: "10-min walk to Bugis MRT" },
  { icon: MapPin, label: "Near Bugis Junction, Suntec City & the CBD" },
  { icon: Bus, label: "Many bus services & F&B options nearby" },
];

const conditions = [
  "The room is set up in a classroom layout. Any other seating arrangement can be set up on your own half an hour before use, and must be reinstated to the original layout after use. Charges for reinstatement will be levied upon failure to do so.",
  "An LCD projector with remote control and Wi-Fi access are provided as part of the room rate.",
  "You are welcome to use your own caterer.",
  "Upon checkout, please clean up the training room and reception area, dispose of the garbage bag and replenish a new one for the next user.",
  "If the room and/or pantry area are not cleaned and garbage is not cleared at checkout, charges for the extra cost of cleaning will be levied.",
];

export default function TrainingRoomRentalBeachRoad() {
  const venueSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Training Room Rental at Beach Road, The Plaza",
    description:
      "Classroom-style training room for rent in Singapore seating up to 46 pax, with projector, screen, high-speed Wi-Fi, pantry and reception area.",
    image: "https://edusphere.edu.sg/facilities/classroom-2.jpg",
    brand: { "@type": "Organization", name: "Edusphere College" },
    offers: {
      "@type": "Offer",
      price: "350",
      priceCurrency: "SGD",
      availability: "https://schema.org/InStock",
      url: "https://edusphere.edu.sg/training-room-rental-beach-road",
    },
    areaServed: { "@type": "Country", name: "Singapore" },
  };

  return (
    <main className="bg-white font-sans text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(venueSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#effbf8] via-white to-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1AB69D]">
              Venue hire · Beach Road
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Training room
              <span className="block text-[#1AB69D]">for rent</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
              A professional, comfortable space for your training sessions,
              workshops, seminars and meetings — right at The Plaza,
              7500A Beach Road.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-gray-900">$350</span>
                <span className="text-sm font-medium text-gray-500">
                  + GST / full day
                </span>
              </div>
              <span className="hidden h-8 w-px bg-gray-200 sm:block" />
              <p className="text-sm font-medium text-gray-600">
                9:00am – 6:00pm, Monday to Friday
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1AB69D] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#1AB69D]/30 transition hover:bg-[#159683]"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp to check availability
              </a>
              <a
                href={`mailto:${EMAIL}?subject=Training%20Room%20Rental%20Enquiry`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-base font-semibold text-gray-800 transition hover:border-[#1AB69D] hover:text-[#1AB69D]"
              >
                <Mail className="h-5 w-5" />
                Email us
              </a>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Bright. Spacious. Productive. — seats up to 46 pax.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-[#1AB69D]/10 shadow-2xl shadow-[#1AB69D]/15">
              <Image
                src="/facilities/classroom-2.jpg"
                alt="Training room for rent at Beach Road, set up in classroom style"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-5 left-6 rounded-2xl bg-white px-5 py-3 shadow-xl ring-1 ring-gray-100 sm:left-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Capacity
              </p>
              <p className="text-xl font-bold text-gray-900">Up to 46 pax</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlight strip ──────────────────────────────────── */}
      <section className="border-y border-gray-100 bg-gray-50/70">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 py-10 sm:px-6 md:grid-cols-3 lg:grid-cols-6 lg:px-8">
          {highlights.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 px-2 py-4 text-center"
            >
              <span className="rounded-2xl bg-[#1AB69D]/10 p-3 text-[#1AB69D]">
                <Icon className="h-6 w-6" />
              </span>
              <span className="text-sm font-semibold leading-snug text-gray-700">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bright. Spacious. Productive. ───────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1AB69D]">
              The space
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Bright. Spacious. Productive.
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Our training room at The Plaza offers a professional and
              comfortable environment for your training, workshops, seminars
              and meetings.
            </p>
            <ul className="mt-8 space-y-4">
              {roomFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 rounded-full bg-[#1AB69D]/10 p-1 text-[#1AB69D]">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                  <span className="leading-7 text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/facilities/classroom-2-1.jpg"
              alt="Large windows and natural light in the Beach Road training room"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Rates ───────────────────────────────────────────── */}
      <section className="bg-linear-to-b from-white via-[#effbf8] to-white py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1AB69D]">
              Rental rates
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple, full-day pricing
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-[#1AB69D] p-8 text-white shadow-xl shadow-[#1AB69D]/25 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
                Full day rental
              </p>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-bold">$350</span>
                <span className="text-lg font-medium text-white/85">+ GST</span>
              </p>
              <div className="mt-6 space-y-2 text-sm text-white/90">
                <p className="font-semibold">9:00am – 6:00pm</p>
                <p>Monday to Friday</p>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                Security deposit
              </p>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-bold text-gray-900">$200</span>
              </p>
              <div className="mt-6 flex items-start gap-3 text-sm leading-6 text-gray-600">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#1AB69D]" />
                <span>
                  Refundable, charged per booking and returned after checkout
                  once the room is left in its original condition.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-gray-800"
            >
              Check available dates
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Facilities & equipment ──────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1AB69D]">
            Included in your booking
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Facilities &amp; equipment
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {included.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:border-[#1AB69D]/30 hover:shadow-md"
            >
              <span className="rounded-xl bg-[#1AB69D]/10 p-3 text-[#1AB69D]">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-medium text-gray-700">{label}</span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-amber-100 bg-amber-50/70 p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <Sun className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
            <div>
              <h3 className="font-semibold text-gray-900">
                About the air-conditioning
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                The Plaza&apos;s central air-conditioning operating hours are
                determined by the building management. Two portable air-coolers
                are provided for use when the central air-conditioning is off.
              </p>
              <dl className="mt-5 grid gap-3 sm:grid-cols-3">
                {airconHours.map(({ day, hours }) => (
                  <div
                    key={day}
                    className="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-amber-100"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      {day}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-gray-700">
                      {hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pantry & reception ──────────────────────────────── */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1AB69D]">
              Shared areas
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pantry &amp; reception area
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              Somewhere for your participants to grab a coffee, and a welcome
              point for registration on the day.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <GalleryImage
              src="/facilities/pantry.jpg"
              title="Pantry"
              caption="Refreshments and catering set-down for your session."
            />
            <GalleryImage
              src="/facilities/reception.jpg"
              title="Reception"
              caption="Sign-in and welcome area for your participants."
            />
          </div>
        </div>
      </section>

      {/* ── Getting here ────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1AB69D]">
              Getting here
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A convenient city-fringe location
            </h2>
            <p className="mt-5 flex items-start gap-3 text-lg leading-8 text-gray-600">
              <MapPin className="mt-1.5 h-5 w-5 shrink-0 text-[#1AB69D]" />
              <span>
                7500A Beach Road, #05-312 The Plaza, Singapore 199591
              </span>
            </p>

            <ul className="mt-8 space-y-4">
              {gettingHere.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="rounded-xl bg-[#1AB69D]/10 p-2.5 text-[#1AB69D]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-gray-700">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex">
            <div className="w-full rounded-3xl border border-gray-100 bg-white p-8 shadow-lg sm:p-10">
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-[#1AB69D]/10 p-3 text-[#1AB69D]">
                  <Car className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-bold text-gray-900">For drivers</h3>
              </div>
              <p className="mt-5 leading-7 text-gray-600">
                The Sultan Gate URA carpark nearby may be a more economical
                parking option for you and your participants.
              </p>
              <p className="mt-4 inline-flex rounded-full bg-[#1AB69D]/10 px-4 py-1.5 text-sm font-semibold text-[#159683]">
                No ERP charges outside the CBD
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Venue use & booking conditions ──────────────────── */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1AB69D]">
              Good to know
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Venue use &amp; booking conditions
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              We aim to give you a value-for-money, no-frills room rate in a
              classy and cosy ambience.
            </p>
          </div>

          <ol className="mt-10 space-y-4">
            {conditions.map((condition, index) => (
              <li
                key={condition}
                className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1AB69D]/10 text-sm font-bold text-[#1AB69D]">
                  {index + 1}
                </span>
                <span className="leading-7 text-gray-700">{condition}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────── */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gray-900 shadow-2xl">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to book your date?
              </h2>
              <p className="mt-5 leading-8 text-gray-300">
                Message or call us with your preferred date and we will confirm
                availability, walk you through the booking, and arrange a
                viewing if you would like to see the room first.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-[#1AB69D] px-6 py-4 font-semibold text-white transition hover:bg-[#159683]"
                >
                  <FaWhatsapp className="text-2xl" />
                  <span>
                    WhatsApp
                    <span className="block text-sm font-normal text-white/85">
                      {PHONE_DISPLAY}
                    </span>
                  </span>
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-4 rounded-2xl bg-white/5 px-6 py-4 font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  <Phone className="h-6 w-6 text-[#1AB69D]" />
                  <span>
                    Call us
                    <span className="block text-sm font-normal text-gray-300">
                      {PHONE_DISPLAY}
                    </span>
                  </span>
                </a>
                <a
                  href={`mailto:${EMAIL}?subject=Training%20Room%20Rental%20Enquiry`}
                  className="flex items-center gap-4 rounded-2xl bg-white/5 px-6 py-4 font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  <Mail className="h-6 w-6 text-[#1AB69D]" />
                  <span>
                    Email
                    <span className="block text-sm font-normal break-all text-gray-300">
                      {EMAIL}
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
              <h3 className="text-lg font-bold text-white">At a glance</h3>
              <dl className="mt-6 space-y-5 text-sm">
                <Spec label="Capacity" value="Up to 46 pax, classroom style" />
                <Spec label="Rate" value="$350 + GST per full day" />
                <Spec label="Hours" value="9:00am – 6:00pm, Mon – Fri" />
                <Spec label="Deposit" value="$200 refundable, per booking" />
                <Spec
                  label="Address"
                  value="7500A Beach Road, #05-312 The Plaza, Singapore 199591"
                />
              </dl>

                          </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function GalleryImage({
  src,
  title,
  caption,
}: {
  src: string;
  title: string;
  caption: string;
}) {
  return (
    <figure className="overflow-hidden rounded-3xl bg-white shadow-lg">
      <div className="relative h-72 w-full sm:h-80">
        <Image src={src} alt={title} fill className="object-cover" />
      </div>
      <figcaption className="p-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-800">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-gray-600">{caption}</p>
      </figcaption>
    </figure>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-white/10 pb-4 last:border-0 last:pb-0 sm:flex-row sm:justify-between sm:gap-6">
      <dt className="shrink-0 font-medium text-gray-400">{label}</dt>
      <dd className="font-semibold text-white sm:text-right">{value}</dd>
    </div>
  );
}
