import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#programs" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const SLIDES = [
  {
    img: "/public/woman_power.jpeg",
    tag: "Women Empowerment",
    title: "Giving Women the\nTools to Thrive",
    sub: "Vocational training, sewing machines, and dignity — one woman at a time.",
  },
  {
    img: "/public/water.jpeg",
    tag: "Clean Water",
    title: "Clean Water is a\nBasic Human Right",
    sub: "470 hand pumps installed. Thousands of families transformed.",
  },
  {
    img: "/public/Apna_ghar.jpeg",
    tag: "Apna Ghar Shelter",
    title: "A Home for Every\nOrphan & Widow",
    sub: "Our shelter provides food, safety, and belonging to those who need it most.",
  },
  {
    img: "/public/ramadan_pkg.jpeg",
    tag: "Ramadan Relief",
    title: "Sharing Blessings\nThis Ramadan",
    sub: "Food packages reaching widows, special children, and families in need.",
  },
];

const PROGRAMS = [
  {
    icon: "🧵",
    title: "Vocational Training Center",
    desc: "350 women trained in sewing skills, each graduating with their own sewing machine to launch a home-based business and achieve financial independence.",
    img: "/public/training_1.jpeg",
    img2: "/public/training_2.jpeg",
    stat: "350+",
    statLabel: "Women Trained",
  },
  {
    icon: "💧",
    title: "Clean Drinking Water Project",
    desc: "Chairperson Mrs. Shabana Awan personally visited Kulachi to assess the water crisis. 470 hand pumps installed across Tehsil Paharpur & Tehsil Parowa — clean water for thousands.",
    img: "/public/water1.jpeg",
    img2: "/public/water.jpeg",
    stat: "470",
    statLabel: "Hand Pumps Installed",
  },
  {
    icon: "🏆",
    title: "Events & Sports Activities",
    desc: "SBD organizes community sports events, cultural gatherings, and awareness festivals that bring people together, promote healthy lifestyles, and strengthen community bonds.",
    img: "/public/game1.jpeg",
    img2: "/public/game2.jpeg",
    stat: "Active",
    statLabel: "Community Engagement",
  },
  {
    icon: "🌙",
    title: "Ramadan Package Distribution",
    desc: "Every Ramadan, SBD personally delivers food packages to widows, orphans, special children, and needy families — bringing relief during the blessed month.",
    img: "/public/ramadan1.jpeg",
    img2: "/public/ramadan2.jpeg",
    stat: "1000s",
    statLabel: "Families Reached",
  },
  {
    icon: "🏠",
    title: "Apna Ghar — Shelter Home",
    desc: "Our shelter 'Apna Ghar' provides a safe, warm home for orphans and widows. Food, necessities, and love are available — it truly feels like home to everyone who walks through its doors.",
    img: "/public/ghar1.jpeg",
    img2: "/public/ghar2.jpeg",
    stat: "Safe",
    statLabel: "Haven for All",
  },
  {
    icon: "🌊",
    title: "Flood Relief Packages",
    desc: "When floods strike, Mrs. Shabana Awan leads relief efforts personally — going directly to affected areas to distribute essential packages to flood-stricken families.",
    img: "/public/flood1.jpeg",
    img2: "/public/flood2.jpeg",
    stat: "On Ground",
    statLabel: "Leadership in Crisis",
  },
];

const GALLERY = [
  "/public/about_pic.jpeg",
  "/public/g3.jfif",
  "/public/meetingpic.jpeg",
  "/public/g5.jpeg",
  "/public/g6.jpeg",
  "/public/g7.jpeg",
  "/public/g11.jpeg",
  "/public/g12.jpeg",
];

