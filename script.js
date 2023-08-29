const projects = [
  {
    title: "Ayat",
    imageUrl:
      "https://img.freepik.com/premium-photo/alazeez-is-name-allah-99-names-allah-alasma-alhusna-arabic-islamic-calligraphy-art-canvas_759200-101.jpg?w=2000",
    description: `📚 Discover the profound teachings of the Quran in a modern digital experience. With each click on our app, you'll instantly receive a new English translation of a Quranic verse. 🌟 Immerse yourself in the timeless wisdom and guidance of the Quran, one verse at a time. 🚪 Let the simplicity of a click open doors to reflection and enlightenment as you explore the depths of the Quran's message. ✨ Your journey to a deeper understanding begins with every click. 🌌`,
    url: "https://mallikgalibshahriar.github.io/ayat/",
  },
  {
    title: "Fast Reader",
    imageUrl: "https://i.ytimg.com/vi/aEVjOYDX1U4/maxresdefault.jpg",
    description: `🌟 Your gateway to a more calming and effortless reading experience. 📜 Input your text, and watch as it's magically transformed into a soothing format, designed to help you read faster and with greater comfort. ✨ Our innovative processing technique optimizes the text's layout, font, and spacing, ensuring that every word flows harmoniously. 🌈 Whether it's articles, notes, or even spiritual verses, let EaseRead be your companion in effortlessly absorbing content, providing you with the tranquility and efficiency you seek in every read. 📖🍃`,
    url: "https://mallikgalibshahriar.github.io/fastreader/",
  },
  {
    title: "Rock-Paper-Scissors",
    imageUrl: "https://media.istockphoto.com/id/1395632555/vector/colorful-hand-icon-set.jpg?s=612x612&w=0&k=20&c=g6r4Oms6euKipRCjlwLx-8MPs1pajjnP4_aK0r6HEeo=",
    description: `🎮 Engage in the ultimate showdown of wits with the Rock-Paper-Scissors game featuring Galib, the mastermind behind the game! 🧠💥 Take on the challenge of outsmarting Galib as you choose between rock, paper, and scissors. 🥋📄✂️ Will you be able to predict his moves and claim victory? 🏆 Prepare for an exhilarating experience where rock blunts scissors, paper covers rock, and scissors slice through paper. ⚡ Challenge Galib, the in-game developer, and prove that you have what it takes to conquer this classic game. 🤝 Step into the arena, make your choice, and show off your strategic prowess in this battle of choices! 🤔👊`,
    url: "https://mallikgalibshahriar.github.io/rock-paper-scissors/",
  },
  {
    title: "CLickJacking Demo (Safe✅)",
    imageUrl: "https://www.primaryguard.com/wp-content/uploads/2021/06/Banner.jpg",
    description: `⚠️ Clickjacking is a type of cyber attack where a malicious website or element tricks you into clicking on something different from what you actually see. 👁️‍🗨️ It's like someone hiding a button behind a picture, and when you try to click on the picture, you're actually clicking the hidden button. 🕶️ This can be used to make you unintentionally perform actions like sharing sensitive information, liking a post, or even giving access to your device. 🔐 It's important to be cautious and only click on things from sources you trust. 🛡️🔒`,
    url: "https://mallikgalibshahriar.github.io/clickjacking/",
  },
  {
    title: "CGPA Calculator",
    imageUrl: "https://www.edmissions.com/media/upload/blog/205054.20cgpa20to20percentage.png",
    description: `Introducing my cool CGPA Calculator project! 🎓🧮 Tired of scratching your head to figure out your CGPA? Say goodbye to manual calculations! With this nifty tool, you just punch in your subject name, credit hours, and grade points – and voila! 🚀📚 Watch as the magic happens, and your CGPA pops up on the screen. No more late-night grade crunching. Whether it's A's or B's, this calculator's got your back in decoding your academic journey! 🎉📊`,
    url: "https://mallikgalibshahriar.github.io/cgpa_calculator/",
  },
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
function showThankYouMessage() {
  const amountInput = document.getElementById("amount");
  const donationAmount = parseFloat(amountInput.value);

  if (!isNaN(donationAmount) && donationAmount > 0) {
    document.querySelector(".donation-form").style.display = "none";
    document.querySelector(".thank-you").style.display = "block";
  }
}
document.getElementById("send-button").addEventListener("click", showThankYouMessage);
