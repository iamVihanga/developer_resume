const skills_data = [
  {
    id: 1,
    name: "Backend Engineering",
    precentage: 90
  },
  {
    id: 2,
    name: "Frontend Development / UI",
    precentage: 90
  },
  {
    id: 3,
    name: "Database Administration",
    precentage: 90
  },
  {
    id: 5,
    name: "AI Integrated Dev.",
    precentage: 80
  },
  {
    id: 4,
    name: "Cloud Native & DevOps",
    precentage: 60
  },
  {
    id: 5,
    name: "ERP/POS Development",
    precentage: 60
  },
  {
    id: 6,
    name: "Mobile Development",
    precentage: 70
  }
];

(function renderTechSkills() {
  const techSkillsDiv = document.getElementById("tech-skills");

  techSkillsDiv.innerHTML += skills_data
    .map(
      (skill) => `
    <div class="skill_item">
      <small>${skill.name}</small>
      <div class="bar">
        <div class="precentage" style="width: ${skill.precentage}%"></div>
      </div>
    </div>
  `
    )
    .join("");
})();

// ---------------------------------------------------------

const education_shortList = [
  {
    id: 1,
    title: "GCE Ordinary Level",
    years: "2018 - 2019",
    institute: "Sri Lanka"
  },
  {
    id: 2,
    title: "GCE Advanced Level",
    years: "2021 - 2022",
    institute: "Sri Lanka"
  },
  {
    id: 3,
    title: "BIT (External)",
    years: "2025 - Current",
    institute: "University of Colombo"
  }
];

(function renderTechSkills() {
  const educationSection = document.getElementById("education-section");

  educationSection.innerHTML += education_shortList
    .map(
      (edu) => `
      <div class="education_item">
      <h2 class="education_title">
        ${edu.title}
        <span>${edu.years}</span>
      </h2>

      <p>${edu.institute}</p>
    </div>
  `
    )
    .join("");
})();

// ---------------------------------------------------------

const work_experience_shortList = [
  {
    id: 1,
    company: "Duber LTD",
    role: "Full Stack Developer / Technical Head",
    years: "Sept. 2022 - 2024",
    description:
      "I got remote job from Duber.UK (ltd) a  Drone Pilot Company - in 2022. I worked as Full Stack Web & Mobile Developer and DevOps Engineer"
  },
  {
    id: 2,
    company: "ServerClub",
    role: "Intern Web Developer",
    years: "July - Oct 2024",
    description:
      "I worked as a Intern Web Developer at ServerClub (Sri Lanka) fir 3 months period. Developed WHMCS Integrated Management Portal for Internal Operations."
  },
  {
    id: 3,
    company: "DONEXT Ltd.",
    role: "Lead Software Developer",
    years: "Oct 2024 - 2025",
    description:
      "Managed a team of developers to deliver high-quality software solutions, Designed system architecture and oversaw code quality and best practices."
  }
];

(function renderTechSkills() {
  const expSection = document.getElementById("work-exp-section");

  expSection.innerHTML += work_experience_shortList
    .map(
      (work) => `
      <div class="work_exp_item">
        <h2>${work.company} <span>${work.years}</span></h2>

        <h5>${work.role}</h5>
        <p class="description">${work.description}</p>
      </div>
  `
    )
    .join("");
})();

// ---------------------------------------------------------

const personal_skills = [
  {
    id: 1,
    title: "Full Stack Development",
    description:
      "End-to-end application development from UI to database architecture",
    icon: "<i class='bx bx-code-alt'></i>"
  },
  {
    id: 2,
    title: "System Architecture",
    description: "Designing scalable, maintainable software architectures",
    icon: "<i class='bx bx-sitemap'></i>"
  },
  {
    id: 3,
    title: "API Development",
    description: "RESTful & GraphQL APIs with best practices and documentation",
    icon: "<i class='bx bx-transfer'></i>"
  },
  {
    id: 4,
    title: "Agile & Collaboration",
    description: "Experience with Scrum, Git workflows, and team collaboration",
    icon: "<i class='bx bxs-group'></i>"
  },
  {
    id: 5,
    title: "Cloud & DevOps",
    description: "CI/CD pipelines, containerization, and cloud deployments",
    icon: "<i class='bx bx-cloud'></i>"
  },
  {
    id: 6,
    title: "Problem Solving",
    description: "Analytical thinking with focus on clean, efficient solutions",
    icon: "<i class='bx bx-bulb'></i>"
  }
];

(function renderPersonalSkills() {
  const personalSkillSection = document.getElementById("personal-skills-area");
  if (!personalSkillSection) return;

  personalSkillSection.innerHTML = personal_skills
    .map(
      (skill) => `
      <div class="card">
        <span class="icon">${skill.icon}</span>

        <div class="content">
          <h2>${skill.title}</h2>
          <h5>${skill.description}</h5>
        </div>
      </div>
  `
    )
    .join("");
})();

