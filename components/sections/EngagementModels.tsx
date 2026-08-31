import { companyExperience, engagementModels, engagementModelsSection, reasonsToChoose } from "@/content/engagementModels";
import WordReveal from "@/components/motion/WordReveal";

export default function EngagementModels() {
  return (
    <section id="engagement-models" className="scroll-mt-28 bg-white px-6 py-16 md:px-16 xl:pb-28 xl:pt-12">
      
      <div className="container">
        <div className="xl:mb-5">
          <p className="eyebrow mb-3">{engagementModelsSection.eyebrow}</p>
          <h2 className="mb-3 font-display text-4xl font-bold leading-[1.1] text-ink xl:text-3xl">
            <WordReveal text={engagementModelsSection.title} />
          </h2>
          <p className="text-lg leading-relaxed text-ink/60 xl:text-sm">{engagementModelsSection.description}</p>
        </div>

        <div className="my-10 h-px w-full bg-sky xl:my-8" />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14 xl:gap-12">
          <div className="border-b border-ink/10 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
            <h3 className="font-display text-2xl font-bold leading-tight text-ink xl:text-2xl">{companyExperience.title}</h3>
            <p className="mt-5 text-sm leading-relaxed text-ink/65 xl:text-sm">{companyExperience.body}</p>
          </div>
          <div className="border-l-2 border-sky pl-5">
            <p className="eyebrow mb-5 text-deepblue">Why choose MField Labs</p>
            <ol className="space-y-3 text-sm leading-relaxed text-ink/75 xl:space-y-3 xl:text-sm">
              {reasonsToChoose.map((reason, index) => (
                <li key={reason} className="flex gap-3">
                  <span className="font-display font-bold text-sky">{String(index + 1).padStart(2, "0")}</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-12 xl:mt-10">
          <p className="eyebrow mb-4 text-deepblue xl:mb-3">How we work together</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-4">
          {engagementModels.map((m) => (
            <div
              key={m.title}
              className="flex h-[220px] flex-col rounded-2xl border border-ink/8 border-l-4 border-r-4 border-l-lightgray border-r-lightgray bg-white p-6 shadow-[0_1px_2px_rgba(17,24,39,0.04)] xl:h-[128px] xl:p-4"
            >
              <h3 className="mb-3 font-display text-lg font-semibold text-deepblue xl:mb-2 xl:text-sm">{m.title}</h3>
              <p className="overflow-y-auto text-sm leading-relaxed text-ink/60 xl:text-xs">{m.body}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
