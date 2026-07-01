const programs = [
  { name: "Personal Training", description: "1-on-1 coaching tailored for fast results." },
  { name: "Fat Loss", description: "Science-based systems that actually work." },
  { name: "Muscle Gain", description: "Build strength, size, and confidence." },
  { name: "Online Coaching", description: "Train anywhere with expert guidance." }
];

const container = document.getElementById("programs");

programs.forEach(program => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${program.name}</h3>
    <p>${program.description}</p>
  `;

  container.appendChild(card);
});
const goalInput = document.getElementById("goalInput");
const addGoalBtn = document.getElementById("addGoalBtn");
const goalList = document.getElementById("goalList");

addGoalBtn.addEventListener("click", function () {
    const goal = goalInput.value.trim();

    if (goal === "") {
        alert("Please enter a fitness goal.");
        return;
    }

    const goalItem = document.createElement("div");
    goalItem.classList.add("goal-item");

    const goalText = document.createElement("span");
    goalText.textContent = goal;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", function () {
        goalItem.remove();
    });

    goalItem.appendChild(goalText);
    goalItem.appendChild(removeBtn);
    goalList.appendChild(goalItem);

    goalInput.value = "";
});