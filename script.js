// Sélectionner tous les carrés de la grille en utilisant la classe "square"
const squares = document.querySelectorAll(".square");

// Ajouter un gestionnaire d'événement pour chaque bouton
// Quand l'utilisateur clique sur un bouton -> appel de la fonction addRandomColor avec couleur correspondante
document
  .querySelector(".redButton")
  .addEventListener("click", () => addRandomColor("red"));
document
  .querySelector(".yellowButton")
  .addEventListener("click", () => addRandomColor("yellow"));
document
  .querySelector(".blueButton")
  .addEventListener("click", () => addRandomColor("blue"));

// Ajouter un gestionnaire d'événement pour bouton de réinitialisation
// Quand l'utilisateur clique sur ce bouton -> appel de la fonction resetGrid
document.querySelector(".resetButton").addEventListener("click", resetGrid);

// Fonction pour ajouter une couleur au hasard à un carré de la grille
function addRandomColor(color) {
  // Choisir un carré au hasard dans la liste des carrés
  const randomSquare = squares[Math.floor(Math.random() * squares.length)];

  // Appliquer la couleur choisie au carré sélectionné
  randomSquare.style.backgroundColor = color;
}

// Sélectionner la grille et le bouton de réinitialisation pour les utiliser plus tard
const grid = document.querySelector(".grid");
const resetButton = document.querySelector(".resetButton");

// Ajouter gestionnaire d'événement pour réinitialiser grille
// Quand l'utilisateur clique sur ce bouton -> appel de la fonction resetGrid
resetButton.addEventListener("click", resetGrid);

// Fonction pour réinitialiser la grille (mettre les carrés en blanc)
function resetGrid() {
  // Sélectionner tous les carrés de la grille, peu importe leur couleur actuelle
  const squares = grid.querySelectorAll(
    ".red, .white1, .white2, .blue, .white3, .yellow, .white4"
  );

  // Réinitialiser la couleur de chaque carré à "blanc"
  squares.forEach((square) => {
    square.style.backgroundColor = "white"; // Appliquer le fond blanc
  });
}