const STATS = [
  { num: "350+", label: "Women Trained" },
  { num: "470", label: "Hand Pumps Installed" },
  { num: "500+", label: "Patients Supported Monthly" },
  { num: "2014", label: "Year Established" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimSection({ children, className = "", style = {} }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function DonateBox() {
  return (
    <div
      style={{
        background: "#f0faf4",
        border: "1px solid #c0dfc8",
        padding: 28,
      }}
    >
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          color: "#2d5a3d",
          fontSize: 22,
          marginBottom: 6,
        }}
      >
        Donate to SBD
      </div>
      <div
        style={{
          width: 40,
          height: 3,
          background: "#c9933a",
          marginBottom: 16,
        }}
      />
      <p
        style={{
          color: "#6b6b6b",
          marginBottom: 20,
          fontFamily: "'Source Sans 3', sans-serif",
          fontSize: 14,
          lineHeight: 1.7,
        }}
      >
        Your donation directly supports women empowerment, clean water, shelter
        for orphans & widows, and flood relief efforts.
      </p>
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          color: "#2d5a3d",
          fontSize: 15,
          marginBottom: 12,
        }}
      >
        Bank Transfer Details
      </div>
      {[
        ["Bank", "Meezan Bank LTD"],
        ["Account Title", "Society for Empowerment of Bint-e-Damaan"],
        ["Account Number", "26010101804976"],
        ["IBAN", "PAK46MEZN002601-0101804976"],
        ["Swift Code", "MEZNPKKA"],
        ["Branch", "East Circular Road, Dera Ismail Khan"],
      ].map(([k, v]) => (
        <div
          key={k}
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 13,
            marginBottom: 8,
            fontFamily: "'Source Sans 3', sans-serif",
            borderBottom: "1px solid #d8eed8",
            paddingBottom: 8,
          }}
        >
          <span style={{ color: "#6b6b6b", fontWeight: 600 }}>{k}:</span>
          <span
            style={{
              color: "#1a1a1a",
              fontWeight: 600,
              textAlign: "right",
              maxWidth: "58%",
            }}
          >
            {v}
          </span>
        </div>
      ))}
      <p
        style={{
          color: "#6b6b6b",
          fontSize: 13,
          fontFamily: "'Source Sans 3', sans-serif",
          marginTop: 16,
        }}
      >
        📧 <strong>bintedamaandikhan@gmail.com</strong>
      </p>
    </div>
  );
}

