"use client";

import { useEffect, useState } from "react";
import ProjectGallery from "./components/ProjectGallery/ProjectGallery";
const services = [
  ["fas fa-link", "Chain Link Fencing", "Strong and cost-effective fencing solutions for residential and industrial properties."],
  ["fas fa-shield", "Weld Mesh Fencing", "High-strength welded mesh fencing offering excellent visibility, security and long-term durability."],
  ["fas fa-seedling", "Agricultural Fencing", "Durable fencing solutions for farms, plantations, and agricultural lands."],
  ["fas fa-industry", "Industrial Fencing", "Heavy-duty fencing installations for factories, warehouses, and industries."],
  ["fas fa-screwdriver-wrench", "Fence Installation", "Professional fencing and gate installation services with quality workmanship and timely project completion."],
  ["fas fa-hammer", "Maintenance & Repair", "Repair and maintenance services to extend the life of existing fencing."],
];

const fenceTypes = [
  ["/images/Chain-Link.png", "Chain Link Fence"],
  ["/images/Barbed-Wire.png", "Barbed Wire Fence"],
  ["/images/Weldmess.png", "Weld Mesh Fencing"],
  ["/images/gate-Fixing.jpeg", "Gate Fixing"],
];

const stats = [
  [350, "Projects Completed"],
  [1000, "Happy Clients"],
  [14, "Years Experience"],
  [25, "Service Areas"],
];

const areas = [
  ["Rajapalayam", "Head Office Location", "/images/rjpm.jpg"],
  ["Madurai", "Service Area", "/images/madurai.png"],
  ["Tirunelveli", "", "/images/tvl.jpg"],
  ["Thoothukudi", "", "/images/thoothukudi.jpg"],
  ["Tenkasi", "", "/images/tenkasi.jpg"],
  ["Virudhunagar", "", "/images/viruthunagar.jpg"],
  ["Srivilliputhur", "", "/images/Sriviliputhur.png"],
  ["Alangulam", "", "/images/alangulam.png"],
  ["Karaikal", "", "/images/karaikal.jpg"],
];

const whyUs = [
  ["fas fa-shield-halved", "Premium Quality", "We use durable materials that provide long-lasting security and protection."],
  ["fas fa-indian-rupee-sign", "Affordable Pricing", "Cost-effective fencing solutions that deliver excellent quality and value for your investment."],
  ["fas fa-clock", "On-Time Delivery", "Projects are completed efficiently without compromising quality."],
  ["fas fa-handshake", "Trusted Service", "Hundreds of satisfied customers trust our fencing solutions."],
];

export default function Home() {
  const [quotePopup, setQuotePopup] = useState(false);
  useEffect(() => {
 const aboutSection = document.querySelector(".about");

    if (!aboutSection) return;

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    aboutSection.classList.add("in-view");

                    observer.unobserve(aboutSection);
                }

            });

        },
        {
            threshold: 0.25
        }
    );

    observer.observe(aboutSection);

    return () => {
        observer.disconnect();
    };
}, []);
  const [showTop, setShowTop] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [showAllAreas, setShowAllAreas] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const timer = setInterval(() => {
      setCounts((current) =>
        current.map((value, index) => {
          const target = stats[index][0];
          if (value >= target) return target;
          return Math.min(target, Math.ceil(value + target / 100));
        })
      );
    }, 20);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  useEffect(() => {
  const hero = document.querySelector(".hero");

  if (!hero) return;

  const updateHeroFence = () => {
    const rect = hero.getBoundingClientRect();
    const heroHeight = hero.offsetHeight;

    const progress = Math.min(
      1,
      Math.max(
        0,
        -rect.top / (heroHeight - window.innerHeight)
      )
    );

    hero.style.setProperty(
      "--fence-progress",
      progress.toString()
    );
  };

  window.addEventListener("scroll", updateHeroFence, {
    passive: true,
  });

  updateHeroFence();

  return () => {
    window.removeEventListener("scroll", updateHeroFence);
  };
}, []);

  const sendToWhatsApp = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name")?.toString().trim();
    const phone = form.get("phone")?.toString().trim();
    const location = form.get("location")?.toString().trim();
    const fenceType = form.get("fenceType")?.toString().trim();
    const length = form.get("length")?.toString().trim();
    const message = form.get("message")?.toString().trim();

    if (!name || !phone || !location || !fenceType) {
      alert("Please fill all required fields.");
      return;
    }

    const whatsappMessage = `*NEW QUOTE REQUEST*

Name: ${name}
Phone: ${phone}
Location: ${location}
Fence Type: ${fenceType}
Approx Length: ${length || "-"} Feet

Additional Requirements:
${message || "-"}`;

    window.open(
      `https://wa.me/919585844459?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          AVK<span> WireTraders</span>
        </div>

        <ul className="nav-links" id="navLinks">
  {["home", "about", "services", "projects", "contact"].map((link) => (
    <li key={link}>
      <a href={`#${link}`}>
        {link.charAt(0).toUpperCase() + link.slice(1)}
      </a>
    </li>
  ))}
