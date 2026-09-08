"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { differentiators, differentiatorsSection } from "@/content/differentiators";
import WordReveal from "@/components/motion/WordReveal";

export default function Differentiators() {
  return (
    <section id="why-choose-us" className="scroll-mt-28 bg-white px-6 py-20 text-ink md:px-16">
      <div className="container">
        <p className="eyebrow mb-5" style={{ color: "#38bdf8" }}>
          {differentiatorsSection.eyebrow}
        </p>
        <div className="mb-12 max-w-3xl">
          <h2 className="mb-5 whitespace-nowrap font-display text-4xl font-bold leading-[1.1] md:text-5xl">
            <WordReveal text={differentiatorsSection.title} />
          </h2>
          <p className="text-lg leading-relaxed text-ink/65">{differentiatorsSection.description}</p>
        </div>

        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {differentiators.map((item) => (
            <a
              key={item.n}
              href="#contact"
              className="differentiator-row group flex flex-col gap-4 py-6 transition-colors hover:bg-lightgray/60 sm:flex-row sm:items-center sm:gap-6"
            >
              <span className="font-mono text-xl text-deepblue/70 md:text-2xl">{item.n}</span>
              <div className="min-w-0 flex-1">
                <h3 className="mb-1 font-display text-lg font-semibold text-ink md:text-xl">{item.title}</h3>
                <p className="max-w-2xl text-sm leading-relaxed text-ink/55 md:text-base">{item.body}</p>
                <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">{item.narrative}</p>
                  </div>
                </div>
              </div>
              <div className="relative hidden h-16 w-28 shrink-0 overflow-hidden rounded-xl sm:block">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="8rem"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-ink/30 transition-transform group-hover:translate-x-1 group-hover:text-deepblue" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
