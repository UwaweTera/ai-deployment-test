export const site = {
  name: "Shipline",
  description:
    "A test of an automated workflow that takes a Next.js app from an empty folder to a verified production deployment.",
  repoUrl: "https://github.com/UwaweTera/ai-deployment-test",
};

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pipeline", href: "#pipeline" },
];

export const pipelineSteps = [
  { label: "Scaffold Next.js app", detail: "TypeScript, Tailwind, App Router" },
  { label: "Install and build", detail: "Errors fixed before commit" },
  { label: "Push to GitHub", detail: "Public repository" },
  { label: "Deploy to Vercel", detail: "Production target" },
  { label: "Verify live URL", detail: "Checked over HTTP" },
];

export const features = [
  {
    index: "01",
    title: "Typed from the first file",
    description:
      "Strict TypeScript and the App Router give the project a dependable structure from the initial commit.",
  },
  {
    index: "02",
    title: "Responsive by default",
    description:
      "Tailwind CSS layouts adapt from small phones to wide desktops, with no separate mobile styles to maintain.",
  },
  {
    index: "03",
    title: "Built before it ships",
    description:
      "The production build has to pass locally before any code reaches the repository.",
  },
  {
    index: "04",
    title: "Git as the source of truth",
    description:
      "The complete project lives in a public GitHub repository, so every change can be traced.",
  },
  {
    index: "05",
    title: "Deploys on push",
    description:
      "The linked Vercel project builds from the main branch and publishes straight to production.",
  },
  {
    index: "06",
    title: "Verified, not assumed",
    description:
      "A deployment only counts once its status is ready and the live URL serves this page.",
  },
];
