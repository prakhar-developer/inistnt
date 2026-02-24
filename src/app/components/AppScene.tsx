import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import appConceptImg from "figma:asset/16eacd16c5de1de35943d6ca4b69fa1fafb38f6e.png";
import { Check, MapPin, Zap } from "lucide-react";

const STEPS = [
  { icon: "📱", label: "Open App", desc: "Tap inistnt" },
  { icon: "🔧", label: "Pick Service", desc: "Plumbing / Electrical" },
  { icon: "📍", label: "Share Location", desc: "Auto-detected" },
  { icon: "✅", label: "Confirm Booking", desc: "One tap done!" },
];

function PhoneMockup({ step, countdown }: { step: number; countdown: number }) {
  const mins = Math.floor(countdown / 60).toString().padStart(2, "0");
  const secs = (countdown % 60).toString().padStart(2, "0");

  return (
    <div
      style={{
        width: "220px",
        height: "440px",
        background: "#111",
        borderRadius: "36px",
        border: "6px solid #333",
        overflow: "hidden",
        position: "relative",
        boxShadow:
          "0 0 40px rgba(255,31,142,0.3), 0 30px 80px rgba(0,0,0,0.6)",
        flexShrink: 0,
      }}
    >
      {/* Status bar */}
      <div
        style={{
          height: "28px",
          background: "#FF1F8E",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
        }}
      >
        <span style={{ color: "#fff", fontSize: "10px", fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
          9:41
        </span>
        <div
          style={{
            width: "60px",
            height: "14px",
            background: "rgba(0,0,0,0.2)",
            borderRadius: "20px",
          }}
        />
        <span style={{ color: "#fff", fontSize: "10px", fontFamily: "'Poppins', sans-serif" }}>
          ▓▓▓
        </span>
      </div>

      {/* App screen */}
      <div
        style={{
          background: "linear-gradient(180deg, #FF1F8E 0%, #d4006e 100%)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "16px 12px",
          position: "relative",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "22px",
            fontWeight: 900,
            color: "#fff",
            marginBottom: "8px",
          }}
        >
          ⚡ inistnt
        </div>

        {step < 3 && (
          <>
            {/* Service options */}
            <div
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "11px",
                fontFamily: "'Nunito', sans-serif",
                marginBottom: "10px",
              }}
            >
              What do you need?
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
              {[
                { icon: "🔧", name: "Plumbing", active: step >= 1 },
                { icon: "⚡", name: "Electrical", active: false },
                { icon: "🚿", name: "Bathroom Fix", active: false },
              ].map((service, i) => (
                <div
                  key={i}
                  style={{
                    background: service.active
                      ? "rgba(255,215,0,0.25)"
                      : "rgba(255,255,255,0.1)",
                    border: service.active
                      ? "1.5px solid #FFD700"
                      : "1.5px solid rgba(255,255,255,0.2)",
                    borderRadius: "10px",
                    padding: "8px 12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "all 0.3s",
                  }}
                >
                  <span style={{ fontSize: "16px" }}>{service.icon}</span>
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#fff",
                    }}
                  >
                    {service.name}
                  </span>
                  {service.active && (
                    <Check size={14} color="#FFD700" style={{ marginLeft: "auto" }} />
                  )}
                </div>
              ))}
            </div>

            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: "10px",
                  background: "rgba(255,255,255,0.12)",
                  borderRadius: "10px",
                  padding: "8px 12px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <MapPin size={12} color="#FFD700" />
                <span
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  Koramangala, Bangalore
                </span>
                <Check size={12} color="#4ade80" style={{ marginLeft: "auto" }} />
              </motion.div>
            )}
          </>
        )}

        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              marginTop: "8px",
              width: "100%",
            }}
          >
            {/* Expert dispatched */}
            <div
              style={{
                background: "rgba(74,222,128,0.2)",
                border: "1px solid rgba(74,222,128,0.5)",
                borderRadius: "10px",
                padding: "8px 12px",
                width: "100%",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "18px", marginBottom: "2px" }}>✅</div>
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#4ade80",
                }}
              >
                Expert Dispatched!
              </div>
              <div
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.6)",
                  marginTop: "2px",
                }}
              >
                Raju • ⭐ 4.9 • 2.3km away
              </div>
            </div>

            {/* Countdown */}
            <div
              style={{
                background: "rgba(0,0,0,0.3)",
                borderRadius: "14px",
                padding: "12px",
                width: "100%",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: "4px",
                }}
              >
                Arriving in
              </div>
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "36px",
                  fontWeight: 900,
                  color: "#FFD700",
                  animation: "countdown-tick 1s ease-in-out infinite",
                  lineHeight: 1,
                }}
              >
                {mins}:{secs}
              </div>
              {/* Progress bar */}
              <div
                style={{
                  marginTop: "8px",
                  height: "4px",
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    background: "linear-gradient(90deg, #FFD700, #FF1F8E)",
                    borderRadius: "4px",
                    width: `${((600 - countdown) / 600) * 100}%`,
                    transition: "width 1s linear",
                  }}
                />
              </div>
            </div>

            {/* Map placeholder */}
            <div
              style={{
                background: "rgba(0,0,0,0.2)",
                borderRadius: "10px",
                padding: "8px",
                width: "100%",
                fontSize: "10px",
                fontFamily: "'Nunito', sans-serif",
                color: "rgba(255,255,255,0.5)",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <MapPin size={10} color="#FF1F8E" />
              Live tracking enabled
            </div>
          </motion.div>
        )}

        {/* Book button */}
        {step < 3 && (
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "12px",
              right: "12px",
              background: "rgba(255,215,0,1)",
              borderRadius: "12px",
              padding: "12px",
              textAlign: "center",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "13px",
              fontWeight: 800,
              color: "#000",
              boxShadow: "0 4px 15px rgba(255,215,0,0.4)",
            }}
          >
            ⚡ Book Now — Free
          </div>
        )}
      </div>
    </div>
  );
}

