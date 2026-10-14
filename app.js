const speciesName = "Californian Sea Lion";
let spotCount = 0;
spotCount = spotCount + 1;
console.log(speciesName);
console.log(spotCount);

const animals = [
  {
    name: "Californian Sea Lion",
    scientific: "Zalophus californianus",
    status: "LC",
    where: "California, Mexico, and the Galapagos Islands",
    facts: [
      "They can hold their breath for up to 10 minutes",
      "In the wild, they can live up to 30 years"
    ]
  },
  {
    name: "Vaquita",
    scientific: "Phocoena sinus",
    status: "CR",
    where: "Upper Gulf of California, Mexico",
    facts: [
      "The smallest porpoise in the world",
      "Fewer than 20 individuals were estimated in recent surveys"
    ]
  }
];

const grid = document.getElementById("grid");

if (grid) {
  animals.forEach((animal) => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h2");
    title.textContent = animal.name;

    const scientific = document.createElement("p");
    scientific.textContent = animal.scientific;

    const where = document.createElement("p");
    where.textContent = "Lives in: " + animal.where;

    const status = document.createElement("p");
    status.textContent = "Status: " + animal.status;

    const factsList = document.createElement("ul");
    animal.facts.forEach((fact) => {
      const item = document.createElement("li");
      item.textContent = fact;
      factsList.appendChild(item);
    });

    card.appendChild(title);
    card.appendChild(scientific);
    card.appendChild(where);
    card.appendChild(status);
    card.appendChild(factsList);
    grid.appendChild(card);
  });
}