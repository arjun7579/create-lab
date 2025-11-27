import MemberCard from "@/components/MemberCard";

const members = [
  {
    photo: "https://i.pravatar.cc/150?img=12",
    name: "Dr. Arjun R. Nair",
    role: "Principal Investigator",
  },
  {
    photo: "https://i.pravatar.cc/150?img=32",
    name: "Dr. Ragesh G.K.",
    role: "Co-Investigator",
  },
  {
    photo: "https://i.pravatar.cc/150?img=8",
    name: "Priya Menon",
    role: "PhD Student - UAV Security",
  },
  {
    photo: "https://i.pravatar.cc/150?img=45",
    name: "Aditya Kumar",
    role: "PhD Student - Digital Twins",
  },
  {
    photo: "https://i.pravatar.cc/150?img=27",
    name: "Dr. Sarah Chen",
    role: "Postdoctoral Researcher",
  },
  {
    photo: "https://i.pravatar.cc/150?img=65",
    name: "Rohan Sharma",
    role: "Research Assistant",
  },
];

export default function Members() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold">Team Members</h2>
      <p className="mt-4 text-lg text-foreground/80">
        Meet the researchers and students driving innovation at C.R.E.A.T.E Lab.
      </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, i) => (
          <MemberCard key={i} {...member} />
        ))}
      </div>
    </div>
  );
}
