import { ReactLenis } from "lenis/react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { FiArrowRight, FiMapPin, FiChevronDown, FiPlus, FiMinus, FiSearch } from "react-icons/fi";
import { useRef, useState, useMemo } from "react";

export default function Career() {
  return (
    <div className="bg-black">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  );
}

// ---------------- HERO ----------------
const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scale first image from card size to full screen
  const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.7, 1]);
  const borderRadius = useTransform(scrollYProgress, [0.1, 0.5], ["40px", "0px"]);
  const imageOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]); 
  
  // Text animation: move up and fade out as we scroll
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -300]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full h-[400vh] bg-black">
      {/* 1. Introductory Text (Video Masked) */}
      <div className="relative h-screen w-full flex items-center justify-center z-30 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="w-full relative flex items-center justify-center"
        >
          {/* 
            MASK TECHNIQUE:
            The Video is behind.
            The Div over it is Black with White Text + mix-blend-multiply.
            This makes White areas transparent (showing video) and Black areas opaque.
            NO EXTRA CONTAINER.
          */}
          <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/white background video.mp4" type="video/mp4" />
            </video>
            
            <div className="relative z-10 w-full h-screen bg-black flex flex-col items-center justify-center mix-blend-multiply px-4 border-none">
               <h2 className="text-sm sm:text-xl md:text-2xl lg:text-4xl font-bold mb-4 uppercase tracking-[0.2em] text-white text-center">
                Be a part of Global Web Production
              </h2>
              <h3 className="text-[16vw] sm:text-[12vw] md:text-[10vw] lg:text-[12vw] max-w-[95vw] font-[900] leading-[0.85] tracking-tighter text-white text-center">
                BE PART OF <br /> SOMETHING GREATER
              </h3>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 2. Sticky Scaling Image Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-10">
        <motion.div
           style={{ 
             scale, 
             borderRadius,
             opacity: imageOpacity
           }}
           className="relative h-screen w-full bg-zinc-900 overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            className="h-full w-full object-cover"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </motion.div>
      </div>

      {/* 3. Parallax Section (comes after the hero scaling) */}
      <div className="relative z-20 -mt-[50vh]">
         <ParallaxImages />
      </div>
    </div>
  );
};

// ---------------- PARALLAX IMAGES ----------------
const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-40 flex flex-col gap-40">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
        alt="Team Meeting"
        start={100}
        end={-100}
        className="w-full sm:w-3/4 md:w-1/2 rounded-2xl shadow-2xl ring-1 ring-white/10"
      />

      <ParallaxImg
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200"
        alt="Digital Innovation"
        start={200}
        end={-250}
        className="mx-auto w-full sm:w-3/4 rounded-3xl shadow-2xl ring-1 ring-cyan-500/20"
      />

      <ParallaxImg
        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
        alt="Creative Workspace"
        start={-100}
        end={100}
        className="ml-auto w-full sm:w-3/4 md:w-1/2 rounded-2xl shadow-2xl ring-1 ring-white/10"
      />
    </div>
  );
};

// ---------------- PARALLAX IMAGE ITEM ----------------
const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      ref={ref}
      className={className}
      style={{ transform, opacity }}
    />
  );
};

