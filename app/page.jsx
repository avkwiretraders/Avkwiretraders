"use client";

import { useEffect, useState } from "react";

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

const projects = [
  ["/images/p1.jpeg", "Industrial Fencing", "Coimbatore"],
  ["/images/p2.jpeg", "Farm Fencing", "Tiruppur"],
  ["/images/p3.jpeg", "Security Fencing", "Erode"],
  ["/images/p4.jpeg", "Residential Fencing", "Coimbatore"],
  ["/images/p5.jpeg", "Residential Fencing", "Coimbatore"],
];

const stats = [
  [350, "Projects Completed"],
  [1000, "Happy Clients"],
  [15, "Years Experience"],
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const year = new Date().getFullYear();

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((current) => (current + 1) % projects.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

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
      `https://wa.me/919600410089?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          AVK<span> WireTraders</span>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`} id="navLinks">
          {["home", "about", "services", "projects", "contact"].map((link) => (
            <li key={link}>
              <a href={`#${link}`} onClick={() => setMenuOpen(false)}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <a href="#quote-section" className="quote-btn">
          Get Quote
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars" />
        </button>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <p className="tagline">RAJAPALAYAM&apos;S TRUSTED FENCING EXPERTS SINCE 2013</p>
          <h1>
            Premium Fencing
            <br />
            <span>& Fencing Products</span>
          </h1>
          <p>
            Supplying quality fencing materials and providing professional installation services across Rajapalayam and
            surrounding areas.
          </p>
          <div className="hero-buttons">
            <a href="#quote-section" className="btn1">
              Get Quote
            </a>
            <a href="#services" className="btn2">
              Our Services
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-image">
          <img src="/images/About-us.jpeg" alt="AVK Wire Traders" />
        </div>
        <div className="about-content">
          <p className="section-tag">ABOUT US</p>
          <h2>Trusted Fencing Solutions For Every Need</h2>
          <p>
            AVK Wire Traders provides high-quality fencing solutions for residential, agricultural, commercial, and
            industrial properties. With years of experience and a commitment to quality, we ensure durability, security,
            and customer satisfaction in every project.
          </p>
          <div className="about-stats">
            <div className="stat-box">
              <h3>350+</h3>
              <p>Projects</p>
            </div>
            <div className="stat-box">
              <h3>14+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-box">
              <h3>1000+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <SectionHeader tag="OUR SERVICES" title="Professional Fencing Services" />
        <div className="services-container">
          {services.map(([icon, title, text]) => (
            <div className="service-card" key={title}>
              <i className={icon} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="fencing-types">
        <SectionHeader tag="TYPES OF FENCING" title="Fencing Solutions For Every Requirement" />
        <div className="fence-grid">
          {fenceTypes.map(([image, title]) => (
            <div className="fence-card" key={title}>
              <img src={image} alt={title} />
              <div className="fence-overlay">
                <h3>{title}</h3>
                <a href="#quote-section">
                  <button className="quote-overlay-btn" type="button">
                    Get Quote
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="project-showcase">
        <SectionHeader tag="OUR PROJECTS" title="Completed Projects" />
        <div className="slider-container">
          {projects.map(([image, title, place], index) => (
            <div className={`slides fade ${index === slideIndex ? "active-slide" : ""}`} key={image}>
              <img src={image} alt={title} />
              <div className="slide-content">
                <h3>{title}</h3>
                <p>{place}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <SectionHeader tag="OUR ACHIEVEMENTS" title="Numbers That Speak For Us" />
        <div className="stats-container">
          {stats.map(([target, label], index) => (
            <div className="stat-card" key={label}>
              <h3>{counts[index] >= target ? `${target}+` : counts[index]}</h3>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="quote-section" className="quote-section">
        <div className="section-header">
          <p className="section-tag">GET A QUOTE</p>
          <h2>Request A Free Quote</h2>
          <p className="quote-subtitle">Tell us your requirements and our team will contact you shortly.</p>
        </div>
        <div className="quote-container">
          <form className="quote-form" onSubmit={sendToWhatsApp}>
            <input name="name" type="text" placeholder="Full Name" required />
            <input name="phone" type="tel" placeholder="Phone Number" required />
            <input name="location" type="text" placeholder="Location" required />
            <select name="fenceType" required defaultValue="">
              <option value="">Select Fence Type</option>
              <option>Chain Link Fence</option>
              <option>Barbed Wire Fence</option>
              <option>Farm Fencing</option>
              <option>Security Fencing</option>
            </select>
            <input name="length" type="number" placeholder="Approximate Length (Feet)" />
            <textarea name="message" rows="5" placeholder="Additional Requirements" />
            <button type="submit">Request Quote</button>
          </form>
        </div>
      </section>

      <section className="service-areas" id="service-areas">
        <p className="section-tag">SERVICE AREAS</p>
        <h2>Serving Communities Across South Tamil Nadu</h2>
        <div className="areas-grid">
          {areas.map(([name, label, image]) => (
            <div className="area-card" key={name}>
              <div className="area-info">
                <h3>{name}</h3>
                {label && <p>{label}</p>}
              </div>
              <div className="area-image">
                <img src={image} alt={name} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="quick-contact">
        <ContactCard icon="fas fa-phone" title="Call Us" text="+91 95858 44459" href="tel:+919585844459" />
        <ContactCard icon="fab fa-whatsapp" title="WhatsApp" text="Chat Instantly" href="https://wa.me/9585844459" />
        <ContactCard icon="fas fa-location-dot" title="Location" text="Rajapalayam, Tamil Nadu" />
        <ContactCard icon="fas fa-clock" title="Working Hours" text="9:00 AM - 6:00 PM" />
      </section>

      <section className="founder-section">
        <div className="founder-container">
          <div className="founder-image">
            <img src="/images/CEO.png" alt="Founder" />
          </div>
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
        </div>
      </section>

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

      <footer className="footer">
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
        <div className="footer-bottom">
          <p>Copyright {year} AVK Wire Traders. All Rights Reserved.</p>
        </div>
      </footer>

      <a href="https://wa.me/919600410089" className="whatsapp-float" target="_blank" rel="noreferrer">
        <i className="fab fa-whatsapp" />
      </a>
      <a href="tel:+919600410089" className="call-float">
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

function ContactCard({ icon, title, text, href }) {
  const content = (
    <>
      <i className={icon} />
      <h3>{title}</h3>
      <p>{text}</p>
    </>
  );

  return (
    <div className="contact-card">
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
