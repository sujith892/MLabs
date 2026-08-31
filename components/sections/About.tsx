"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { about } from "@/content/about";
import WordReveal from "@/components/motion/WordReveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-ink/10 bg-white px-6 pb-28 pt-16 md:px-16 md:pt-20">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-8"
        >
          {about.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 max-w-md border-l-2 border-deepblue pl-5 font-display text-3xl font-bold leading-[1.2] text-ink md:text-4xl"
        >
          <WordReveal text={about.title} />
        </motion.h2>

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex h-full w-full flex-col pb-12"
          >
            <div className="relative min-h-[22rem] flex-1 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_18px_50px_rgba(17,24,39,0.10)] lg:min-h-0">
              <Image
                src="/logo/About Mfieldlabs.png"
                alt="Mfieldlabs technology solutions consultation"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-deepblue/10" />
            </div>
            <div className="absolute bottom-0 left-6 h-16 w-56 rounded-xl bg-white px-4 py-2 shadow-[0_10px_30px_rgba(17,24,39,0.14)] md:left-8 md:h-20 md:w-64 md:px-5 md:py-3">
              <Image
                src="/logo/Logo+field-png.png"
                alt="Mfieldlabs"
                fill
                sizes="16rem"
                className="object-contain object-left"
              />
            </div>
          </motion.div>

          <div className="lg:-mt-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex max-w-4xl flex-col items-start gap-6 border-y border-ink/10 py-7 md:py-8"
            >
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="whitespace-pre-line text-base leading-[1.75] text-ink/70 md:text-lg"
            >
              {about.problem}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="whitespace-pre-line text-base leading-[1.75] text-ink/70 md:text-lg"
            >
              {about.solution}
            </motion.p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
