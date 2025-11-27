interface ProjectCardProps {
  title: string;
  desc: string;
  status?: "completed" | "in-progress";
}

export default function ProjectCard({ title, desc, status = "in-progress" }: ProjectCardProps) {
  const color = status === "completed" ? "bg-status-completed" : "bg-status-progress";
  const label = status === "completed" ? "Completed" : "In Progress";

  return (
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-lg hover:bg-white/8 transition-all duration-300 transform hover:-translate-y-2 border border-white/10 cursor-pointer">
      <div className="flex justify-between items-start gap-3">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm mt-2 text-foreground/80">{desc}</p>
        </div>
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${color} text-white`}>
          {label}
        </div>
      </div>
    </div>
  );
}
