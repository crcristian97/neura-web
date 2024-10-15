"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "websites",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "with us.",
    },
  ];

  const handleContactClick = () => {
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
      signupForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServicesClick = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button 
          className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
          onClick={handleServicesClick}
        >
          Services
        </button>
        <button 
          className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm"
          onClick={handleContactClick}
        >
          Contact
        </button>
      </div>
    </div>
  );
}
