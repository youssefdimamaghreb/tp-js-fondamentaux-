console.log("Laboratoire prêt !");
const nom = "Youssef";
let age = 17;
//nom = "Un autre nom";
console.log(age); 
age = 18;
const motDePasseAttendu = "secret123";
let motDePasseUtilisateur = "12345"; // Changez cette valeur pour tester
if ("motDePasseAttendu===motDePasseUtilisateur") {
    console.log("Accès autorisé. Bienvenue !");
} else if ("Vérification de la longueur du mot de passe (< 8 caractères)") {
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
} else {
    console.log("Accès refusé. Mot de passe incorrect.");
}

`const nom = "Dupont"`
`const prenom = "Alice"`
`const age = 17`
const moi = {
    prenom: "Martin",
    nom: "Dupon",
    age: 18,
    competences: ["HTML", "CSS"]
};
console.log(moi);
console.log(moi.prenom); // Affiche "VotrePrénom" 
//Mini-Défi 1 : Affichez la phrase "Je m'appelle [VotrePrénom] [VotreNom]." en utilisant les propriétés de l'objet.
console.log("Je m'appelle " + moi.prenom + " " + moi.nom)
console.log("Je m'appelle", moi.prenom, moi.nom)
moi.ville = "Paris"
console.log(moi)

const notes =[12, 15, 9, 18]

for (let i = 0; i < notes.length; i++) {
    console.log("La note à l'indice " + i + " est " + notes[i]);
}

const classe = [
    { prenom: 'Alice', age: 18 },
    { prenom: 'Bob', age: 17 }
];

for (let i = 0; 1 < classe.length ; i++) {
    if (classe[i].age >=18) {
        console.log("Les élèves majeurs sont: " + classe.prenom)
    } else {
        console.log(classe[i].prenom + " est mineur")
    }
}

function saluer(prenom) {
    console.log("Bonjour", prenom)
} 
const saluer = (prenom) => {
    console.log("Bonjour", prenom)
}
saluer("Martin")

function estMajeur(age) {
    return age >= 1;
}

const estMajeur = (age) => {
    return age >= 18;
}

const estMajeur = (age) => age >= 18