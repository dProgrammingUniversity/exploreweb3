// /components/Hero/HeroSolana.tsx
"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSolana = () => {
  const controls = useAnimation();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      x: [0, 10, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    controls.start({
      y: [0, -10, 0],
      x: [0, 10, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* Full-width section */}
          <div className="flex justify-center">
            <div className="animate_right w-full lg:block">
              <div className="relative 2xl:-mr-7.5">
                <motion.div
                  className="relative aspect-[700/444] w-full"
                  initial={{ y: 0, rotate: 0 }}
                  animate={controls}
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{ overflow: "hidden", background: "transparent" }} // Ensure the container is transparent
                >
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/ExploreSolana-Banner-03a2-Website-Banner-Light-Transparent-bg.png"
                    alt="Solana Ecosystem Map"
                    layout="fill"
                    objectFit="contain"
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/ExploreSolana-Banner-03a2-Website-Banner-Light-Transparent-bg.png"
                    alt="Solana Ecosystem Map"
                    layout="fill"
                    objectFit="contain"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSolana;
