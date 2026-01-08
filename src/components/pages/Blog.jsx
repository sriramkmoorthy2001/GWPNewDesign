import { HeroParallax } from "../ui/hero-parallax";

const Blog = () => {
    // Expanded article list to fill the parallax rows (needs ~15 items)
    const articles = [
        {
          title: "The Future of AI in Enterprise",
          link: "#",
          thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600",
        },
        {
          title: "Sustainable Digital Transformation",
          link: "#",
          thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
        },
        {
          title: "Cloud Native Architecture",
          link: "#",
          thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
        },
        {
          title: "Data-Driven Customer Experience",
          link: "#",
          thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
        },
        {
          title: "Cybersecurity in 2026",
          link: "#",
          thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
        },
        {
          title: "Gen AI",
          link: "#",
          thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600",
        },
        {
          title: "Sustainable Tech",
          link: "#",
          thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
        },
        {
          title: "Quantum Computing",
          link: "#",
          thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600",
        },
        {
          title: "Zero Trust Security",
          link: "#",
          thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
        },
        {
          title: "Green Tech",
          link: "#",
          thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600",
        },
         {
          title: "Edge Computing",
          link: "#",
          thumbnail: "https://images.unsplash.com/photo-1558346087-1eb755153b06?auto=format&fit=crop&q=80&w=600",
        },
        {
          title: "Digital Twins",
          link: "#",
          thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
        },
        {
          title: "Blockchain 3.0",
          link: "#",
          thumbnail: "https://images.unsplash.com/photo-1621504450168-b8c437544372?auto=format&fit=crop&q=80&w=600",
        },
        {
          title: "AR/VR Integration",
          link: "#",
          thumbnail: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&q=80&w=600",
        },
        {
          title: "Neural Networks",
          link: "#",
          thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600",
        }
    ];

    return (
        <div className="w-full bg-black">
            <HeroParallax products={articles} />
        </div>
    );
};

export default Blog;
