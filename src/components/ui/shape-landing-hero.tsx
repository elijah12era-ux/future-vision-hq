"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ElegantShapeProps {
  className?: string;
  delay?: number;
}

function ElegantShape({ className, delay = 0 }: ElegantShapeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ 
        opacity: [0, 0.6, 0.6],
        scale: [0.8, 1, 1],
        y: [20, 0, 15, 0]
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      className={cn("absolute", className)}
    >
      <Circle className="w-full h-full text-accent/20" strokeWidth={1} />
    </motion.div>
  );
}

interface HeroGeometricProps {
  badge?: string;
  title1?: string;
  title2?: string;
  className?: string;
}

function HeroGeometric({
  badge = "Welcome",
  title1 = "Build Something",
  title2 = "Amazing",
  className
}: HeroGeometricProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary-navy to-accent-cyan"
      />

      {/* Floating Shapes */}
      <ElegantShape className="top-20 left-10 w-32 h-32" delay={0.2} />
      <ElegantShape className="top-40 right-20 w-24 h-24" delay={0.4} />
      <ElegantShape className="bottom-32 left-1/4 w-40 h-40" delay={0.6} />
      <ElegantShape className="bottom-20 right-1/3 w-28 h-28" delay={0.8} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold">
              {badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-white"
          >
            {title1}
            <br />
            <span className="text-accent">{title2}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            We deliver turnkey construction, EPC electrical substations, HVAC & mechanical systems,
            fire protection, and full MEP maintenance — on time and to the highest international standards.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export { HeroGeometric };
