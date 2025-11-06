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
