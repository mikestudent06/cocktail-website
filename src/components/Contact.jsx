import { openingHours, socials, storeInfo } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "-50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt=""
        aria-hidden="true"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt=""
        aria-hidden="true"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>{storeInfo.heading}</h2>

        <div>
          <h3>Venez au bar</h3>
          <p>{storeInfo.address}</p>
          <p className="text-white-100">{storeInfo.tagline}</p>
        </div>

        <div>
          <h3>Nous contacter</h3>
          <p>
            <a href={`tel:${storeInfo.contact.phone.replace(/\s/g, "")}`}>
              {storeInfo.contact.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${storeInfo.contact.email}`}>
              {storeInfo.contact.email}
            </a>
          </p>
        </div>

        <div>
          <h3>Horaires d'ouverture</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Réseaux sociaux</h3>

          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
