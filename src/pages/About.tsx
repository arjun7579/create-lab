import { Cpu, Satellite, Wifi, Zap, Waves, Leaf } from "lucide-react";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const FeatureItem = ({ icon, title, children }: FeatureItemProps) => (
  <div className="flex gap-4 items-start p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/8 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
    <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 flex-shrink-0">
      <div className="w-6 h-6 text-accent">{icon}</div>
    </div>
    <div>
      <div className="font-semibold text-foreground">{title}</div>
      <div className="text-sm text-foreground/70 mt-1">{children}</div>
    </div>
  </div>
);

export default function About() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold">About C.R.E.A.T.E Lab</h2>
      <p className="mt-6 text-lg text-foreground/80 leading-relaxed max-w-3xl">
        C.R.E.A.T.E Lab focuses on cutting-edge research at the intersection of autonomous systems,
        communications, and resilient physical infrastructure. We work on high-impact projects and
        collaborate across disciplines to deploy robust solutions for real-world engineering
        problems.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <FeatureItem icon={<Cpu />} title="Cyber-Physical Systems (CPS)">
          Design and verification of resilient cyber-physical systems for safety-critical
          applications.
        </FeatureItem>
        <FeatureItem icon={<Satellite />} title="UAV & Drone Security">
          Secure architectures for drones, attack detection and mitigation strategies.
        </FeatureItem>
        <FeatureItem icon={<Wifi />} title="Internet of Things (IoT)">
          Scalable IoT systems for sensing and actuation across environments.
        </FeatureItem>
        <FeatureItem icon={<Zap />} title="AI & Digital Twins">
          AI-driven decision systems and digital twins for autonomous testing and simulation.
        </FeatureItem>
        <FeatureItem icon={<Waves />} title="5G/6G Networks">
          Research on low-latency, high-reliability communications for autonomy.
        </FeatureItem>
        <FeatureItem icon={<Leaf />} title="Climate-Resilient Engineering">
          Sustainable approaches to resilient infrastructure and environmental monitoring.
        </FeatureItem>
      </div>
    </div>
  );
}
