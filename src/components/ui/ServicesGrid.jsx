import { motion } from "framer-motion";
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  LightBulbIcon, 
  PaintBrushIcon 
} from "@heroicons/react/24/outline";

const ServiceCard = ({ title, description, icon: Icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.6, once: false }} // Requires 60% visibility to be fully active, reverts when out
      className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800/80 transition-colors group max-w-2xl w-full shadow-2xl"
    >
      <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      title: "Application Services & Engineering",
      description: "Global Web Production delivers end-to-end application services and engineering solutions, covering the full lifecycle from strategy and development to modernisation and support. Our expert teams streamline business processes, implement CRM systems, integrate enterprise platforms, and build tailored software solutions to meet specific business needs. We specialise in transforming legacy systems into agile, future-ready architectures, with a strong focus on quality, performance, and scalability. Backed by continuous R&D and emerging technologies, we drive innovation and operational efficiency. At Global Web Production, we engineer outcomes that align with your vision and accelerate digital growth.",
      icon: CodeBracketIcon,
      delay: 0.1
    },
    {
      title: "Data, AI & Automation",
      description: "At Global Web Production, we harness the power of data, artificial intelligence, and automation to build intelligent systems that drive smarter decisions and improved business outcomes. Our expert team leverages advanced analytics, machine learning models, and automation tools to streamline operations, uncover insights, and enable predictive capabilities. From data strategy and AI implementation to workflow automation and intelligent dashboards, we deliver end-to-end solutions tailored to your unique needs. Our focus on precision, scalability, and business impact ensures your systems not only perform better but also evolve with your goals. With GWP Insights, we provide actionable intelligence and continuous optimisation, empowering you to make informed decisions, reduce manual effort, and stay ahead in a rapidly changing digital landscape.",
      icon: CpuChipIcon,
      delay: 0.1
    },
    {
      title: "Strategy & Transformation Consulting",
      description: "Global Web Production empowers organisations to navigate change and drive enterprise transformation through strategic thinking, innovation, and sustainable practices. Our consulting team blends deep industry knowledge with modern methodologies to help you reimagine your business for long-term success. We offer tailored services in technology consulting, digital strategy, and sustainability & resilience. Our experts collaborate closely with your leadership to align business goals with digital capabilities, identify growth opportunities, and future-proof operations. With a strong focus on measurable impact and industry best practices, we guide you through every stage of your transformation journey—ensuring agility, resilience, and competitive advantage in an ever-evolving landscape.",
      icon: LightBulbIcon,
      delay: 0.1
    },
    {
      title: "Creative & Experience Services",
      description: "At Global Web Production, our Creative & Experience Services are designed to enhance brand value and customer engagement through strategy, design, content, and innovation. From branding and content creation to game development and accessibility, we deliver purposeful, user-centric experiences that are visually compelling and inclusive. Our Experience Studio brings ideas to life with a focus on creativity, functionality, and results—helping your brand connect, stand out, and grow.",
      icon: PaintBrushIcon,
      delay: 0.1
    }
  ];

  return (
    <div className="relative w-full pointer-events-auto">
      {/* Sticky Header Container */}
      {/* Defined height container for the whole section based on content */}
      <div className="relative"> 
          {/* The Header that sticks */}
          <div className="sticky top-0 h-screen flex flex-col items-center justify-start pt-24 z-0">
             <motion.div
               initial={{ opacity: 0, y: -20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="text-center w-full px-6"
             >
               <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4 whitespace-nowrap">
                 WE OFFER A WIDE VARIETY OF SERVICES
               </h2>
               <p className="text-gray-400 text-lg md:text-xl">
                   Comprehensive digital solutions tailored to drive your business forward.
               </p>
             </motion.div>
          </div>

          {/* Scrolling Cards Container */}
          {/* Uses padding to push cards down initially, and gap to space them out */}
          <div className="relative z-10 flex flex-col items-center gap-[60vh] pb-[40vh] -mt-[80vh]">
            <div className="h-[20vh]" /> {/* Spacer to let header sit alone for a bit */}
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
