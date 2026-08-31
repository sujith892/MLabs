export interface EngagementModel {
  title: string;
  body: string;
}

export const engagementModelsSection = {
  eyebrow: "Who we are",
  title: "A smarter delivery model, not a cheaper one",
  description:
    "MField Labs runs on an integrated global delivery model. Senior strategy and client leadership are based in the US. Delivery is powered by an experienced team with a global footprint. This isn't outsourcing to cut corners, it's a more efficient way to deliver senior-level work. You get sophisticated capability without paying for the overhead structure of a traditional large firm. The economics are a result of a smarter model, not of the work being worth less.",
};

export const companyExperience = {
  title: "The company is new. The experience behind it isn't.",
  body: "MField Labs is a new company, founded in 2026. The people behind it aren't new to this work. [X] years of combined experience in consulting and technology, including [Big Four firm / other named firms, only if you're comfortable naming them], across [industries served]. [Add anything else true and substantiated: certifications, scale of programs, geographies served.]",
};

export const reasonsToChoose = [
  "We build things your team can run without us. You won't be stuck depending on us forever.",
  "We give you one clear picture of your business, instead of scattered reports that don't agree with each other.",
  "We connect your data, your people, and your day-to-day work so things flow instead of getting stuck.",
  "We use AI to save your team time, not to replace your team's judgment.",
  "We build things that can grow and change with your business, not a fix that breaks the moment something changes.",
];

export const engagementModels: EngagementModel[] = [
  {
    title: "Velocity Sprint",
    body: "A short, focused project that shows results in four to six weeks. The recommended first step if you haven't worked with us yet.",
  },
  {
    title: "Transformation Partnership",
    body: "A longer engagement for bigger changes across your business.",
  },
  {
    title: "Innovation Studio",
    body: "An ongoing partnership to test and build new ideas together.",
  },
  {
    title: "Managed Intelligence",
    body: "Ongoing support after the initial work is done, so your systems keep running and improving.",
  },
];