export function AppScene() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [step, setStep] = useState(0);
  const [countdown, setCountdown] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    if (!isInView) {
      setStep(0);
      setCountdown(600);
      return;
    }

    // Animate steps
    const t1 = setTimeout(() => setStep(1), 600);
    const t2 = setTimeout(() => setStep(2), 1400);
    const t3 = setTimeout(() => setStep(3), 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isInView]);

  useEffect(() => {
    if (step < 3) return;
    if (countdown <= 0) return;
    const interval = setInterval(() => setCountdown((c) => Math.max(0, c - 1)), 1000);
    return () => clearInterval(interval);
  }, [step, countdown]);

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0a0014 0%, #130020 50%, #1a0030 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,31,142,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,31,142,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Scene tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        style={{
          background: "rgba(255, 31, 142, 0.1)",
          border: "1px solid rgba(255, 31, 142, 0.4)",
          borderRadius: "50px",
          padding: "6px 18px",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "13px",
          color: "#FF1F8E",
          marginBottom: "24px",
          letterSpacing: "1px",
          position: "relative",
          zIndex: 1,
        }}
      >
        SCENE 5 • THE APP EXPERIENCE
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7 }}
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "clamp(28px, 5vw, 52px)",
          fontWeight: 900,
          color: "#fff",
          textAlign: "center",
          maxWidth: "600px",
          lineHeight: 1.2,
          marginBottom: "12px",
          position: "relative",
          zIndex: 1,
        }}
      >
        3 taps. Expert at your door.
        <br />
        <span style={{ color: "#FFD700" }}>In under 10 minutes.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "clamp(15px, 2vw, 18px)",
          color: "rgba(255,255,255,0.5)",
          textAlign: "center",
          marginBottom: "48px",
          position: "relative",
          zIndex: 1,
        }}
      >
        Watch how it works 👇
      </motion.p>

      <div
        style={{
          display: "flex",
          gap: "clamp(24px, 6vw, 64px)",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Steps indicator */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {STEPS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "14px 20px",
                borderRadius: "14px",
                background:
                  step > i
                    ? "rgba(255, 31, 142, 0.15)"
                    : step === i
                    ? "rgba(255, 215, 0, 0.08)"
                    : "rgba(255,255,255,0.03)",
                border:
                  step > i
                    ? "1px solid rgba(255, 31, 142, 0.4)"
                    : step === i
                    ? "1px solid rgba(255, 215, 0, 0.3)"
                    : "1px solid rgba(255,255,255,0.06)",
                transition: "all 0.4s ease",
                minWidth: "200px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background:
                    step > i
                      ? "linear-gradient(135deg, #FF1F8E, #FF6B8E)"
                      : step === i
                      ? "rgba(255,215,0,0.2)"
                      : "rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  flexShrink: 0,
                  transition: "all 0.4s ease",
                }}
              >
                {step > i ? <Check size={18} color="#fff" /> : s.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: step > i ? "#FF1F8E" : step === i ? "#FFD700" : "rgba(255,255,255,0.5)",
                    transition: "color 0.4s",
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: "2px",
                  }}
                >
                  {s.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ animation: "float-up 4s ease-in-out infinite" }}
        >
          <PhoneMockup step={step} countdown={countdown} />
        </motion.div>
      </div>

      {/* Bottom stat */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{
          marginTop: "48px",
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {[
          { val: "10 min", label: "Average response", icon: "⚡" },
          { val: "4.9★", label: "Service rating", icon: "⭐" },
          { val: "24/7", label: "Available always", icon: "🕐" },
          { val: "₹0", label: "Booking fee", icon: "💚" },
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "14px",
              padding: "16px 22px",
              textAlign: "center",
              minWidth: "100px",
            }}
          >
            <div style={{ fontSize: "22px", marginBottom: "4px" }}>{stat.icon}</div>
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "20px",
                fontWeight: 800,
                color: "#FF1F8E",
              }}
            >
              {stat.val}
            </div>
            <div
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "11px",
                color: "rgba(255,255,255,0.4)",
                marginTop: "2px",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
