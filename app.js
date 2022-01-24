const projects = [
  {
    name: "Hangman Game",
    src: "./images/hangman.JPG",
    alt: "Hangman Game",
    link: "https://hangman-game-coral.vercel.app/",
  },
  {
    name: "Fitness App",
    src: "./images/fitapp.JPG",
    alt: "Fitness App",
    link: "https://workout-website.vercel.app/",
  },
  {
    name: "AMV Designs",
    src: "./images/amvdesigns.JPG",
    alt: "AMV Designs",
    link: "https://amvdesigns.net/",
  },
  {
    name: "Meditation App",
    src: "./images/meditation-app.JPG",
    alt: "Meditation App",
    link: "https://meditation-app-theta.vercel.app/",
  },
  {
    name: "Simon",
    src: "./images/simon.JPG",
    alt: "Simon",
    link: "https://simon-game-pi.vercel.app/",
  },
];

const projectsContainer = document.querySelector(".projects-container");

projects.forEach(function (project) {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  projectCard.innerHTML = `
    <div class="project-image-container">
              <img
                class="project-image"
                src=${project.src}
                alt=${project.alt}
              />
            </div>
            <div class="project-content">
              <a href=${project.link}>${project.name}</a>
            </div>
    `;
  projectsContainer.appendChild(projectCard);
});
