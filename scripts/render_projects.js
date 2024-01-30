const projects = [
  {
    id: 1,
    title: "@Duber/Customer-Facing-App",
    description:
      "This repository contains customer facing web application of Duber.uk",
    repo_link: "https://github.com/Duberapp/Customer-Facing-App-v2",
    live_link: "https://duber.uk",
    thumbnail: "",
  },
  {
    id: 1,
    title: "@Duber/Pilot-Facing-App",
    description:
      "This repository contains drone pilot facing web application of pilot.duber.uk",
    repo_link: "https://github.com/Duberapp/Pilot-Facing-App-v2",
    live_link: "https://pilot.duber.uk",
    thumbnail: "",
  },
];

(function renderProjectCard() {
  const projectsArea = document.getElementById("projects-area");

  projectsArea.innerHTML += projects
    .map(
      (item) => `
        <div class="project_card">
          <div class="thumbnail">
            <img src="assets/duber.svg" alt="" />
          </div>

          <div class="content">
            <h2>${item.title}</h2>
            <p>
              ${item.description}
            </p>

            <div class="links">
              <a
                href="${item.repo_link}"
                target="_blank"
                ><i class="bx bxl-github"></i> View Repository</a
              >
              <a href="${item.live_link}" target="_blank"
                ><i class="bx bx-notification"></i> Live Preview</a
              >
            </div>
          </div>
        </div>
  `
    )
    .join("");
})();
