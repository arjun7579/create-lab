import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Secure UAV Communications",
    desc: "Designing secure communication protocols for UAV swarms with end-to-end encryption and intrusion detection.",
    status: "in-progress" as const,
  },
  {
    title: "IoT Flood Monitoring System",
    desc: "Low-power sensors combined with networked analytics for flood early warning and disaster response.",
    status: "completed" as const,
  },
  {
    title: "Digital Twin for Wind Turbines",
    desc: "Real-time digital twin implementation for predictive maintenance and optimal control strategies.",
    status: "in-progress" as const,
  },
  {
    title: "5G Network Slicing for Autonomous Vehicles",
    desc: "Research on dynamic network slicing to ensure ultra-reliable low-latency communication.",
    status: "in-progress" as const,
  },
  {
    title: "Climate Resilient Infrastructure",
    desc: "AI-powered monitoring systems for infrastructure resilience against extreme weather events.",
    status: "completed" as const,
  },
  {
    title: "Cyber-Physical Security Framework",
    desc: "Comprehensive security framework for industrial control systems and critical infrastructure.",
    status: "in-progress" as const,
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold">Projects</h2>
      <p className="mt-4 text-lg text-foreground/80">
        Explore our ongoing and completed research initiatives spanning autonomous systems, IoT, and
        resilient infrastructure.
      </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>
  );
}
