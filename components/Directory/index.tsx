// /components/Directory/index.tsx
"use client";
import { motion } from "framer-motion";
import DirectoryPage from "./DirectoryPage";

const Directory = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex-col items-center gap-8 lg:gap-32.5">
            {/* DirectoryPage component */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left "
            >
              {/* Directory Page */}
              {/* <AnimatedTitle /> */}
              <DirectoryPage />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Directory;
