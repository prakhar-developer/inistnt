import { useState, useEffect } from "react";
import imgInistnt11 from "figma:asset/cde5af9686200d63ce2f693190e3557ca19cdb54.png";
import imgImage51 from "figma:asset/5a60649ce0865040031c43ef625700c6f1a5b94b.png";
import imgImage61 from "figma:asset/d16199d336846b4c40b02a3af18d1074fb616164.png";
import imgImage91 from "figma:asset/0214da717c732e31f1be977cf03bcc2e9f296bcc.png";
import imgImage111 from "figma:asset/9b9c9e32b6bfa016ca2b2b1cdda2ac12da9ad68d.png";
import imgImage1 from "figma:asset/860963c898795dec59483f6fa9c3669028f342a7.png";

export function ComingSoon() {
  const [showPopup, setShowPopup] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show popup after scrolling near the bottom
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (scrollPosition > documentHeight - 800 && !submitted) {
        setShowPopup(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Mobile:", mobileNumber, "City:", city);
    setSubmitted(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff5f8] via-[#fffbf0] to-[#fff0f5]">
      {/* Logo Banner */}
      <div className="pt-8 pb-4 flex justify-center">
        <img 
          src={imgInistnt11} 
          alt="Inistnt Logo" 
          className="w-32 h-auto object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-[#333]">Book instant helper in </span>
            <span className="text-[#FF1F8E]">10 min</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 font-light">
            for any household need
          </p>
        </div>

        {/* Image Grid - Showcase Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
            <img 
              src={imgImage51} 
              alt="Service Professional" 
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
            <img 
              src={imgImage61} 
              alt="Quick Service" 
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* What We Do Section */}
        <div className="text-center mb-20 py-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            What We Do
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Inistnt connects you with verified professionals for all your home service needs - 
              plumbing, electrical work, and more. Get help at your doorstep in just 10 minutes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img 
                src={imgImage91} 
                alt="App Interface" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img 
                src={imgImage111} 
                alt="Service Provider" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="text-center py-20 mb-12">
          <h2 className="text-6xl md:text-8xl font-extrabold mb-4">
            <span className="text-[#FFD700]">Coming Soon</span>
          </h2>
          <p className="text-3xl md:text-5xl text-[#FF1F8E] font-bold mb-12">
            In Your City
          </p>
          
          {/* Team Photo */}
          <div className="max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={imgImage1} 
              alt="Our Team" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Waitlist Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl relative animate-[slideUp_0.3s_ease-out]">
            {!submitted ? (
              <>
                <button 
                  onClick={() => setShowPopup(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-3xl leading-none"
                >
                  ×
                </button>
                
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-3">
                    Join the Waitlist
                  </h3>
                  <p className="text-lg text-[#FF1F8E] font-semibold">
                    Get your first service FREE!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-[#FF1F8E] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Enter your city"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-[#FF1F8E] focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#FF1F8E] to-[#ff4da6] text-white font-bold py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all"
                  >
                    Join Waitlist
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Welcome Aboard!
                </h3>
                <p className="text-gray-600">
                  You're on the list. We'll notify you soon!
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}