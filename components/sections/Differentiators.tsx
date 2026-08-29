"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { differentiatorsSection } from "@/content/differentiators";
import WordReveal from "@/components/motion/WordReveal";

export default function Differentiators() {
  const [isFamiliarOpen, setIsFamiliarOpen] = React.useState(false);

  return (
    <section id="why-choose-us" className="scroll-mt-28 bg-white px-6 py-20 text-ink md:px-16 xl:min-h-screen xl:py-12">
      <div className="container">
        <p className="eyebrow mb-5 text-deepblue">{differentiatorsSection.eyebrow}</p>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-7 max-w-xl font-display text-3xl font-bold leading-[1.15] md:text-4xl"><WordReveal text={differentiatorsSection.title} /></h2>
            <div className="space-y-6 text-sm leading-[1.45] text-ink/80 md:text-base">
              <p>{differentiatorsSection.introduction}</p>
              <p>{differentiatorsSection.challenge}</p>
              <p>{differentiatorsSection.approach}</p>
            </div>
            <div className="relative mt-7 aspect-[1.7/1] w-full overflow-hidden border border-ink/10 bg-sky/10">
              <Image src={differentiatorsSection.image} alt="Mfieldlabs consulting with a growing business" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="mt-8 border-t border-ink/10 pt-7">
              <h3 className="mb-2 font-display text-xl font-bold text-deepblue md:text-2xl">More Than Access To Talent</h3>
              <div className="space-y-5 text-sm leading-[1.45] text-ink/80 md:text-base">
                <p>{differentiatorsSection.introduction}</p>
                <p>{differentiatorsSection.challenge}</p>
                <p>{differentiatorsSection.approach}</p>
              </div>
            </div>
          </div>

          <div className="pt-8 lg:pt-14">
            <h3 className="text-right font-display text-2xl font-bold text-deepblue md:text-3xl">A Different Model, By Design</h3>
            <p className="mb-6 mt-3 max-w-xl text-right text-sm leading-relaxed text-ink/70 md:ml-auto md:text-base">
              We&apos;re not a smaller version of a big consulting firm, and we&apos;re not a cheaper alternative to one either. We were built for a different customer, with a different model.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <ComparisonCard title="Traditional big-firm consulting" items={differentiatorsSection.traditionalModel} />
              <ComparisonCard title="MField Labs" items={differentiatorsSection.mfieldModel} featured />
            </div>
            <div className="mt-6 flex items-center justify-between gap-5 rounded-2xl bg-deepblue px-7 py-6 text-white shadow-[0_12px_35px_rgba(10,102,255,0.2)]">
              <p className="max-w-sm font-display text-lg font-semibold italic leading-tight md:text-xl">If you&apos;re a growing business, our model was actually built with you in mind.</p>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/80"><ArrowRight className="h-5 w-5" aria-hidden="true" /></span>
            </div>
            <button type="button" onClick={() => setIsFamiliarOpen((open) => !open)} aria-expanded={isFamiliarOpen} className="mt-6 flex w-full items-center justify-between rounded-2xl bg-deepblue px-7 py-5 text-left text-white transition-colors hover:bg-deepblue/90">
              <span><strong className="block font-display text-lg md:text-xl">Sounds Familiar?</strong><span className="text-sm text-white/80">If any of these sound familiar, that&apos;s exactly what we work on.</span></span>
              <ChevronDown className={`h-7 w-7 shrink-0 transition-transform ${isFamiliarOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            {isFamiliarOpen ? <div className="ml-auto w-[calc(100%-1.5rem)] space-y-3 rounded-b-2xl bg-[#dce7ff] px-7 py-6 text-sm leading-relaxed text-ink/80 md:text-base">{differentiatorsSection.familiarStatements.map((statement) => <p key={statement}>“{statement}”</p>)}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonCard({ title, items, featured = false }: { title: string; items: string[]; featured?: boolean }) {
  return <div className={`min-h-[168px] rounded-2xl border p-5 shadow-[0_10px_30px_rgba(10,102,255,0.22)] ${featured ? "border-sky bg-deepblue text-white" : "border-sky/70 bg-white text-ink"}`}>
    <h4 className={`mb-5 font-display text-base font-bold ${featured ? "text-white" : "text-ink"}`}>{title}</h4>
    <ul className="space-y-3 text-[13px] leading-relaxed">{items.map((item) => <li key={item}>{item}</li>)}</ul>
  </div>;
}
