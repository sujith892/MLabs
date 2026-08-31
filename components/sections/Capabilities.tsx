"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Database, Workflow, LayoutPanelLeft, Sparkles } from "lucide-react";
import { capabilities, capabilitiesSection, type CapabilityIcon } from "@/content/capabilities";
import CapabilityModal from "@/components/ui/CapabilityModal";
import { gsap, useGSAP } from "@/lib/gsap";

const ICONS: Record<CapabilityIcon, typeof Database> = {
  database: Database,
  workflow: Workflow,
  layout: LayoutPanelLeft,
  sparkles: Sparkles,
};

export default function Capabilities() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const active = openIndex !== null ? capabilities[openIndex] : null;
  const ActiveIcon = active ? ICONS[active.icon] : null;

  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1280px) and (prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".capability-card");
        if (!cards.length) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=130%",
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, i) => {
          tl.to(card, { x: 0, opacity: 1, ease: "power2.out", duration: 0.6 }, i * 0.32);
        });

        return () => {
          gsap.set(cards, { clearProps: "transform,opacity" });
        };
      });
      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="services"
      ref={sectionRef}
      className="scroll-mt-28 overflow-hidden bg-white px-6 py-20 md:px-16 xl:py-8"
    >
      <div className="container">
        <div className="mb-10 max-w-2xl xl:mb-6">
          <p className="eyebrow mb-5">{capabilitiesSection.eyebrow}</p>
        </div>
      </div>

      <div className="container mb-6 xl:mb-3">
        <div className="h-px w-full bg-sky" />
      </div>

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 pt-2 xl:justify-center xl:gap-4 xl:overflow-visible xl:pb-2 xl:pt-0 xl:snap-none">
        {capabilities.map((c, i) => {
          const Icon = ICONS[c.icon];
          return (
            <div key={c.n} className="capability-card flex shrink-0 snap-start">
              <motion.button
                type="button"
                onClick={() => setOpenIndex(i)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group flex h-[300px] w-[280px] flex-col rounded-[20px] border border-ink/10 bg-white p-6 text-left text-ink shadow-[0_18px_50px_rgba(17,24,39,0.08)] transition-shadow duration-300 hover:shadow-[0_28px_70px_rgba(10,102,255,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky md:w-[300px] xl:h-[260px] xl:w-[320px] xl:p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold leading-tight xl:text-lg">{c.title}</h3>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-deepblue/15 bg-deepblue/5 text-deepblue">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                <div className="mt-5 border-t border-ink/10 pt-5">
                  <ul className="space-y-2">
                    {c.impactAreas.map((area) => (
                      <li key={area} className="flex items-start gap-2 text-[11px] leading-snug text-ink/70">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky" aria-hidden="true" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-ink/10 pt-5">
                  <span className="text-xs font-semibold text-ink/70">Explore</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/20 transition-colors group-hover:border-deepblue group-hover:bg-deepblue group-hover:text-white">
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </motion.button>
            </div>
          );
        })}
      </div>

      <div className="container mt-4 grid gap-10 border-t border-ink/10 pt-10 xl:mt-3 xl:grid-cols-[0.8fr_1.2fr] xl:gap-16 xl:pt-12">
        <div className="relative -top-8 max-w-xl border-l-2 border-sky pl-5">
          <p className="eyebrow mb-4 text-deepblue">The Opportunity</p>
          <h3 className="font-display text-2xl font-bold leading-tight text-ink">What would it mean if...</h3>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink/75">
            <li className="flex gap-3"><span className="font-display font-bold text-sky">01</span><span>Reporting went from days to real time?</span></li>
            <li className="flex gap-3"><span className="font-display font-bold text-sky">02</span><span>Hundreds of hours of manual work a month simply went away?</span></li>
            <li className="flex gap-3"><span className="font-display font-bold text-sky">03</span><span>A six-week project uncovered real, ongoing savings?</span></li>
            <li className="flex gap-3"><span className="font-display font-bold text-sky">04</span><span>You could add capability without adding headcount?</span></li>
          </ul>
          <p className="mt-4 border-t border-ink/10 pt-4 text-sm leading-relaxed text-ink/70">
            That&apos;s the conversation worth having before &quot;what does this cost.&quot; The real question is what the
            problem is already costing you.
          </p>
        </div>

        <div className="relative -top-8 border-l-2 border-deepblue pl-5 xl:justify-self-end">
          <p className="eyebrow mb-4 text-deepblue">A Practical First Step</p>
          <h3 className="font-display text-2xl font-bold leading-tight text-ink">
            Start small. Prove value. Scale what works.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">
            Committing to a big engagement with a new firm is a real leap. So don&apos;t. Start with a Velocity Sprint,
            a tightly scoped project that solves one important problem in four to six weeks and shows results before
            you commit to anything larger.
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink/75">
            <li className="border-l border-sky pl-4">
              <strong className="font-semibold text-ink">Executive Intelligence Sprint</strong> - Give leadership
              reliable, real-time visibility into the business.
            </li>
            <li className="border-l border-sky pl-4">
              <strong className="font-semibold text-ink">Automation Sprint</strong> - Find and automate the most
              expensive repetitive process in your operation.
            </li>
            <li className="border-l border-sky pl-4">
              <strong className="font-semibold text-ink">AI Opportunity Sprint</strong> - Identify the highest-value
              practical use of AI in your business, and implement one.
            </li>
          </ul>
          <p className="mt-4 border-t border-ink/10 pt-4 text-sm leading-relaxed text-ink/70">
            Each one produces something real. You see the value before you decide what comes next.
          </p>
        </div>
      </div>

      {active && ActiveIcon ? (
        <CapabilityModal
          open={openIndex !== null}
          onClose={() => setOpenIndex(null)}
          icon={ActiveIcon}
          title={active.title}
          tagline={active.tagline}
          body={active.body}
          impactAreas={active.impactAreas}
          outcomes={active.outcomes}
          image={active.image}
        />
      ) : null}
    </section>
  );
}
