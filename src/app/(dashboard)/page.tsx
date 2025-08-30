import HeroSection from "./hero";
import QuickStartWidget from "./widgets/quick-stats";
import ExperienceTimelineWidget from "./widgets/experience-timeline";
import CurrentWorkWidget from "./widgets/current-work";
import ProjectsWidget from "./widgets/project";
import BlogPreviewWidget from "./widgets/blog-preview";
import SkillsProgressWidget from "./widgets/skill-progress";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto p-4 sm:p-6 md:p-8 max-w-7xl">
        <HeroSection />
        <QuickStartWidget />
        <CurrentWorkWidget />
        <ProjectsWidget />
        <div className="grid gap-8 lg:grid-cols-2">
          <ExperienceTimelineWidget />
          <div className="space-y-8">
            <SkillsProgressWidget />
            <BlogPreviewWidget />
          </div>
        </div>
      </main>
    </div>
  );
}