// ---------------- JOB DATA ----------------
const JOBS = [
  {
    id: 1,
    title: "Technical Project Manager - AEM Lead",
    location: "Trivandrum, Kerala",
    region: "India",
    mode: "Remote",
    description: "We are seeking an experienced and dynamic Technical Project Manager - AEM Lead to join our team. This role requires a seasoned professional with deep expertise in Adobe Experience Manager (AEM) and a proven track record in leading high-impact projects. The ideal candidate will possess strong leadership skills, technical acumen, and the ability to manage complex projects from inception to completion.",
    responsibilities: [
      "AEM Expertise: Utilize in-depth knowledge of Adobe Experience Manager, including AEM campaigns, Adobe Targeting, and experimentation, to drive effective solutions.",
      "Leadership: Lead and inspire a team of professionals, fostering a collaborative and high-performance environment.",
      "Stakeholder Engagement: Build and maintain strong relationships with stakeholders to ensure alignment and project success.",
      "Project Management: Oversee project lifecycles, ensuring timely delivery and quality, while applying exceptional project management skills.",
      "Client Coordination: Work closely with clients to understand their needs, manage expectations, and deliver tailored solutions.",
      "Technical Acumen: Leverage technical expertise to solve complex problems and drive innovation within projects."
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Information Technology, or a related field.",
      "Proven experience in project management, specifically with Adobe Experience Manager.",
      "Strong leadership and team management skills.",
      "Excellent communication and interpersonal abilities.",
      "Ability to manage multiple projects simultaneously and meet tight deadlines.",
      "Proficiency in project management tools and methodologies."
    ],
    skills: ["AEM", "Adobe Target", "Project Management", "Leadership"]
  },
  {
    id: 4,
    title: "WordPress Developer",
    location: "Trivandrum, Kerala",
    region: "India",
    mode: "Hybrid",
    description: "Join our development team to build and maintain high-quality WordPress websites for a diverse range of clients.",
    responsibilities: ["Develop custom themes and plugins", "Ensure website performance and security", "Collaborate with designers"],
    requirements: ["Proven WP experience", "Proficiency in PHP, HTML, CSS"],
    skills: ["WordPress", "PHP", "JavaScript"]
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Trivandrum, Kerala",
    region: "India",
    mode: "Hybrid",
    description: "Create immersive and high-performing digital experiences for global clients.",
    responsibilities: ["Wireframing and Prototyping", "User Research", "Visual Design"],
    requirements: ["3+ years experience", "Portfolio of work"],
    skills: ["Figma", "Adobe XD"]
  },
  {
    id: 5,
    title: "HR Executive",
    location: "Trivandrum, Kerala",
    region: "India",
    mode: "Onsite",
    description: "Manage human resources functions and foster a positive workplace culture.",
    responsibilities: ["Recruitment", "Employee Engagement", "Policy Management"],
    requirements: ["HR background", "Excellent interpersonal skills"],
    skills: ["HRM", "Communication"]
  },
  {
    id: 6,
    title: "Development QA Intern",
    location: "Trivandrum, Kerala",
    region: "India",
    mode: "Internship",
    description: "Learn the ropes of quality assurance in a fast-paced development environment.",
    responsibilities: ["Manual testing", "Bug reporting"],
    requirements: ["Final year student or recent graduate"],
    skills: ["Testing", "Attention to Detail"]
  },
  {
    id: 7,
    title: "Full Stack Developer (MERN) Intern",
    location: "Trivandrum, Kerala",
    region: "India",
    mode: "Internship",
    description: "Gain hands-on experience in MERN stack development.",
    responsibilities: ["Assist in frontend and backend tasks"],
    requirements: ["Knowledge of React and Node.js"],
    skills: ["MERN", "JavaScript"]
  },
  {
    id: 8,
    title: "HR Associate Intern",
    location: "Trivandrum, Kerala",
    region: "India",
    mode: "Internship",
    description: "Support our HR team in daily operations and recruitment.",
    responsibilities: ["Scheduling interviews", "Documentation"],
    requirements: ["Interest in HR career"],
    skills: ["Organization", "Communication"]
  },
  {
    id: 9,
    title: "WordPress Developer Intern",
    location: "Trivandrum, Kerala",
    region: "India",
    mode: "Internship",
    description: "Work on real-world WordPress projects under mentorship.",
    responsibilities: ["Basic theme adjustments", "Content updates"],
    requirements: ["Basic HTML/CSS knowledge"],
    skills: ["WordPress", "HTML/CSS"]
  },
  {
    id: 10,
    title: "Full Stack Developer (AEM) Intern",
    location: "Trivandrum, Kerala",
    region: "India",
    mode: "Internship",
    description: "Introduction to enterprise-grade CMS development with AEM.",
    responsibilities: ["Learning AEM components", "Assisting lead developers"],
    requirements: ["Strong Java fundamentals"],
    skills: ["AEM", "Java"]
  },
  {
    id: 11,
    title: "Data Science Associate Intern",
    location: "Trivandrum, Kerala",
    region: "India",
    mode: "Internship",
    description: "Apply data science techniques to solve business problems.",
    responsibilities: ["Data cleaning", "Basic modeling"],
    requirements: ["Python knowledge", "Statistical background"],
    skills: ["Python", "Data Analysis"]
  },
  {
    id: 12,
    title: "Digital Marketing Associate Intern",
    location: "Trivandrum, Kerala",
    region: "India",
    mode: "Internship",
    description: "Participate in digital marketing campaign execution.",
    responsibilities: ["Social media management", "SEO tasks"],
    requirements: ["Passion for marketing"],
    skills: ["SEO", "Social Media"]
  },
  {
    id: 13,
    title: "Operations Executive Intern",
    location: "Trivandrum, Kerala",
    region: "India",
    mode: "Internship",
    description: "Ensure smooth business operations through administrative support.",
    responsibilities: ["Scheduling", "Workflow monitoring"],
    requirements: ["Strong organizational skills"],
    skills: ["Operations", "Excel"]
  },
  {
    id: 2,
    title: "CRM Executive",
    location: "USA",
    region: "USA",
    mode: "Remote",
    description: "Looking for a dynamic CRM Executive to manage our customer relationships and optimize our marketing automation workflows.",
    responsibilities: [
      "Manage CRM database and ensure data integrity.",
      "Create and implement automated marketing campaigns.",
      "Analyze CRM metrics to drive engagement and retention.",
      "Work closely with sales teams to align CRM strategies."
    ],
    requirements: [
      "Proven experience as a CRM Executive or similar role.",
      "Expertise in Salesforce, HubSpot, or similar CRM platforms.",
      "Strong analytical skills and data-driven mindset.",
      "Bachelor's degree in Marketing, Business, or related field."
    ],
    skills: ["Salesforce", "Customer Lifecycle Management", "A/B Testing", "Data Analysis"]
  },
  {
    id: 14,
    title: "Graphic Designer - Intern",
    location: "USA",
    region: "USA",
    mode: "Remote",
    description: "We are looking for a creative and detail-oriented Graphic Designer with a minimum of 1 year of experience in visual design and branding. The ideal candidate should be proficient in design tools like Adobe Photoshop Suite, and Canva, with a strong eye for aesthetics and visual storytelling. If you’re passionate about turning concepts into engaging visuals across print and digital platforms, we’d love to hear from you!",
    responsibilities: [
      "Design visual content for digital marketing, social media, websites, and print materials",
      "Create compelling graphics, infographics, and layouts that align with brand guidelines",
      "Collaborate with the marketing and content teams to develop creative assets for campaigns",
      "Edit and retouch images to ensure high-quality visual output",
      "Develop branding materials such as logos, brochures, flyers, and presentations",
      "Ensure consistency in brand messaging and design aesthetics across all platforms",
      "Adapt graphics for multiple platforms (e.g., web, mobile, social media, print)",
      "Stay updated with the latest design trends and tools",
      "Handle multiple projects simultaneously while meeting deadlines and maintaining quality"
    ],
    requirements: [
      "Fresher or 1 year of experience as a Graphic Designer or in a similar design role",
      "Proficiency in Adobe Creative Suite and Canva",
      "Strong understanding of design principles, typography, and color theory",
      "Experience in creating marketing assets for both digital and print media",
      "Good communication skills and the ability to understand project requirements clearly",
      "A strong portfolio showcasing creative and professional design work",
      "Ability to work both independently and in a team environment"
    ],
    skills: ["Photoshop", "Canva", "Motion Graphics", "Branding"],
    preferredSkills: [
      "Experience with motion graphics and video editing tools",
      "Knowledge of UI/UX principles and tools like Figma or Adobe XD",
      "Familiarity with web design and basic HTML/CSS is a plus",
      "Understanding of branding strategy and creative direction"
    ]
  }
];

