"use client";

import { useState, useEffect } from "react";
import { FaFacebookF, FaTimes } from "react-icons/fa";

export default function SharePopup({ shareUrl }: { shareUrl: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative mx-4 max-w-sm w-full rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-black/5 text-center">
        {/* Close */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <FaTimes className="text-lg" />
        </button>

        {/* Emoji */}
        <span className="text-4xl">🎓</span>

        {/* Message */}
        <p className="mt-3 text-gray-700 font-medium leading-relaxed">
          Dear Students, kindly share this video on your Facebook page and
          celebrate with your friends!
        </p>

        {/* Share Button */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setShow(false)}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-6 py-2.5 text-white text-sm font-bold shadow-lg shadow-[#1877F2]/25 transition-all hover:scale-105 hover:bg-[#1565d8]"
        >
          <FaFacebookF />
          Share on Facebook
        </a>

        
      </div>
    </div>
  );
}
