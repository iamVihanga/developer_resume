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
    title: "Collaborative Working",
    description:
      "Skills in using collaborative tools like Notions, ZenHub etc.",
    icon: "<i class='bx bxs-group' ></i>"
  },
  {
    id: 1,
    title: "Communication",
    description: "Ability to work with english and handlling the accent",
    icon: "<i class='bx bxs-user-voice'></i>"
  },
  {
    id: 1,
    title: "Managed Workflow",
    description: "Well management is a key specification of my tasks",
    icon: "<i class='bx bx-calendar-check'></i>"
  },
  {
    id: 1,
    title: "Quality Outcome",
    description: "My main target is 100% client satifaction from the outcome",
    icon: "<i class='bx bxs-heart' ></i>"
  }
];

(function renderPersonalSkills() {
  const personalSkillSection = document.getElementById("personal-skills-area");

  personalSkillSection.innerHTML += personal_skills
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

const freelancing_journey = [
  {
    id: 1,
    company: "Fiverr .inc",
    position: "Full Stack Web Developer",
    years: "2019 - 2022",
    description:
      "I have worked with several projects as a Individual freelancer at fiverr.",
    link: "https://www.fiverr.com/users/iamvihangasilva",
    logo: "fiverr.svg"
  },
  {
    id: 2,
    company: "Duber LTD",
    position: "Full Stack Web Developer",
    years: "2022 - 2023",
    description:
      "I joined with Duber LTD UK based startup company as a freelance developer. I have manage 2 Web Applications and 3+ Backend services related to company products",
    link: "https://duber.uk",
    logo: "duber.svg"
  },
  {
    id: 3,
    company: "Duber LTD",
    position: "Technical Head",
    years: "2023 - 2024",
    description:
      "Duber is a drone pilot hiring online platform, Currently Im managing all technical related of Duber such like Cloud computing management,Backend and Frontend maintaince etc.",
    link: "https://duber.uk",
    logo: "duber.svg"
  }
];

(function renderFreelanceCard() {
  const freelanceSection = document.getElementById("freelance-area");

  freelanceSection.innerHTML += freelancing_journey
    .map(
      (item) => `
      <div class="freelance_card">
        <div class="row_1">
          <span class="years">${item.years}</span>
          <div id="dot"></div>
          <div class="content">
            <p class="position">${item.position}</p>
            <p class="company">${item.company}</p>
          </div>
        </div>

        <div class="right">
          <img src="assets/${item.logo}" alt="" />
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
    title: "JavaScript",
    icon: `<i class="bx bxl-javascript" style="color: #e7bd00"></i>`
  },
  {
    id: 1,
    title: "Python",
    icon: `<i class="bx bxl-python" style="color: #152864"></i>`
  },
  {
    id: 1,
    title: "TypeScript",
    icon: `<i class="bx bxl-typescript" style="color: #0061e0"></i>`
  },
  {
    id: 1,
    title: "GoLang",
    icon: `<i class="bx bxl-go-lang" style="color: #1c99ff"></i>`
  },
  {
    id: 1,
    title: "GraphQL",
    icon: `<i class="bx bxl-graphql" style="color: #d1009d"></i>`
  },
  {
    id: 1,
    title: "C / C++",
    icon: `<i class="bx bxl-c-plus-plus" style="color: #1400c9"></i>`
  }
];

(function renderFreelanceCard() {
  const languagesSection = document.getElementById(
    "programming-languages-area"
  );

  languagesSection.innerHTML += programming_language_data
    .map(
      (item) => `
      <div class="language_item">
        ${item.icon}
        <h2>${item.title}</h2>
      </div>
  `
    )
    .join("");
})();

// ---------------------------------------------------------

const frameworks = [
  {
    id: 1,
    title: "NodeJS",
    icon: `<i class='bx bxl-nodejs' style="color: #008628"></i>`
  },
  {
    id: 2,
    title: "ReactJS",
    icon: `<i class='bx bxl-react' style="color: #0078c9"></i>`
  },
  {
    id: 3,
    title: "TailwindCSS",
    icon: `<i class='bx bxl-tailwind-css' style="color: #27a9ff"></i>`
  },
  {
    id: 4,
    title: "MongoDB",
    icon: `<i class='bx bxl-mongodb' style="color: #008127"></i>`
  },
  {
    id: 6,
    title: "Docker",
    icon: `<i class='bx bxl-docker' style="color: #008ada"></i>`
  },
  {
    id: 5,
    title: "React Native",
    icon: `<i class='bx bxl-react' style="color: #0078c9"></i>`
  },
  {
    id: 7,
    title: "AWS",
    icon: `<i class='bx bxl-aws' style="color: #da6900"></i>`
  },
  {
    id: 8,
    title: "Git",
    icon: `<i class='bx bxl-git' style="color: #da2c00"></i>`
  },
  {
    id: 9,
    title: "Firebase",
    icon: `<i class='bx bxl-firebase' style="color: #ffc116"></i>`
  },
  {
    id: 10,
    title: "Django",
    icon: `<i class='bx bxl-django' style="color: #008341"></i>`
  },
  {
    id: 11,
    title: "Redux",
    icon: `<i class='bx bxl-redux' style="color: #830083"></i>`
  },
  {
    id: 12,
    title: "Sass CSS",
    icon: `<i class='bx bxl-sass' style="color: #ff00bf"></i>`
  }
];

(function renderFrameworkCard() {
  const frameworkSection = document.getElementById("frameworks-area");

  frameworkSection.innerHTML += frameworks
    .map(
      (item) => `
      <div class="language_item">
        ${item.icon}
        <h2>${item.title}</h2>
      </div>
  `
    )
    .join("");
})();