</ul>

<button
  className="quote-btn"
  onClick={() => setQuotePopup(true)}
>
  Get Quote
</button>


      </nav>

      <section id="home" className="hero">

  <div className="hero-bg-lines"></div>

  <div className="hero-content">

    <p className="tagline">
      RAJAPALAYAM&apos;S TRUSTED FENCING EXPERTS
    </p>

    <h1>
      STRONGER SECURITY.
      <br />
      <span>LASTING TRUST.</span>
    </h1>

    <p className="hero-description">
      High quality fencing solutions for homes, farms,
      industries &amp; beyond.
      <br />
      Built with strength. Installed with trust.
      <br />
      Secured for years.
      
    </p>
    

    <div className="hero-buttons">

      <a href="#services" className="btn1">
        OUR SERVICES
        <span>→</span>
      </a>

      <a href="#quote-section" className="btn2">
        GET A QUOTE
        <span>→</span>
      </a>

    </div>

  </div>

  {/* FENCE POP-UP LAYER */}
  <div className="hero-fence-wrap">
    <img
      src="/images/hero-fence.png"
      alt="AVK Wire Traders fencing installation"
      className="hero-fence"
    />
  </div>

</section>

      <section id="about" className="about">

    {/* FLOATING IMAGES */}
    <div className="about-floating-image about-img-1">
        <img src="/images/f1.png" alt="AVK fencing project" />
    </div>

    <div className="about-floating-image about-img-2">
        <img src="/images/f2.png" alt="AVK fencing solution" />
    </div>

    <div className="about-floating-image about-img-3">
        <img src="/images/f3.png" alt="AVK fencing work" />
    </div>

    <div className="about-floating-image about-img-4">
        <img src="/images/f4.png" alt="AVK fencing project" />
    </div>

    <div className="about-content">

        <p className="section-tag">
            ABOUT US
        </p>

        <h2>
            TRUSTED FENCING
            <br />
            SOLUTION
            <br />
            FOR EVERY NEED.
        </h2>

        <p className="about-description">
            AVK Wire Traders provides high-quality fencing solutions for
            residential, agricultural, commercial, and industrial properties.
            With years of experience and a commitment to quality, we ensure
            durability, security, and customer satisfaction in every project.
        </p>

    </div>

</section>


      {/* =========================================================
    SERVICES SHOWCASE
========================================================= */}

