import { useState, useEffect } from "react";

interface WaitlistPopupProps {
  onClose: () => void;
}

export function WaitlistPopup({ onClose }: WaitlistPopupProps) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Mobile:", mobileNumber, "City:", city);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl relative animate-[slideUp_0.3s_ease-out]">
        {!submitted ? (
          <>
            <button 
              onClick={() => onClose()}
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