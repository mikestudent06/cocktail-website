import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });

    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    // Apply text-gradient class once before animating
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 2,
      ease: "expo.out",
      stagger: 0.09,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 3,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 300, duration: 0.2 }, 0)
      .to(".left-leaf", { y: -300, duration: 0.2 }, 0)
      .to(".arrow", { y: 150 }, 0);

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      console.log("videoRef.current duration", videoRef.current.duration);
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">COCO</h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="Feuille décorative gauche"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="Feuille décorative droite"
          className="right-leaf"
        />

        <div className="body">
          <img src="/images/arrow.png" alt="Flèche vers le bas" className="arrow" />

          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Frais. Audacieux. Inoubliable.</p>
              <p className="subtitle">
                L'esprit du cocktail <br /> à Brazzaville
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                COCO vous accueille au cœur de Brazzaville pour des cocktails
                signature, des mocktails rafraîchissants et un service bar sur
                mesure pour vos soirées et événements privés.
              </p>
              <a href="#cocktails">Découvrir la carte</a>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output.mp4"
        />
      </div>
    </>
  );
};

export default Hero;