<section id="services" className="services-showcase">

    <div className="services-showcase-header">
        <p className="services-showcase-tag">
            OUR SERVICES
        </p>

        <h2>
            FENCING SERVICES
        </h2>
    </div>


    <div className="services-showcase-grid">

    <a href="#quote-section" className="showcase-service">
        <span className="service-number">01</span>

        <div className="showcase-image">
            <img
                src="/images/Chain-Link.png"
                alt="Chain Link Fencing"
            />
        </div>

        <h3>CHAIN LINK FENCING</h3>
    </a>


    <a href="#quote-section" className="showcase-service">
        <span className="service-number">02</span>

        <div className="showcase-image">
            <img
                src="/images/Weld-Mesh.png"
                alt="Weld Mesh Fencing"
            />
        </div>

        <h3>WELD MESH FENCING</h3>
    </a>


    <a href="#quote-section" className="showcase-service">
        <span className="service-number">03</span>

        <div className="showcase-image">
            <img
                src="/images/fence-1.png"
                alt="Agricultural Fencing"
            />
        </div>

        <h3>AGRICULTURAL FENCING</h3>
    </a>


    <a href="#quote-section" className="showcase-service">
        <span className="service-number">04</span>

        <div className="showcase-image">
            <img
                src="/images/Barbed-Wire.png"
                alt="Industrial Fencing"
            />
        </div>

        <h3>INDUSTRIAL FENCING</h3>
    </a>


    <a href="#quote-section" className="showcase-service">
        <span className="service-number">05</span>

        <div className="showcase-image">
            <img
                src="/images/gate-Fixing.jpeg"
                alt="Fence Installation"
            />
        </div>

        <h3>FENCE INSTALLATION</h3>
    </a>


    <a href="#quote-section" className="showcase-service">
        <span className="service-number">06</span>

        <div className="showcase-image">
            <img
                src="/images/fencing-1.jpeg"
                alt="Maintenance and Repair"
            />
        </div>

        <h3>MAINTENANCE & REPAIR</h3>
    </a>

</div>

</section>
      <ProjectGallery />
      {/* =========================================================
    ACHIEVEMENTS
========================================================= */}

<section id="achievements" className="achievements">

    <div className="achievements-header">

        <p className="achievements-tag">
            OUR ACHIEVEMENTS
        </p>

        <h2>
            Numbers That Speak For Us
        </h2>

    </div>


    <div className="achievement-grid">

        <div className="achievement-card">
            <span className="achievement-number">
                350+
            </span>

            <p>
                Projects Completed
            </p>
        </div>


        <div className="achievement-card">
            <span className="achievement-number">
                1000+
            </span>

            <p>
                Happy Clients
            </p>
        </div>


        <div className="achievement-card">
            <span className="achievement-number">
                14+
            </span>

            <p>
                Years Experience
            </p>
        </div>


        <div className="achievement-card">
            <span className="achievement-number">
                25+
            </span>

            <p>
                Service Areas
            </p>
        </div>

    </div>

</section>
<section id="quote-section" className="quote-section">

    <div className="quote-header">

        <p className="section-tag">
            GET A QUOTE
        </p>

        <h2>
            REQUEST A FREE QUOTE
        </h2>

        <p>
            Tell us your fencing requirements and our team
            will get in touch with you shortly.
        </p>

    </div>


    <div className="quote-container">

        {/* ================= VIDEO ================= */}

        <div className="quote-video">

            <video
                src="/videos/fencing-quote.mp4"
                autoPlay
                muted
                loop
                playsInline
            />

            <div className="quote-video-overlay">

                <h4>AVK WIRE TRADERS</h4>

            </div>

        </div>


        {/* ================= FORM ================= */}

        <div className="quote-form-card">

            <p className="quote-form-tag">
                REQUEST A QUOTE
            </p>

            <h3>
                Tell Us About Your Requirement
            </h3>


            <form
                className="quote-form"
                onSubmit={sendToWhatsApp}
            >

                <div className="quote-form-grid">

                    <div className="quote-field">

                        <label>Name *</label>

                        <input
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            required
                        />

                    </div>


                    <div className="quote-field">

                        <label>Phone Number *</label>

                        <input
                            name="phone"
                            type="tel"
                            placeholder="Phone Number"
                            required
                        />

                    </div>


                    <div className="quote-field">

                        <label>Location *</label>

                        <input
                            name="location"
                            type="text"
                            placeholder="Location"
                            required
                        />

                    </div>


                    <div className="quote-field">

                        <label>Fence Type *</label>

                        <select
                            name="fenceType"
                            required
                            defaultValue=""
                        >

                            <option value="">
                                Select Fence Type
                            </option>

                            <option>
                                Chain Link Fence
                            </option>

                            <option>
                                Barbed Wire Fence
                            </option>

                            <option>
                                Farm Fencing
                            </option>

                            <option>
                                Security Fencing
                            </option>

                            <option>
                                Weld Mesh Fence
                            </option>

                            <option>
                                Others
                            </option>

                        </select>

                    </div>


                    <div className="quote-field">

                        <label>
                            Approximate Length
                        </label>

                        <input
                            name="length"
                            type="number"
                            placeholder="Approx. Length (Feet)"
                        />

                    </div>


                    <div className="quote-field quote-field-full">

                        <label>
                            Additional Requirements
                        </label>

                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Tell us about your fencing requirement..."
                        />

                    </div>

                </div>


                <button
                    type="submit"
                    className="quote-submit"
                >

                    SUBMIT QUOTE

                    <span>→</span>

                </button>


                <p className="quote-note">
                    Your request will be sent directly to
                    AVK Wire Traders through WhatsApp.
                </p>

            </form>

        </div>

    </div>

