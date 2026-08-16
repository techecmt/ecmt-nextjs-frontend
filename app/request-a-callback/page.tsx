import type { Metadata } from "next";
import Image from "next/image";
import { CalendarClock, Headphones, ShieldCheck } from "lucide-react";

import CallbackRequestForm from "../components/CallbackRequestForm";

export const metadata: Metadata = {
  title: "Request a Callback | Edusphere College",
  description:
    "Request a callback from an Edusphere student counsellor at a date and time that suits you.",
  alternates: { canonical: "https://edusphere.edu.sg/request-a-callback" },
};

export default function RequestCallbackPage() {
  return (
    <section className="bg-linear-to-b from-[#effbf8] via-white to-white py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
        <div className="pt-2 lg:pt-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1AB69D]">
            Speak with an advisor
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Request a callback
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
            Tell us the course you are interested in and the most convenient time
            to speak. Our student counsellor will get in touch with you.
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-[#1AB69D]/10 bg-white shadow-lg shadow-[#1AB69D]/10">
            <Image
              src="/studentcounsellor.png"
              alt="Edusphere student counsellor"
              width={1024}
              height={1024}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div className="mt-8 space-y-5">
            <Benefit
              icon={<CalendarClock className="h-5 w-5" />}
              title="Choose a convenient time"
              description="Select the date and time that works best for you."
            />
            <Benefit
              icon={<Headphones className="h-5 w-5" />}
              title="Get course guidance"
              description="Discuss course options, schedules, and your next steps."
            />
            <Benefit
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Your request is handled securely"
              description="Your details go directly to our student counselling team."
            />
          </div>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-[#1AB69D]/10 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900">Your callback details</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            All fields are required so we can prepare the right information for
            your call.
          </p>
          <div className="mt-7">
            <CallbackRequestForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefit({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 rounded-full bg-[#1AB69D]/10 p-2 text-[#1AB69D]">{icon}</span>
      <div>
        <h2 className="font-semibold text-gray-900">{title}</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>
      </div>
    </div>
  );
}