// ---------------- SCHEDULE ----------------
const Schedule = () => {
  const [selectedRegion, setSelectedRegion] = useState("India");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = useMemo(() => {
    return JOBS.filter(job => {
      const matchesRegion = job.region === selectedRegion;
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           job.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRegion && matchesSearch;
    });
  }, [selectedRegion, searchQuery]);

  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 md:px-8 py-48 text-white relative z-10 bg-black"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div>
          <motion.h1
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-8"
          >
            Current Openings
          </motion.h1>

          <div className="flex flex-wrap gap-4">
            {["India", "USA"].map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-6 md:px-8 py-3 rounded-full border text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  selectedRegion === region
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-500"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80 group">
          <input
            type="text"
            placeholder="Search roles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-full px-12 py-4 text-sm focus:outline-none focus:border-white transition-all duration-300 placeholder-zinc-600"
          />
          <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500 text-lg transition-colors group-focus-within:text-white" />
        </div>
      </div>

      <div className="space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <ScheduleItem
                key={job.id}
                {...job}
              />
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-zinc-500 py-10"
            >
              {searchQuery ? `No jobs found matching "${searchQuery}"` : "No openings at the moment for this region."}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const ScheduleItem = ({ title, location, mode, description, responsibilities, requirements, skills, preferredSkills }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="group"
    >
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between border-b border-zinc-800 px-3 pb-9 cursor-pointer hover:border-zinc-500 transition-colors"
      >
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-3 text-2xl font-semibold text-zinc-50 tracking-tight">
            {title}
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              className="text-zinc-500"
            >
              <FiChevronDown />
            </motion.span>
          </div>
          <div className="flex items-center gap-6 text-sm uppercase tracking-widest text-zinc-500 font-medium">
            <span className="flex items-center gap-1.5"><FiMapPin /> {location}</span>
            <span>•</span>
            <span>{mode}</span>
          </div>
        </div>

        <div className="flex items-center justify-center p-3 rounded-full border border-zinc-800 text-zinc-400 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all">
          <FiArrowRight className="text-xl" />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden bg-zinc-900/30 rounded-3xl mt-4"
          >
            <div className="p-10 space-y-10">
              <div className="space-y-4">
                <h4 className="text-zinc-500 uppercase text-xs font-bold tracking-[0.2em]">About the Role</h4>
                <p className="text-zinc-300 text-lg leading-relaxed max-w-3xl">
                  {description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h4 className="text-zinc-500 uppercase text-xs font-bold tracking-[0.2em] flex items-center gap-2">
                    <FiPlus className="text-cyan-500" /> Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {responsibilities.map((item, i) => (
                      <li key={i} className="text-zinc-400 flex items-start gap-3">
                        <span className="text-zinc-700">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <h4 className="text-zinc-500 uppercase text-xs font-bold tracking-[0.2em] flex items-center gap-2">
                    <FiMinus className="text-cyan-500" /> Requirements
                  </h4>
                  <ul className="space-y-3">
                    {requirements.map((item, i) => (
                      <li key={i} className="text-zinc-400 flex items-start gap-3">
                        <span className="text-zinc-700">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {preferredSkills && preferredSkills.length > 0 && (
                <div className="space-y-6">
                  <h4 className="text-zinc-500 uppercase text-xs font-bold tracking-[0.2em]">Preferred Skills</h4>
                  <ul className="space-y-3">
                    {preferredSkills.map((item, i) => (
                      <li key={i} className="text-zinc-400 flex items-start gap-3">
                        <span className="text-zinc-700 font-bold text-cyan-500">+</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-6">
                <h4 className="text-zinc-500 uppercase text-xs font-bold tracking-[0.2em]">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span key={i} className="px-5 py-2 rounded-full bg-zinc-800 text-zinc-300 text-xs font-medium border border-zinc-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button className="w-full md:w-auto px-10 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
