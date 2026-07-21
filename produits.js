

const buttons = document.querySelectorAll('.add');
const recap = document.getElementById('recap');
let panier = [];

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const produitDiv = btn.parentElement;
        const nom = produitDiv.querySelector('h3').innerText;
        const prix = parseFloat(produitDiv.querySelector('p:nth-of-type(2)').innerText.replace('Prix : ', '').replace(' DT', ''));
        const quantite = parseInt(produitDiv.querySelector('.qty').value);

        const exist = panier.find(item => item.nom === nom);
        if (exist) {
            exist.quantite += quantite;
        } else {
            panier.push({ nom, prix, quantite });
        }
        afficherPanier();
    });
});

function afficherPanier() {
    recap.innerHTML = '';
    let total = 0;

    panier.forEach(item => {
        const p = document.createElement('p');
        p.innerText = `${item.nom} x${item.quantite} : ${item.prix * item.quantite} DT`;
        recap.appendChild(p);
        total += item.prix * item.quantite;
    });

    const totalP = document.createElement('p');
    totalP.id = 'total';
    totalP.innerText = `Total général : ${total} DT`;
    recap.appendChild(totalP);

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'recap-buttons';

    const validerBtn = document.createElement('button');
    validerBtn.id = 'valider';
    validerBtn.innerText = 'Valider la commande';
    validerBtn.addEventListener('click', () => {
        if (panier.length === 0) {
            alert('Le panier est vide !');
        } else {
            alert('Commande validée !');
            panier = [];
            afficherPanier();
        }
    });

    const modifierBtn = document.createElement('button');
    modifierBtn.id = 'modifier';
    modifierBtn.innerText = 'Modifier / Réinitialiser';
    modifierBtn.addEventListener('click', () => {
        panier = [];
        afficherPanier();
    });

    buttonsDiv.appendChild(validerBtn);
    buttonsDiv.appendChild(modifierBtn);
    recap.appendChild(buttonsDiv);
}
