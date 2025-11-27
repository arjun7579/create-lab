interface MemberCardProps {
  photo: string;
  name: string;
  role: string;
}

export default function MemberCard({ photo, name, role }: MemberCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl flex items-center gap-4 hover:bg-white/8 transition-all duration-300 transform hover:-translate-y-2 border border-white/10 cursor-pointer">
      <img
        src={photo}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border-2 border-accent/30"
      />
      <div>
        <div className="font-semibold text-foreground">{name}</div>
        <div className="text-sm text-foreground/70">{role}</div>
      </div>
    </div>
  );
}
