// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-about",
          title: "about",
          description: "a bit more about me. please feel free to drop me a message if i&#39;ve not spoken about myself enough here...",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order. if you cannot find the full text online, please email me and I will be happy to provide you with a copy.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-reflections-on-the-aedu-workshop",
      
        title: "Reflections on the AEDU workshop",
      
      description: "A recap of my talk at the ALife in Education (AEDU) workshop &amp; other thoughts.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/building-the-alifer-aedu-reflection/";
        
      },
    },{id: "post-new-workshop-paper-what-are-we-measuring-bonding-trust-and-human-robot-relationships",
      
        title: "New workshop paper: What Are We Measuring? Bonding, Trust, and Human–Robot Relationships",
      
      description: "An accepted paper at the H-STAR workshop (RO-MAN 2026) arguing that trust and social bonding are distinct constructs, and what that means for human-state-aware robotics.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/hstar-roman-workshop-paper/";
        
      },
    },{id: "post-talk-at-the-alife-education-virtual-workshop-aedu-may-2026",
      
        title: "Talk at the ALife Education Virtual Workshop (AEDU) — May 2026",
      
      description: "An abstract for my AEDU talk, &quot;Artificial Life Is Everywhere — So Why Is It So Hard to Teach?&quot;",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/aedu-talk-announcement/";
        
      },
    },{id: "post-humbled-to-receive-an-alife-2025-award",
      
        title: "Humbled to receive an ALIFE 2025 Award",
      
      description: "A few grateful words on receiving an ALIFE 2025 Award for services to the conference.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/alife-2025-award/";
        
      },
    },{id: "post-new-pre-print-social-allostasis-or-how-i-learned-to-stop-worrying-and-love-the-noise",
      
        title: "New pre-print: [Social] Allostasis: Or, How I Learned To Stop Worrying and Love...",
      
      description: "A new arXiv pre-print on allostatic and social allostatic regulation, to be presented at ALIFE 2025.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/social-allostasis-preprint/";
        
      },
    },{id: "post-societal-outreach-initiatives-for-artificial-life-workshop-at-alife2025-kyoto-japan",
      
        title: "Societal Outreach Initiatives for Artificial Life Workshop at ALIFE2025 (Kyoto, Japan)",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/alife-outreach-workshop/";
        
      },
    },{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