// ---------------------------------------------------------

const programming_language_data = [
  {
    id: 1,
    title: "TypeScript",
    subtitle: "Primary",
    icon: "logos:typescript-icon",
    width: 32
  },
  {
    id: 2,
    title: "Python",
    subtitle: "Secondary",
    icon: "logos:python",
    width: 32
  },
  {
    id: 3,
    title: "Go Lang",
    subtitle: "Learning",
    icon: "logos:go",
    width: 32
  }
];

(function renderProgrammingLanguages() {
  const languagesSection = document.getElementById(
    "programming-languages-area"
  );
  if (!languagesSection) return;

  languagesSection.innerHTML = programming_language_data
    .map(
      (item) => `
      <div class="language_item primary_lang">
        ${getIconSVG(item.icon, item.width, item.width)}
        <div class="lang_info">
          <h2>${item.title}</h2>
          <span>${item.subtitle}</span>
        </div>
      </div>
  `
    )
    .join("");
})();

// ---------------------------------------------------------

// Categorized Tech Stack
const tech_stack = {
  frontend: [
    { title: "Next.js", icon: "logos:nextjs-icon" },
    { title: "React.js", icon: "logos:react" },
    { title: "Astro", icon: "logos:astro-icon" },
    { title: "TailwindCSS", icon: "logos:tailwindcss-icon" },
    { title: "Tanstack", icon: "logos:react-query-icon" }
  ],
  backend: [
    { title: "Node.js", icon: "logos:nodejs-icon" },
    { title: "Hono", icon: "logos:hono" },
    { title: "NestJS", icon: "logos:nestjs" },
    { title: "Bun", icon: "logos:bun" },
    { title: "Cloudflare Wrangler", icon: "logos:cloudflare-icon" }
  ],
  database: [
    { title: "PostgreSQL", icon: "logos:postgresql" },
    { title: "MongoDB", icon: "logos:mongodb-icon" },
    {
      title: "Drizzle ORM",
      icon: "simple-icons:drizzle",
      style: "color: #c5f74f"
    },
    { title: "Prisma", icon: "logos:prisma" },
    { title: "Neon", icon: "logos:neon-icon" },
    { title: "Supabase", icon: "logos:supabase-icon" },
    { title: "Redis", icon: "logos:redis" },
    { title: "BetterAuth", icon: "simple-icons:betterauth" }
  ],
  ecommerce: [
    { title: "MedusaJS", icon: "simple-icons:medusa" },
    { title: "Stripe", icon: "bi:stripe", style: "color: #6a1dfa" },
    { title: "Odoo ERP", icon: "simple-icons:odoo", style: "color: #875a7b" },
    { title: "PayloadCMS", icon: "logos:payload" },
    { title: "Strapi", icon: "logos:strapi-icon" }
  ],
  cloud: [
    { title: "AWS", icon: "logos:aws" },
    { title: "Vercel", icon: "logos:vercel-icon" },
    { title: "Workers", icon: "logos:cloudflare-workers-icon" },
    { title: "Docker", icon: "logos:docker-icon" },
    { title: "Kubernetes", icon: "logos:kubernetes" }
  ],
  tools: [
    { title: "Git", icon: "logos:git-icon" },
    { title: "REST API", icon: "mdi:api", style: "color: #009688" },
    { title: "GraphQL", icon: "logos:graphql" },
    { title: "Turborepo", icon: "logos:turborepo-icon" },
    { title: "Shadcn UI", icon: "vscode-icons:file-type-light-shadcn" },
    { title: "PNPM", icon: "devicon:pnpm" },
    { title: "NPM", icon: "devicon:npm" },
    { title: "Sentry", icon: "skill-icons:sentry" },
    { title: "SocketIO", icon: "devicon:socketio" },
    { title: "Vitest", icon: "logos:vitest" },
    { title: "n8n", icon: "simple-icons:n8n", style: "color: #ff193f" }
  ]
};

(function renderTechStack() {
  const renderCategory = (elementId, items) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    element.innerHTML = items
      .map(
        (item) => `
        <div class="tech_item">
          ${getIconSVG(item.icon, 20, 20, item.style || "")}
          <span>${item.title}</span>
        </div>
      `
      )
      .join("");
  };

  renderCategory("frontend-stack", tech_stack.frontend);
  renderCategory("backend-stack", tech_stack.backend);
  renderCategory("database-stack", tech_stack.database);
  renderCategory("ecommerce-stack", tech_stack.ecommerce);
  renderCategory("cloud-stack", tech_stack.cloud);
  renderCategory("tools-stack", tech_stack.tools);
})();
