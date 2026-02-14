"use client";
import { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersection";
import { useMagnetic } from "../hooks/useMagnetic";
import toast, { Toaster } from "react-hot-toast";
import { Loader } from "lucide-react";

const Contact = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const magneticRef = useMagnetic();
  const[loading , setloading] = useState(false);
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    interest: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const response = await fetch("/api/contact_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        toast.success("Message sent successfully. We'll get back to you soon.");
        setformdata({ name: "", email: "", interest: "" });
      } else {
        toast.error(data?.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Unable to send. Please check your connection and try again.");
    } finally {
      setloading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={elementRef}
      className="min-h-screen flex items-center justify-center py-8 md:py-8 px-6 relative bg-[#E6E0D4]/20"
    >
      <div
        className={`max-w-xl w-full relative z-10 bg-[#FDFBF7]/90 backdrop-blur-md p-6 md:p-12 border border-[#3E2F22]/5 shadow-xl transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <div className="text-center mb-8 md:mb-10">
          <span className="font-sans text-xs tracking-[0.3em] text-[#BFA15F] uppercase">
            Bengaluru South, Karnataka
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mt-3 text-[#3E2F22]">
            CONNECT WITH US
          </h2>
        </div>

        <div className="mb-8 text-center text-[#3E2F22]/70 font-sans text-sm">
          <p className="mb-2">Food and Beverage Manufacturing</p>
          <p>Founded 2022</p>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative">
              <input
                type="text"
                name="name"
                id="name"
                value={formdata.name}
                onChange={(e) =>
                  setformdata({ ...formdata, [e.target.name]: e.target.value })
                }
                required
                placeholder=" "
                className="block w-full bg-transparent border-b border-[#3E2F22]/30 py-2 text-[#3E2F22] focus:outline-none focus:border-[#BFA15F] transition-colors peer"
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-4 text-[#3E2F22]/50 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[#BFA15F] peer-focus:text-[10px] peer-placeholder-shown:top-2"
              >
                Name
              </label>
            </div>
            <div className="group relative">
              <input
                type="text"
                id="interest"
                name="interest"
                value={formdata.interest}
                onChange={(e) =>
                  setformdata({ ...formdata, [e.target.name]: e.target.value })
                }
                required
                placeholder=" "
                className="block w-full bg-transparent border-b border-[#3E2F22]/30 py-2 text-[#3E2F22] focus:outline-none focus:border-[#BFA15F] transition-colors peer"
              />
              <label
                htmlFor="interest"
                className="absolute left-0 -top-4 text-[#3E2F22]/50 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[#BFA15F] peer-focus:text-[10px] peer-placeholder-shown:top-2"
              >
                Area of Interest
              </label>
            </div>
          </div>

          <div className="group relative">
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={(e) =>
                setformdata({ ...formdata, [e.target.name]: e.target.value })
              }
              id="email"
              required
              placeholder=" "
              className="block w-full bg-transparent border-b border-[#3E2F22]/30 py-2 text-[#3E2F22] focus:outline-none focus:border-[#BFA15F] transition-colors peer"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-4 text-[#3E2F22]/50 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[#BFA15F] peer-focus:text-[10px] peer-placeholder-shown:top-2"
            >
              Email
            </label>
          </div>

          <div className="pt-6 flex flex-col items-center justify-center space-y-6">
            <button
              ref={magneticRef}
              type="submit"
              className="relative px-10 py-4 border border-[#3E2F22]/20 overflow-hidden group hover-trigger"
            >
              <span className="absolute inset-0 bg-[#BFA15F] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative font-sans text-xs tracking-[0.2em] uppercase text-[#3E2F22] group-hover:text-[#FDFBF7] transition-colors duration-300">
                {loading ? <Loader size={20}/> : "Submit Inquiry"}
              </span>
            </button>

            <a
              href="tel:+919113574563"
              className="text-xs font-sans tracking-widest text-[#3E2F22]/60 hover:text-[#BFA15F] transition-colors"
            >
              PHONE: +91 91135 74563
            </a>
          </div>
        </form>
      </div>
      <Toaster
        position="bottom-center"
        gutter={24}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#FDFBF7",
            color: "#3E2F22",
            border: "1px solid rgba(62, 47, 34, 0.12)",
            borderRadius: "8px",
            boxShadow: "0 4px 20px rgba(62, 47, 34, 0.12)",
            padding: "14px 20px",
            fontSize: "14px",
            letterSpacing: "0.02em",
          },
          success: {
            iconTheme: { primary: "#BFA15F", secondary: "#FDFBF7" },
          },
          error: {
            iconTheme: { primary: "#B91C1C", secondary: "#FDFBF7" },
          },
        }}
      />
    </section>
  );
};

export default Contact;