export default function App() {
  const [slide, setSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const s = SLIDES[slide];

  return (
    <div
      style={{
        fontFamily: "'Georgia', 'Palatino', serif",
        background: "#faf9f6",
        color: "#1a1a1a",
        overflowX: "hidden",
        width: "100%",
        maxWidth: "100vw",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Source+Sans+3:wght@300;400;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { width: 100%; max-width: 100%; overflow-x: hidden; }
        body { font-family: 'Source Sans 3', sans-serif; }
        h1,h2,h3,h4 { font-family: 'Playfair Display', serif; }
        a { text-decoration: none; color: inherit; }
        :root {
          --green: #2d5a3d;
          --green-light: #4a8c60;
          --gold: #c9933a;
          --cream: #faf9f6;
          --dark: #1a1a1a;
          --gray: #6b6b6b;
        }
        .nav-link { position: relative; padding: 4px 0; font-size: 14px; letter-spacing: 0.06em; font-family: 'Source Sans 3', sans-serif; font-weight: 600; color: #fff; transition: color 0.2s; }
        .nav-link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 2px; background: var(--gold); transition: width 0.3s; }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: var(--gold); }
        .btn-gold { background: var(--gold); color: #fff; border: none; padding: 14px 32px; font-family: 'Source Sans 3', sans-serif; font-weight: 600; font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; transition: all 0.3s; clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px)); }
        .btn-gold:hover { background: #b07d2a; transform: translateY(-2px); }
        .program-card { background: #fff; border-left: 4px solid var(--green); padding: 28px; transition: all 0.3s; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
        .program-card:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(45,90,61,0.15); border-left-color: var(--gold); }
        .gallery-img { overflow: hidden; cursor: pointer; }
        .gallery-img img { transition: transform 0.5s ease; width: 100%; height: 200px; object-fit: cover; display: block; }
        .gallery-img:hover img { transform: scale(1.08); }
        .stat-item { text-align: center; padding: 32px 20px; border-right: 1px solid rgba(255,255,255,0.2); }
        .stat-item:last-child { border-right: none; }
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px; }
        .modal-box { background: #fff; max-width: 520px; width: 100%; padding: 40px; position: relative; }
        .slide-dot { width: 10px; height: 10px; border-radius: 50%; border: 2px solid #fff; cursor: pointer; transition: all 0.3s; }
        .slide-dot.active { background: var(--gold); border-color: var(--gold); width: 28px; border-radius: 5px; }
        input, textarea { width: 100%; padding: 12px 16px; border: 1px solid #ddd; font-family: 'Source Sans 3', sans-serif; font-size: 14px; background: #fafafa; transition: border 0.2s; outline: none; }
        input:focus, textarea:focus { border-color: var(--green); background: #fff; }
        .section-tag { display: inline-block; background: var(--gold); color: #fff; padding: 4px 14px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; font-family: 'Source Sans 3', sans-serif; font-weight: 600; margin-bottom: 14px; }
        .divider { width: 48px; height: 3px; background: var(--gold); margin: 16px 0 24px 0; }
        .engage-banner { background: linear-gradient(135deg, #1a3a2a 0%, #2d5a3d 100%); color: #fff; padding: 60px 80px; text-align: center; position: relative; overflow: hidden; }
        .engage-banner::before { content: ''; position: absolute; inset: 0; background: repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.02) 20px, rgba(255,255,255,0.02) 40px); }
        .section-heading { background: linear-gradient(135deg, var(--green) 0%, #4a8c60 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .section-heading-gold { background: linear-gradient(135deg, #b07d2a 0%, var(--gold) 50%, #e0aa55 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
      `}</style>

      {/* TOP BAR */}
      <div
        style={{
          background: "#1a3a2a",
          color: "#d4c4a0",
          padding: "8px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 13,
          fontFamily: "'Source Sans 3', sans-serif",
          width: "100%",
        }}
      >
        <span>
          📧 bintedamaandikhan@gmail.com &nbsp;|&nbsp; 📞 0966-711338 /
          0332-763-1095
        </span>
        <span style={{ color: "#c9933a" }}>
          Registered Non-Profit · Dera Ismail Khan, KPK
        </span>
      </div>

      {/* NAVBAR */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 999,
          width: "100%",
          background: scrolled ? "rgba(26,58,42,0.97)" : "#2d5a3d",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.18)" : "none",
          transition: "all 0.4s",
          padding: "0 60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              background: "var(--gold)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              color: "#fff",
              fontSize: 18,
            }}
          >
            SBD
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                lineHeight: 1.1,
              }}
            >
              Society for
            </div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--gold)",
                fontWeight: 700,
                fontSize: 16,
                lineHeight: 1.1,
              }}
            >
              Binte-Damaan
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
          <button
            className="btn-gold"
            style={{ padding: "10px 22px", fontSize: 13 }}
            onClick={() => setDonateOpen(true)}
          >
            Donate Now
          </button>
        </div>
      </nav>

      {/* HERO SLIDER */}
      <section
        id="home"
        style={{
          position: "relative",
          height: "calc(100vh - 108px)",
          minHeight: 560,
          overflow: "hidden",
          width: "100%",
        }}
      >
        {SLIDES.map((sl, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              opacity: i === slide ? 1 : 0,
              transition: "opacity 1s ease",
              zIndex: i === slide ? 1 : 0,
            }}
          >
            <img
              src={sl.img}
              alt={sl.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(10,30,18,0.85) 0%, rgba(10,30,18,0.4) 60%, transparent 100%)",
              }}
            />
          </div>
        ))}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 100px",
          }}
        >
          <AnimSection>
            <div
              style={{
                display: "inline-block",
                background: "var(--gold)",
                color: "#fff",
                padding: "5px 16px",
                fontSize: 12,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 600,
                marginBottom: 20,
              }}
            >
              {s.tag}
            </div>
            <h1
              style={{
                color: "#fff",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 900,
                lineHeight: 1.15,
                maxWidth: 680,
                whiteSpace: "pre-line",
                marginBottom: 20,
                textShadow: "0 2px 20px rgba(0,0,0,0.3)",
              }}
            >
              {s.title}
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: 18,
                maxWidth: 520,
                lineHeight: 1.6,
                marginBottom: 36,
                fontFamily: "'Source Sans 3', sans-serif",
              }}
            >
              {s.sub}
            </p>
          </AnimSection>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            display: "flex",
            gap: 10,
          }}
        >
          {SLIDES.map((_, i) => (
            <div
              key={i}
              className={`slide-dot${i === slide ? " active" : ""}`}
              onClick={() => setSlide(i)}
            />
          ))}
        </div>
      </section>

      {/* STATS BAR */}
      <div
        style={{
          background: "var(--green)",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          width: "100%",
        }}
      >
        {STATS.map((st, i) => (
          <AnimSection
            key={i}
            className="stat-item"
            style={{
              transition: `opacity 0.6s ${i * 0.1}s ease, transform 0.6s ${i * 0.1}s ease`,
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 42,
                fontWeight: 900,
                color: "var(--gold)",
              }}
            >
              {st.num}
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: 13,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "'Source Sans 3', sans-serif",
                marginTop: 4,
              }}
            >
              {st.label}
            </div>
          </AnimSection>
        ))}
      </div>

      {/* ABOUT */}
      <section
        id="about"
        style={{ padding: "96px 100px", background: "#faf9f6", width: "100%" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <AnimSection>
            <div className="section-tag">About Us</div>
            <h2
              style={{
                fontSize: "clamp(28px, 3vw, 44px)",
                fontWeight: 900,
                lineHeight: 1.2,
                marginBottom: 0,
              }}
            >
              Society for
              <br />
              <span className="section-heading">Binte-Damaan</span>
            </h2>
            <div className="divider" />
            <p
              style={{
                color: "var(--gray)",
                lineHeight: 1.9,
                marginBottom: 20,
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: 16,
              }}
            >
              Established in 2014, the Society for Empowerment of Bint-e-Damaan
              (SBD) is a registered non-profit charitable foundation based in
              Dera Ismail Khan, Khyber Pakhtunkhwa. We are dedicated to the
              empowerment and development of underprivileged women and children
              in rural areas.
            </p>
            <p
              style={{
                color: "var(--gray)",
                lineHeight: 1.9,
                marginBottom: 32,
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: 16,
              }}
            >
              Through education, vocational training, healthcare support, and
              social welfare, SBD strives to break the cycle of poverty and
              empower marginalized communities across the region.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
                marginBottom: 36,
              }}
            >
              {[
                {
                  icon: "🌿",
                  title: "Our Vision",
                  text: "A society where underprivileged women and children have access to empowerment, confidence, and financial independence.",
                },
                {
                  icon: "🎯",
                  title: "Our Mission",
                  text: "Uplift marginalized communities through sustainable initiatives in education, skill-building, health, and social welfare.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    padding: 20,
                    borderTop: "3px solid var(--gold)",
                  }}
                >
                  <div style={{ fontSize: 24, marginBottom: 8 }}>
                    {item.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: 16,
                      marginBottom: 8,
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      color: "var(--gray)",
                      fontSize: 14,
                      lineHeight: 1.7,
                      fontFamily: "'Source Sans 3', sans-serif",
                    }}
                  >
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </AnimSection>
          <AnimSection>
            <div style={{ position: "relative" }}>
              <img
                src="/public/about_pic.jpeg"
                alt="About SBD"
                style={{ width: "100%", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -24,
                  left: -24,
                  background: "var(--gold)",
                  color: "#fff",
                  padding: "24px 28px",
                  maxWidth: 260,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 32,
                    fontWeight: 900,
                  }}
                >
                  10+
                </div>
                <div
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: 14,
                    opacity: 0.9,
                  }}
                >
                  Years of Impact in DI Khan
                </div>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* FOUNDER MESSAGE */}
      <section
        style={{
          padding: "80px 100px",
          background: "linear-gradient(135deg, #1a3a2a 0%, #2d5a3d 100%)",
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 300,
            height: 300,
            border: "60px solid rgba(201,147,58,0.12)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -40,
            left: -40,
            width: 200,
            height: 200,
            border: "40px solid rgba(255,255,255,0.05)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          <AnimSection>
            <img
              src="/public/shabana.jfif"
              alt="Founder"
              style={{
                width: 360,
                display: "block",
                border: "4px solid var(--gold)",
              }}
            />
          </AnimSection>
          <AnimSection>
            <div
              style={{
                display: "inline-block",
                background: "var(--gold)",
                color: "#fff",
                padding: "4px 14px",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Founder's Message
            </div>
            <h2
              style={{
                color: "#fff",
                fontSize: 36,
                fontWeight: 900,
                marginBottom: 6,
              }}
            >
              Mrs. Shabana Awan
            </h2>
            <p
              style={{
                color: "var(--gold)",
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: 15,
                marginBottom: 24,
              }}
            >
              Chairperson & Founder, SBD
            </p>
            <blockquote
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: 18,
                lineHeight: 1.85,
                fontStyle: "italic",
                fontFamily: "'Playfair Display', serif",
                borderLeft: "3px solid var(--gold)",
                paddingLeft: 24,
              }}
            >
              "I have dedicated my life to uplifting the women and children of
              Dera Ismail Khan. Having witnessed the hardships of our community
              firsthand, I believe that every woman deserves the opportunity to
              be empowered — socially, economically, and politically. With
              sincerity and persistence, we shall continue to bring light to
              those who need it most."
            </blockquote>
          </AnimSection>
        </div>
      </section>

      {/* PROGRAMS */}
      <section
        id="programs"
        style={{ padding: "96px 100px", background: "#fff", width: "100%" }}
      >
        <AnimSection style={{ textAlign: "center", marginBottom: 60 }}>
          <div
            className="section-tag"
            style={{ display: "block", textAlign: "center" }}
          >
            What We Do
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 900 }}>
            Our <span className="section-heading">Programs</span> &{" "}
            <span className="section-heading-gold">Initiatives</span>
          </h2>
          <div className="divider" style={{ margin: "16px auto 0" }} />
        </AnimSection>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
        >
          {PROGRAMS.map((p, i) => (
            <AnimSection
              key={i}
              style={{
                transition: `opacity 0.6s ${i * 0.08}s ease, transform 0.6s ${i * 0.08}s ease`,
              }}
            >
              <div className="program-card">
                <div style={{ fontSize: 36, marginBottom: 12 }}>{p.icon}</div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: 20,
                    marginBottom: 12,
                    color: "var(--dark)",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    color: "var(--gray)",
                    lineHeight: 1.7,
                    fontSize: 15,
                    fontFamily: "'Source Sans 3', sans-serif",
                    marginBottom: 16,
                  }}
                >
                  {p.desc}
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 8,
                    marginTop: 16,
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: 120,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <img
                    src={p.img2}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: 120,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                <div
                  style={{
                    marginTop: 16,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      background: "var(--green)",
                      color: "#fff",
                      padding: "6px 14px",
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: 20,
                    }}
                  >
                    {p.stat}
                  </div>
                  <div
                    style={{
                      color: "var(--gray)",
                      fontSize: 13,
                      fontFamily: "'Source Sans 3', sans-serif",
                    }}
                  >
                    {p.statLabel}
                  </div>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </section>

      {/* UNIVERSITY ENGAGEMENT BANNER */}
      <div className="engage-banner" style={{ width: "100%" }}>
        <AnimSection>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🎓</div>
          <div className="section-tag">Join the Movement</div>
          <h2
            style={{
              color: "#fff",
              fontSize: 36,
              fontWeight: 900,
              marginBottom: 16,
              position: "relative",
              zIndex: 1,
            }}
          >
            We Visit{" "}
            <span className="section-heading-gold">
              Universities & Colleges
            </span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: 17,
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.8,
              fontFamily: "'Source Sans 3', sans-serif",
              position: "relative",
              zIndex: 1,
            }}
          >
            SBD actively engages with students at universities and colleges
            across the region — inviting the youth to join our generous
            programs, volunteer, and become part of the change they wish to see
            in their communities.
          </p>
        </AnimSection>
      </div>

      {/* PROJECTS */}
      <section
        id="projects"
        style={{ padding: "96px 100px", background: "#faf9f6", width: "100%" }}
      >
        <AnimSection style={{ marginBottom: 60 }}>
          <div className="section-tag">Key Projects</div>
          <h2 style={{ fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 900 }}>
            Our <span className="section-heading">Major Projects</span>
          </h2>
          <div className="divider" />
        </AnimSection>
        {[
          {
            num: "01",
            title: "Mashal-e-Raah — Vocational Training",
            body: "Our flagship vocational center has trained over 350 women in sewing skills. Each graduate receives her own sewing machine, enabling her to start a home-based business, support her family, and achieve true financial independence.",
            img: "/public/train3.jfif",
            reverse: false,
          },
          {
            num: "02",
            title: "Kulachi Clean Water Initiative",
            body: "Mrs. Shabana Awan personally visited the Kulachi region to assess the acute drinking water crisis. Under her leadership, SBD installed 470 hand pumps in Tehsil Paharpur and Tehsil Parowa — providing thousands of families with access to clean, safe water.",
            img: "/public/kulachi.jpeg",
            reverse: true,
          },
          {
            num: "03",
            title: "Apna Ghar — Our Home, Our Family",
            body: "Apna Ghar is SBD's shelter home for orphans and widows. Here, residents have access to nutritious food, daily necessities, and a warm, caring community. It is not just a shelter — it is home, in every sense of the word.",
            img: "/public/ghar3.jpeg",
            reverse: false,
          },
        ].map((proj, i) => (
          <AnimSection key={i} style={{ marginBottom: 64 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 64,
                alignItems: "center",
                direction: proj.reverse ? "rtl" : "ltr",
              }}
            >
              <div style={{ direction: "ltr" }}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 72,
                    fontWeight: 900,
                    color: "rgba(45,90,61,0.1)",
                    lineHeight: 1,
                    marginBottom: -16,
                  }}
                >
                  {proj.num}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 28,
                    fontWeight: 700,
                    marginBottom: 16,
                  }}
                >
                  <span className="section-heading">{proj.title}</span>
                </h3>
                <div
                  style={{
                    width: 40,
                    height: 3,
                    background: "var(--gold)",
                    marginBottom: 20,
                  }}
                />
                <p
                  style={{
                    color: "var(--gray)",
                    lineHeight: 1.9,
                    fontSize: 16,
                    fontFamily: "'Source Sans 3', sans-serif",
                  }}
                >
                  {proj.body}
                </p>
              </div>
              <div style={{ direction: "ltr" }}>
                <img
                  src={proj.img}
                  alt={proj.title}
                  style={{
                    width: "100%",
                    display: "block",
                    boxShadow: "8px 8px 0 var(--gold)",
                  }}
                />
              </div>
            </div>
          </AnimSection>
        ))}
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        style={{ padding: "96px 100px", background: "#fff", width: "100%" }}
      >
        <AnimSection style={{ marginBottom: 48 }}>
          <div className="section-tag">Gallery</div>
          <h2 style={{ fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 900 }}>
            Our Work <span className="section-heading">in Pictures</span>
          </h2>
          <div className="divider" />
        </AnimSection>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
          }}
        >
          {GALLERY.map((g, i) => (
            <AnimSection
              key={i}
              className="gallery-img"
              style={{
                transition: `opacity 0.5s ${i * 0.06}s ease, transform 0.5s ${i * 0.06}s ease`,
              }}
            >
              <img src={g} alt={`Gallery ${i + 1}`} />
            </AnimSection>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{ padding: "96px 100px", background: "#faf9f6", width: "100%" }}
      >
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}
        >
          <AnimSection>
            <div className="section-tag">Get In Touch</div>
            <h2
              style={{
                fontSize: "clamp(24px, 3vw, 40px)",
                fontWeight: 900,
                marginBottom: 0,
              }}
            >
              <span className="section-heading">Contact Us</span>
            </h2>
            <div className="divider" />
            <p
              style={{
                color: "var(--gray)",
                lineHeight: 1.9,
                marginBottom: 32,
                fontFamily: "'Source Sans 3', sans-serif",
              }}
            >
              Reach out to us for partnerships, volunteering opportunities,
              donations, or any queries about our programs.
            </p>
            {[
              {
                icon: "📍",
                label: "Address",
                val: "Dera Ismail Khan, Khyber Pakhtunkhwa, Pakistan",
              },
              {
                icon: "📧",
                label: "Email",
                val: "bintedamaandikhan@gmail.com",
              },
              {
                icon: "📞",
                label: "Phone",
                val: "0966-711338 / 0332-763-1095",
              },
            ].map((c, i) => (
              <div
                key={i}
                style={{ display: "flex", gap: 16, marginBottom: 24 }}
              >
                <div style={{ fontSize: 22, marginTop: 2 }}>{c.icon}</div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 600,
                      color: "var(--green)",
                      fontSize: 13,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 4,
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    style={{
                      color: "var(--gray)",
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: 15,
                    }}
                  >
                    {c.val}
                  </div>
                </div>
              </div>
            ))}
          </AnimSection>
          <AnimSection>
            <DonateBox />
          </AnimSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#0f2218",
          color: "rgba(255,255,255,0.75)",
          padding: "60px 100px 32px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  background: "var(--gold)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: 18,
                }}
              >
                SBD
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                Society for Binte-Damaan
              </div>
            </div>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.8,
                maxWidth: 300,
                fontFamily: "'Source Sans 3', sans-serif",
              }}
            >
              A registered non-profit dedicated to empowering underprivileged
              women and children in Dera Ismail Khan since 2014.
            </p>
          </div>
          <div>
            <h4
              style={{
                color: "#fff",
                fontFamily: "'Playfair Display', serif",
                marginBottom: 16,
                fontSize: 16,
              }}
            >
              Quick Links
            </h4>
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.65)",
                  fontSize: 14,
                  marginBottom: 10,
                  fontFamily: "'Source Sans 3', sans-serif",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--gold)")}
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.65)")
                }
              >
                {l.label}
              </a>
            ))}
          </div>
          <div>
            <h4
              style={{
                color: "#fff",
                fontFamily: "'Playfair Display', serif",
                marginBottom: 16,
                fontSize: 16,
              }}
            >
              Programs
            </h4>
            {[
              "Vocational Training",
              "Clean Water Project",
              "Events & Sports",
              "Apna Ghar Shelter",
              "Flood Relief",
              "Ramadan Packages",
            ].map((p) => (
              <div
                key={p}
                style={{
                  fontSize: 14,
                  marginBottom: 10,
                  fontFamily: "'Source Sans 3', sans-serif",
                }}
              >
                {p}
              </div>
            ))}
          </div>
          <div>
            <h4
              style={{
                color: "#fff",
                fontFamily: "'Playfair Display', serif",
                marginBottom: 16,
                fontSize: 16,
              }}
            >
              Donate
            </h4>
            <button
              className="btn-gold"
              style={{ width: "100%", marginBottom: 16 }}
              onClick={() => setDonateOpen(true)}
            >
              Donate Now
            </button>
            <div
              style={{
                fontSize: 13,
                lineHeight: 1.7,
                fontFamily: "'Source Sans 3', sans-serif",
              }}
            >
              <div
                style={{
                  color: "var(--gold)",
                  marginBottom: 4,
                  fontWeight: 600,
                }}
              >
                Meezan Bank LTD
              </div>
              <div>Account Title: SBD</div>
              <div>A/C: 26010101804976</div>
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 13,
            fontFamily: "'Source Sans 3', sans-serif",
          }}
        >
          <span>© 2024 Society for Binte-Damaan. All Rights Reserved.</span>
          <span style={{ color: "var(--gold)" }}>
            Empowering Communities Since 2014
          </span>
        </div>
      </footer>

      {/* DONATE MODAL */}
      {donateOpen && (
        <div className="modal-overlay" onClick={() => setDonateOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setDonateOpen(false)}
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "none",
                border: "none",
                fontSize: 22,
                cursor: "pointer",
                color: "#999",
              }}
            >
              ✕
            </button>
            <div className="section-tag">Support Our Cause</div>
            <DonateBox />
          </div>
        </div>
      )}
    </div>
  );
}
