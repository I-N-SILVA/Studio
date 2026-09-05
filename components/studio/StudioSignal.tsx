"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import BrandMark from "@/components/brand/BrandMark";
import { useBrandMotion } from "@/components/brand/BrandMotion";
import styles from "./StudioSignal.module.css";

const stops = ["Work", "Process", "About", "Contact"];

export default function StudioSignal() {
  const { scrollYProgress } = useScroll();
  const { enabled } = useBrandMotion();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.25,
  });

  return (
    <aside className={styles.signal} aria-hidden="true">
      <div className={styles.mark}><BrandMark size={26} /></div>
      <div className={styles.track}>
        <motion.span
          className={styles.progress}
          style={{ scaleY: enabled ? progress : scrollYProgress }}
        />
        {stops.map((stop) => <i key={stop} title={stop} />)}
      </div>
      <span className={styles.label}>Signal / live</span>
    </aside>
  );
}
