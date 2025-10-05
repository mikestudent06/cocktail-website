import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { navLinks } from "../../constants/index.js";
import { useRef } from "react";

const Navbar = () => {
  const navElement = useRef(null);
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
        scrub: 5,
      },
    });

    navTween.fromTo(
      navElement.current,
      { backgroundColor: "transparent" },
      {
        duration: 1,
        ease: "power1.inOut",
        onStart: () => {
          navElement.current.classList.add("backdrop");
        },
      }
    );
  });

  return (
    <nav ref={navElement}>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