</section>

      <section className="service-areas" id="service-areas">
        <div className="area-heading">
          <p className="section-tag">SERVICE AREAS</p>
          <h2>Serving Communities Across South Tamil Nadu</h2>
        </div>

        <div className="areas-grid">
          {areas.map(([name, label, image], index) => (
            <div
              className={`area-card area-card-${index % 3} ${index > 2 && !showAllAreas ? "area-hidden" : ""}`}
              key={name}
            >
              <div className="area-image">
                <img src={image} alt={name} />
              </div>
              <div className="area-info">
                <h3>{name}</h3>
                {label && <p>{label}</p>}
              </div>
            </div>
          ))}
        </div>

        {areas.length > 3 && (
          <button
            className="view-areas-btn"
            type="button"
            onClick={() => setShowAllAreas((open) => !open)}
          >
            {showAllAreas ? "Show Less Areas" : "View All Service Areas"}
            <i className={`fas fa-arrow-${showAllAreas ? "up" : "right"}`} />
          </button>
        )}
      </section>

  <section id="contact" className="quick-contact">

  <ContactCard
    extraClass="contact-white"
    icon="fas fa-phone"
    title="Call Us"
    text="+91 95858 44459"
    href="tel:+919585844459"
  />

  <ContactCard
    extraClass="contact-red"
    icon="fab fa-whatsapp"
    title="WhatsApp"
    text="Chat Instantly"
    href="https://wa.me/9585844459"
  />

  <ContactCard
    extraClass="contact-yellow"
    icon="fas fa-location-dot"
    title="Location"
    text="Rajapalayam, Tamil Nadu"
    href="https://www.google.com/maps/place/Fencing+Contractor+in+Rajapalayam+-+Avk+WireTraders/@9.4267168,77.5139979,1079m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3b06e98ed068cd0f:0x18af87027fc37ff0!8m2!3d9.4267115!4d77.5165782!16s%2Fg%2F11nqf9ljy8"
  />

  <ContactCard
    extraClass="contact-brown"
    icon="fas fa-clock"
    title="Working Hours"
    text="9:00 AM - 6:00 PM"
    href="https://share.google/nleytx1YHO4JRLPbu"
  />

