//Exercice 1

const titre = document.querySelector('h1');
console.log(titre);
const paragraphe = document.querySelectorAll('p');
console.log(paragraphe [1]);
// --------------------------


//Exercice 2
const profil = document.querySelector("h2");
profil.textContent = "Mathieu Janmot";

const option = document.querySelector(".option");
option.innerHTML = "SLAM";

const article = document.querySelector(".profil")

article.classList.add('mise-en-avant');
console.log(article);


console.log(article.dataset.role);

const competence = document.querySelector("ul")
console.log(competence);

competence.classList.add('bold');

const total = document.querySelectorAll("li").length
const somme = document.querySelector("#somme")


somme.textContent = `${total}`;

// --------------------------

//Exercice 3

somme.addEventListener("click", () => {
    profil.classList.add('changeColor');
    
})

// --------------------------

//Exercice 4



const form = document.querySelector("#ajout")
const btnSubmit = document.querySelector("button");
const champ = document.querySelector("#champ")
const liste = document.querySelector("#taches")

btnSubmit.disabled = true

form.addEventListener("input", () => {
  // true seulement si les 4 champs contiennent du texte (trim enlève les espaces)
    const texte = champ.value.trim();
    

  // On inverse : tout rempli → bouton actif, sinon → bouton bloqué
  if (texte.trim() !== "") {
    
    btnSubmit.disabled = false;
    
  } else{
    btnSubmit.disabled = true;
  }
});


form.addEventListener("submit", (event) => {
    event.preventDefault()
    const element = document.createElement("li")
    const btnSuppr = document.createElement("button");
    btnSuppr.textContent = "Supprimer";

    //exercice 5
    btnSuppr.addEventListener("click", (event) =>{
      event.stopPropagation();
      element.remove();
      mettreAJourCompteur();
    })

    element.addEventListener ("click", () => {
        element.classList.toggle('faite');
    })

    element.textContent = champ.value;
    liste.append(element)
    mettreAJourCompteur();
    element.append(btnSuppr)
    btnSubmit.disabled = true
    form.reset();
    
})

//Exerice 5 

const compteur = document.querySelector("#compteur");


function mettreAJourCompteur() {
    const nombre = liste.querySelectorAll("li").length;
    compteur.textContent = `${nombre} tâche(s)`;
}
mettreAJourCompteur();