export const siteConfig = {
  metadata: {
    title: "Abhinav Ganeshan's Portfolio",
    description:
      "Portfolio showcasing Abhinav Ganeshan's web development projects and experience.",
  },
  analytics: {
    googleAdsClient: "ca-pub-9007034455335797",
    googleAnalyticsId: "G-7Z2BVRYHGN",
  },
  integrations: {
    github: {
      username: "Abh1noob",
    },
    hashnode: {
      graphqlEndpoint: "https://gql.hashnode.com",
      publicationHost: "abh1noob.hashnode.dev",
    },
  },
  ui: {
    searchTrigger: {
      label: "Search...",
      shortcut: "⌘K",
    },
    themeToggle: {
      srOnlyLabel: "Toggle theme",
      lightLabel: "Light",
      darkLabel: "Dark",
      systemLabel: "System",
    },
    startupToast: {
      mobileMaxWidth: 768,
      delayMs: 1000,
      macShortcut: "⌘K",
      defaultShortcut: "Ctrl+K",
      messageTemplate: "Press {shortcut} to quickly navigate anywhere on this site",
    },
    commandMenu: {
      mobileShortcutLabel: "⌘K",
      inputPlaceholder: "Type a command or search...",
      emptyText: "No results found.",
      headings: {
        pages: "Pages",
        social: "Social",
        theme: "Theme",
      },
      pages: {
        overview: "Overview",
        projects: "Projects",
        work: "Work & Experience",
        articles: "Articles",
        education: "Education",
        technicalStack: "Skills & Technologies",
        resume: "Resume",
      },
      social: {
        github: "GitHub",
        linkedin: "LinkedIn",
        copyEmail: "Copy Email",
        copyEmailToast: "Email copied to clipboard",
      },
      shortcuts: {
        copyEmail: "⌘C",
      },
    },
    breadcrumbs: {
      home: "Home",
      projects: "Projects",
      work: "Work Timeline",
      education: "Education",
      technicalStack: "Skills & Technologies",
      articles: "Articles",
      certificateSuffix: "Certificate",
    },
    projectNav: {
      groupLabel: "Projects",
      moreSrOnly: "More",
      viewProject: "View Project",
      shareProject: "Share Project",
      deleteProject: "Delete Project",
      moreLabel: "More",
    },
    dateLocale: "en-US",
  },
  resume: {
    pdfFileName: "Abhinav-Resume.pdf",
    fetchErrorMessage: "Failed to fetch PDF",
  },
  apiText: {
    githubStats: {
      generatedFrom: "generated from abhinavganeshan.in",
      fallbackMessage: "stats are taking a nap - check back soon",
    },
  },
};
