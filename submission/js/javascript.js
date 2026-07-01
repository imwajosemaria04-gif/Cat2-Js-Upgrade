const programs = [
    {
        name: "Personal Training",
        description: "1-on-1 coaching tailored for fast results."
    },
    {
        name: "Fat Loss",
        description: "Science-based systems that actually work."
    },
    {
        name: "Muscle Gain",
        description: "Build strength, size, and confidence."
    },
    {
        name: "Online Coaching",
        description: "Train anywhere with expert guidance."
    }
];

const programsContainer = document.getElementById("programsContainer");

programs.forEach(program => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardTitle = document.createElement("h3");
    cardTitle.textContent = program.name;

    const cardDescription = document.createElement("p");
    cardDescription.textContent = program.description;

    card.appendChild(cardTitle);
    card.appendChild(cardDescription);

    programsContainer.appendChild(card);
});
const cardTitle = document.createElement("h3");
const cardTitle.textContent = program.name;

const cardDescription = document.createElement("p");
cardDescription.textContent = program.description;

card.appendChild(cardTitle);
card.appendChild(cardDescription);


