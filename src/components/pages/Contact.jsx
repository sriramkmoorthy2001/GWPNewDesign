import { motion } from "framer-motion";
import { 
  FiUser, 
  FiMail, 
  FiBriefcase, 
  FiSend, 
  FiChevronDown, 
  FiFacebook, 
  FiLinkedin,
  FiMapPin,
  FiLayout,
  FiHome
} from "react-icons/fi";
import { useState } from "react";
import { ReactLenis } from "lenis/react";
import AntigravityHero from "../hero/AntigravityHero";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    lookingFor: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const features = [
    "Partnering with over 80 growing companies",
    "A team of 20+ data experts",
    "Business Intelligence & Artificial Intelligence"
  ];

  return (
    <ReactLenis root options={{ lerp: 0.05 }}>
      <div className="bg-black text-white overflow-hidden">
        {/* Antigravity Hero Section */}
        <AntigravityHero />

        {/* Contact Form Section */}
        <section className="min-h-screen py-32 px-6 md:px-12 lg:px-24 bg-black text-white border-t border-white/10">
          <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-20">
            
            {/* LEFT COLUMN - NARRATIVE */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 space-y-12"
            >
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400">Contact</span>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white max-w-md">
                Let's develop your business intelligence <span className="text-[#00ffff]">together.</span>
              </h2>

              <div className="space-y-4 text-xl">
                <a href="mailto:info@ventriloc.ca" className="block font-bold hover:text-[#00ffff] transition-colors underline underline-offset-8 decoration-white/20">info@ventriloc.ca</a>
                <a href="tel:819-345-3223" className="block font-bold hover:text-[#00ffff] transition-colors underline underline-offset-8 decoration-white/20">819-345-3223</a>
                <a href="#" className="block font-bold hover:text-[#00ffff] transition-colors underline underline-offset-8 decoration-white/20">LinkedIn</a>
              </div>

              <div className="space-y-5 pt-8 border-t border-white/10 lg:max-w-sm">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L4 8L11 1" stroke="#00ffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="font-bold text-lg text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT COLUMN - FORM CARD */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="bg-[#0a0a0a] rounded-xl p-10 md:p-14 border border-white/5 shadow-[0_20px_80px_-15px_rgba(0,0,0,0.5)] space-y-12">
                <h3 className="text-2xl font-bold leading-tight max-w-md text-white">
                  Every great partnership starts with a coffee. <br /> Let's talk!
                </h3>
                
                <form className="space-y-10">
                  <div className="space-y-8">
                    {/* Input Fields */}
                    {[
                      { name: "lastName", label: "Last name*" },
                      { name: "firstName", label: "First name*" },
                      { name: "email", label: "Email" },
                      { name: "phone", label: "Phone" },
                      { name: "organization", label: "Organization" },
                      { name: "lookingFor", label: "I'm looking for*" },
                      { name: "message", label: "Message" }
                    ].map((field) => (
                      <div key={field.name} className="relative group">
                        <input
                          type="text"
                          name={field.name}
                          placeholder=" "
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#00ffff] transition-colors peer text-lg font-medium text-white"
                        />
                        <label className="absolute left-0 top-3 text-gray-500 font-medium transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#00ffff] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                          {field.label}
                        </label>
                      </div>
                    ))}
                  </div>

                  <button className="bg-[#00ffff] text-black px-12 py-5 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-white transition-all transform hover:-translate-y-1 active:scale-95 shadow-[0_10px_30px_-5px_rgba(0,255,255,0.3)]">
                    Send
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Contact;
