
const form = document.getElementById("formInscription");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const nom = document.getElementById("nom").value.trim();
        const prenom = document.getElementById("prenom").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();
        const conditions = document.getElementById("conditions").checked;

   
        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas !");
            return;
        }

        if (!conditions) {
            alert("Vous devez accepter les conditions générales.");
            return;
        }

        
        if (nom === "" || prenom === "" || email === "") {
            alert("Veuillez remplir tous les champs obligatoires (*)");
            return;
        }

        
        alert(
            `Détails de votre inscription :\n\n` +
            `Nom : ${nom}\n` +
            `Prénom : ${prenom}\n` +
            `Email : ${email}\n` +
            `Mot de passe : ${"*".repeat(password.length)}\n` + 
            `Conditions acceptées : ${conditions ? "Oui" : "Non"}`
        );

        alert("Félicitations ! Votre inscription a été confirmée avec succès.");

        
        form.reset();
    });
}

