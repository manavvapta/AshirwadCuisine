import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { navLinks } from "../../constants/index.js";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "rgba(0, 0, 0, 0.86)",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  });

  return (
    <nav>
      <div>
       <a href="#home" className="flex items-center gap-2 sm:gap-3">
  <img
    src="/images/logo.png"
    alt="logo"
    className="h-12 w-12 sm:h-15 sm:w-15 rounded-4xl"
  />

  <div className="flex flex-col justify-center">
   <h1 className="text-[#C9A227] font-bold text-lg sm:text-2xl md:text-3xl leading-none">
  Ashirwad Cuisine
</h1>

    <p className="text-[#C9A227] text-[11px] sm:text-xs md:text-sm leading-none -mt-2 font-medium">
  Taste of Blessings
</p>
  </div>
</a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="
          
          bg-[#0F3B2E]
          text-[#C9A227]
          px-4 py-2
          rounded-xl
          border border-[#C9A227]
          transition-all duration-300 ease-out
          hover:bg-[#C9A227]
          hover:text-[#0F3B2E]
          hover:scale-105
          hover:shadow-lg
        "
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
