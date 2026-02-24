import { useState } from "react";
import { motion } from "motion/react";



export function StorytellingPage() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mobile:", mobileNumber, "City:", city);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#fb419e] min-h-screen">
      {/* Hero Section with Logo */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#fde003]/10 rounded-full blur-3xl"
        />

        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-full px-8 py-3">
            <p className="text-white font-bold text-lg md:text-xl tracking-wider">
              🚀 COMING SOON
            </p>
          </div>
        </motion.div>

        <div className="mb-16 relative z-10">
          <img 
            src={"/logo.png"} 
            alt="Inistnt Logo" 
            className="w-48 md:w-72 lg:w-80 h-auto object-contain rounded-3xl shadow-2xl"
          />
        </div>

        <div className="text-center max-w-6xl relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Book instant helper in{" "}
            <motion.span
              animate={{
                textShadow: [
                  "0 0 20px rgba(253, 224, 3, 0.5)",
                  "0 0 40px rgba(253, 224, 3, 0.8)",
                  "0 0 20px rgba(253, 224, 3, 0.5)",
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-[#fde003] font-extrabold"
            >
              10 min
            </motion.span>
            <br />
            for any household need
          </motion.h1>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 0.5 },
            y: { duration: 1.5, repeat: Infinity }
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Story Section 1: The Problem */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              We've All Been There...
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              It's 9 PM. Water is dripping from the ceiling. You frantically search for a plumber. 
              Endless calls. No one picks up. The ones who do? "Sorry, can't come today."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <img 
              src={"/img1.png"} 
              alt="Emergency Situation" 
              className="w-full h-auto rounded-[50px] shadow-2xl border-8 border-white"
            />
          </motion.div>
        </div>
      </section>

      {/* Story Section 2: The Wait is Over */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src={"/img2.png"} 
              alt="Professional Help" 
              className="w-full h-auto rounded-[50px] shadow-2xl border-8 border-white"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Help is Just 10 Minutes Away
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              No more waiting. No more stress. With Inistnt, verified professionals 
              reach your doorstep in just 10 minutes. Because your time matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section 3: How It Works */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center text-white mb-16"
          >
            Simple. Fast. Reliable.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#fde003] rounded-full flex items-center justify-center text-[#fb419e] font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Open the App</h3>
                    <p className="text-lg text-white/90">Quick and easy interface designed for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#fde003] rounded-full flex items-center justify-center text-[#fb419e] font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Choose Your Service</h3>
                    <p className="text-lg text-white/90">Plumbing, electrical, or any household emergency</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#fde003] rounded-full flex items-center justify-center text-[#fb419e] font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Get Help in 10 Minutes</h3>
                    <p className="text-lg text-white/90">Verified professionals at your doorstep</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src={"/img3.png"} 
                alt="App Interface" 
                className="w-full h-auto rounded-[50px] shadow-2xl border-8 border-white"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section 4: Our Professionals */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src={"/img4.png"} 
              alt="Verified Professionals" 
              className="w-full h-auto rounded-[50px] shadow-2xl border-8 border-white"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Verified. Skilled. Trusted.
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
              Every professional on Inistnt is thoroughly verified and trained. 
              We ensure quality service every single time.
            </p>
            <ul className="space-y-4 text-lg text-white/90">
              <li className="flex items-center gap-3">
                <span className="text-[#fde003] text-2xl">✓</span>
                Background verified professionals
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#fde003] text-2xl">✓</span>
                Skilled and experienced team
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#fde003] text-2xl">✓</span>
                Transparent pricing, no hidden charges
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Story Section 5: Coverage */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Available Across Your City
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              We're expanding rapidly across metro cities. From busy neighborhoods 
              to quiet suburbs, Inistnt is ready to help you wherever you are.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <img 
              src={"/img5.png"} 
              alt="City Coverage" 
              className="w-full h-auto rounded-[50px] shadow-2xl border-8 border-white"
            />
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#fde003] mb-8">
              Coming Soon
            </h2>
            <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-16">
              In Your City
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto mb-12"
            >
              <img 
                src={"/img6.png"} 
                alt="Our Team" 
                className="w-full h-auto rounded-[50px] shadow-2xl"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-white/90 mb-8"
            >
              Be the first to experience instant help at your doorstep
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto w-full"
        >
          {/* Glass morphism card */}
          <div className="relative bg-white/10 backdrop-blur-xl rounded-[40px] p-8 md:p-12 shadow-2xl border-2 border-white/20">
            {/* Decorative gradient orbs */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#fde003]/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/30 rounded-full blur-3xl"></div>
            
            {!submitted ? (
              <>
                <div className="text-center mb-8 relative z-10">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-extrabold text-white mb-4"
                  >
                    Join the Waitlist
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-xl md:text-2xl text-[#fde003] font-bold"
                  >
                    Get your first service FREE! 🎉
                  </motion.p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="mobile" className="block text-lg font-bold text-white mb-3">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="w-full px-6 py-4 text-lg rounded-2xl bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white placeholder:text-white/60 focus:border-[#fde003] focus:outline-none transition-colors"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="city" className="block text-lg font-bold text-white mb-3">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Enter your city"
                      required
                      className="w-full px-6 py-4 text-lg rounded-2xl bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white placeholder:text-white/60 focus:border-[#fde003] focus:outline-none transition-colors"
                    />
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#fde003] to-[#ffd700] text-[#fb419e] font-bold text-xl py-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                  >
                    Join Waitlist Now
                  </motion.button>
                </form>

                <p className="text-center text-white/70 mt-6 text-sm relative z-10">
                  No spam, just updates when we launch in your city
                </p>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12 relative z-10"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 0.6 }}
                  className="text-7xl mb-6"
                >
                  🎉
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Welcome Aboard!
                </h3>
                <p className="text-xl text-white/90 mb-4">
                  You're on the list. We'll notify you soon!
                </p>
                <p className="text-lg text-[#fde003] font-semibold">
                  Check your phone for confirmation 📱
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
}