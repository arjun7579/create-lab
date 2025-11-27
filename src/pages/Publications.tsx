import PublicationCard from "@/components/PublicationCard";

const publications = [
  {
    title: "Secure Communication Protocols for Autonomous Drone Swarms",
    authors: "A. Nair, P. Menon",
    venue: "IEEE Transactions on Intelligent Transportation Systems, 2024",
    link: "#",
  },
  {
    title: "Low-Power IoT Architecture for Real-Time Flood Detection",
    authors: "R. G.K., A. Nair, S. Chen",
    venue: "IEEE Sensors Journal, 2023",
    link: "#",
  },
  {
    title: "Digital Twin Framework for Wind Turbine Predictive Maintenance",
    authors: "A. Kumar, R. G.K.",
    venue: "Journal of Renewable Energy Systems, 2024",
    link: "#",
  },
  {
    title: "Network Slicing for Ultra-Reliable Autonomous Vehicle Communications",
    authors: "S. Chen, A. Nair",
    venue: "IEEE Communications Magazine, 2023",
    link: "#",
  },
  {
    title: "AI-Driven Resilience Assessment for Critical Infrastructure",
    authors: "A. Nair, R. Sharma",
    venue: "International Journal of Critical Infrastructure Protection, 2024",
    link: "#",
  },
];

export default function Publications() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold">Publications</h2>
      <p className="mt-4 text-lg text-foreground/80">
        Research papers and publications from C.R.E.A.T.E Lab members.
      </p>
      <div className="mt-10 grid gap-6">
        {publications.map((pub, i) => (
          <PublicationCard key={i} {...pub} />
        ))}
      </div>
    </div>
  );
}