</section>
      {/* <section className="founder-section">
        <div className="founder-container">
          <div className="founder-content">
            <h4>FOUNDER & MANAGING DIRECTOR</h4>
            <h2>Mr. N SHANMUGA SUBRAMANIAM</h2>
            <p className="founder-quote">
              &quot;Quality is never an accident. It is always the result of dedication and hard work.&quot;
            </p>
            <p>
              With years of experience in the fencing industry, he has successfully delivered high-quality fencing
              solutions for residential, agricultural, commercial, and industrial properties across Rajapalayam and
              surrounding regions.
            </p>
            <p>
              His commitment to quality materials, professional workmanship, and customer satisfaction has helped AVK
              Wire Traders become a trusted name in fencing solutions for more than 14 years.
            </p>
          </div>
          <div className="founder-image">
            <img src="/images/CEO.png" alt="Founder" />
          </div>
        </div>
      </section> */}
      <picture className="founder-picture">
  <source
    media="(max-width: 768px)"
    srcSet="/images/CEO_MOBILE.png"
  />

  <img
    src="/images/CEO_FULL.png"
    alt="Mr. N Shanmuga Subramaniam - Founder & Managing Director of AVK Wire Traders"
  />
</picture>

      <section className="why-us">
        <SectionHeader tag="WHY CHOOSE US" title="Why Customers Trust AVK Wire Traders" />
        <div className="why-container">
          {whyUs.map(([icon, title, text]) => (
            <div className="why-card" key={title}>
              <i className={icon} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
          <section className="footer-video-section">
    <video
        className="footer-video"
        autoPlay
        muted
        loop
        playsInline
    >
        <source src="/videos/avk-fencing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
</section>
      <footer className="footer">
        <div className="footer-pattern" aria-hidden="true" />
        <div className="footer-container">
          <div className="footer-box">
            <h2>AVK Wire Traders</h2>
            <p>
              Providing high-quality fencing solutions for residential, commercial, agricultural, and industrial
              properties.
            </p>
          </div>
          <div className="footer-box">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#quote-section">Get Quote</a></li>
            </ul>
          </div>
          <div className="footer-box">
            <h3>Contact</h3>
            <p>Phone: +91 9585844459</p>
            <p>Email: srisubbu30031980@gmail.com</p>
            <p>Location: Rajapalayam, Tamil Nadu</p>
          </div>
        </div>
        <div className="developer-credit">
        <a
          href="https://www.linkedin.com/in/ganesh-b-p-baa058367/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img
          src="/images/GaneshSignature.png"
        alt="Designed & Developed by Ganesh"
        />
        </a>
      </div>
        <div className="footer-brand" aria-label="AVK Wire Traders">
          <span>AVK</span>
          <span>Wire Traders</span>
        </div>
        <div className="footer-bottom">
          <p>© Copyright {year} AVK Wire Traders. All Rights Reserved.</p>
        </div>
      </footer>

      <a href="https://wa.me/919585844459" className="whatsapp-float" target="_blank" rel="noreferrer">
        <i className="fab fa-whatsapp" />
      </a>
      <a href="tel:+919585844459" className="call-float">
        <i className="fas fa-phone" />
      </a>
      <button
        id="topBtn"
        className={showTop ? "show" : ""}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
      {quotePopup && (
  <div
    className="quote-overlay"
    onClick={() => setQuotePopup(false)}
  >
    <div
      className="quote-popup"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="quote-close"
        onClick={() => setQuotePopup(false)}
      >
        × Close
      </button>

      <a
        href="tel:+919585844459"
        className="quote-option call-option"
      >
        <span>📞</span>
        <strong>Call Us</strong>
      </a>

      <a
        href="#quote-section"
        className="quote-option whatsapp-option"
        onClick={() => setQuotePopup(false)}
      >
        <span className="fab fa-whatsapp" />
        <strong>Get a Quote</strong>
      </a>
    </div>
  </div>
)}
    </>
  );
}

function SectionHeader({ tag, title }) {
  return (
    <div className="section-header">
      <p className="section-tag">{tag}</p>
      <h2>{title}</h2>
    </div>
  );
}

function ContactCard({ icon, title, text, href, extraClass = "" }) {
    const content = (
        <>
            <i className={icon} />
            <h3>{title}</h3>
            <p>{text}</p>
        </>
    );

    return (
        <div className={`contact-card ${extraClass}`}>
            {href ? (
                <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                >
                    {content}
                </a>
            ) : (
                content
            )}
        </div>
    );


  return (
    <div className={`contact-card ${extraClass}`}>
      {href ? (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

