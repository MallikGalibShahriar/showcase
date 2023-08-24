const projects = [
  {
    title: "Ayat",
    imageUrl:
      "https://img.freepik.com/premium-photo/alazeez-is-name-allah-99-names-allah-alasma-alhusna-arabic-islamic-calligraphy-art-canvas_759200-101.jpg?w=2000",
    description: `Discover the profound teachings of the Quran in a modern digital experience. With each click on our app, you'll instantly receive a new English translation of a Quranic verse. Immerse yourself in the timeless wisdom and guidance of the Quran, one verse at a time. Let the simplicity of a click open doors to reflection and enlightenment as you explore the depths of the Quran's message. Your journey to a deeper understanding begins with every click.`,
    url: "https://mallikgalibshahriar.github.io/ayat/",
  },
  {
    title: "Fast Reader",
    imageUrl: "https://i.ytimg.com/vi/aEVjOYDX1U4/maxresdefault.jpg",
    description: `Your gateway to a more calming and effortless reading experience. Input your text, and watch as it's magically transformed into a soothing format, designed to help you read faster and with greater comfort. Our innovative processing technique optimizes the text's layout, font, and spacing, ensuring that every word flows harmoniously. Whether it's articles, notes, or even spiritual verses, let EaseRead be your companion in effortlessly absorbing content, providing you with the tranquility and efficiency you seek in every read.`,
    url: "https://mallikgalibshahriar.github.io/fastreader/",
  },
  {
    title: "Rock-Paper-Scissors",
    imageUrl: "https://cdn.firespring.com/images/619078c5-7a66-4e5f-98c8-fb5211a1374a.png",
    description: `Engage in the ultimate showdown of wits with the Rock-Paper-Scissors game featuring Galib, the mastermind behind the game! Take on the challenge of outsmarting Galib as you choose between rock, paper, and scissors. Will you be able to predict his moves and claim victory? Prepare for an exhilarating experience where rock blunts scissors, paper covers rock, and scissors slice through paper. Challenge Galib, the in-game developer, and prove that you have what it takes to conquer this classic game. Step into the arena, make your choice, and show off your strategic prowess in this battle of choices!`,
    url: "https://mallikgalibshahriar.github.io/rock-paper-scissors/",
  }
];

function generateProjectTiles() {
  const projectsContainer = document.getElementById("projects");

  projects.forEach((project) => {
    const projectTile = document.createElement("a");
    projectTile.className = "project-tile";
    projectTile.href = project.url;
    projectTile.target = "_blank";

    const image = document.createElement("img");
    image.src = project.imageUrl;
    image.alt = `${project.title} Image`;
    image.className = "project-image";

    const title = document.createElement("h2");
    title.textContent = project.title;
    title.className = "project-title";

    const description = document.createElement("p");
    description.textContent = project.description;
    description.className = "project-description";

    projectTile.appendChild(image);
    projectTile.appendChild(title);
    projectTile.appendChild(description);

    projectsContainer.appendChild(projectTile);
  });
}

document.addEventListener("DOMContentLoaded", generateProjectTiles);