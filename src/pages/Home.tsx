import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DroneScene from "@/components/DroneScene";

export default function Home() {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <DroneScene />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          C.R.E.A.T.E <span className="text-accent">Lab</span>
        </h1>
        <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Centre for Resilient Environments and Autonomous Technologies for Engineering Systems —
          CPS, UAV security, IoT, AI & Digital Twins, 5G/6G networks, climate-resilient
          engineering.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/about"
            className="px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
          >
            Explore Research
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/15 transition-colors backdrop-blur-sm border border-white/10"
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
