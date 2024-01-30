const certificates = [
  {
    id: 1,
    img: "assets/certificates/html_certificate.png",
    title: "HTML Essential Training Certificate",
    description: "Issued by LinkedIn Learning",
  },
  {
    id: 2,
    img: "assets/certificates/js_certificate.jpg",
    title: "JavaScript Essential Training Certificate",
    description: "Issued by LinkedIn Learning",
  },
  {
    id: 3,
    img: "assets/certificates/css_certificate.jpg",
    title: "CSS Essential Training Certificate",
    description: "Issued by LinkedIn Learning",
  },
  {
    id: 4,
    img: "assets/certificates/git_certificate.jpg",
    title: "Git Essential Training Certificate",
    description: "Issued by LinkedIn Learning",
  },
  {
    id: 5,
    img: "assets/certificates/node_certificate.jpg",
    title: "NodeJS Essential Training Certificate",
    description: "Issued by LinkedIn Learning",
  },
  {
    id: 6,
    img: "assets/certificates/react_certificate.jpg",
    title: "ReactJS Essential Training Certificate",
    description: "Issued by LinkedIn Learning",
  },
  {
    id: 7,
    img: "assets/certificates/rest_api_certificate.jpg",
    title: "REST API Essential Training Certificate",
    description: "Issued by LinkedIn Learning",
  },
  {
    id: 8,
    img: "assets/certificates/sql_certificate.jpg",
    title: "HTML Essential Training Certificate",
    description: "Issued by LinkedIn Learning",
  },
  {
    id: 9,
    img: "assets/certificates/nosql_certificate.jpg",
    title: "NoSQL Essential Training Certificate",
    description: "Issued by LinkedIn Learning",
  },
];

(function renderCertificateCards() {
  const certificateSection = document.getElementById("certificate-list");

  certificateSection.innerHTML += certificates
    .map(
      (certificate) => `
      <div class="certificate_card">
        <img src="${certificate.img}" alt="" />
        <div class="content">
          <a href="#" target="_blank">${certificate.title}</a>
          <p class="">${certificate.description}</p>
        </div>
      </div>
  `
    )
    .join("");
})();
