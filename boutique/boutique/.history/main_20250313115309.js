"use strict"

//
// Définition des variables globales
//

// Tableau contenant la liste des catégories
const categories = [
	{
		id: 1,
		name: "Tables"
	},
	{
		id: 2,
		name: "Fauteuils"
	},
	{
		id: 3,
		name: "Chaises de bureau"
	}
];

// Tableau des éléments de la boutique
const products = [
	{
		id: 1,
		price: 150,
		title: "Table de cuisine bois naturel",
		image: "img/table-cuisine-bois-naturel.jpg",
		categoryId: 1
	},
	{
		id: 2,
		price: 220,
		title: "Table de cuisine blanc",
		image: "img/table-cuisine-blanc.jpg",
		categoryId: 1
	},
	{
		id: 3,
		price: 280,
		title: "Table basse de salon",
		image: "img/table-basse-salon.jpg",
		categoryId: 1
	},
	{
		id: 4,
		price: 170,
		title: "Table de salon",
		image: "img/table-salon.jpg",
		categoryId: 1
	},
	{
		id: 5,
		price: 210,
		title: "Table à hauteur réglable",
		image: "img/table-hauteur-reglable.jpg",
		categoryId: 1
	},
	{
		id: 6,
		price: 90,
		title: "Table ronde",
		image: "img/table-ronde.jpg",
		categoryId: 1
	},
	{
		id: 7,
		price: 280,
		title: "Fauteuil bleu",
		image: "img/fauteuil-bleu.png",
		categoryId: 2
	},
	{
		id: 8,
		price: 250,
		title: "Fauteuil vert",
		image: "img/fauteuil-vert.png",
		categoryId: 2
	},
	{
		id: 9,
		price: 200,
		title: "Fauteuil marron",
		image: "img/fauteuil-marron.png",
		categoryId: 2
	},
	{
		id: 10,
		price: 60,
		title: "Chaise de bureau bleu",
		image: "img/chaise-bureau-bleu.png",
		categoryId: 3
	},
	{
		id: 11,
		price: 120,
		title: "Fauteuil de bureau bleu",
		image: "img/fauteuil-bureau-bleu.png",
		categoryId: 3
	},
	{
		id: 12,
		price: 160,
		title: "Fauteuil de bureau noir",
		image: "img/fauteuil-bureau-noir.png",
		categoryId: 3
	}
];

// Tableau contenant la liste des envies
let wishlist = [];

// Tableau contenant le panier d'achats
let cart = [];

// Montant total du panier
let cartTotal = 0;

// Nombre d'éléments dans le panier
let qteTotal = 0;

// Affichage des produits de la boutique
function displayProducts() {

	// Tous les éléments ajoutés aux différents éléments sont récupérés dans le tableau au début du JS de la ligne 24 à 109

	// selection de la div avec l'ID shop dans le HTML
	const shop = document.getElementById('shop')

	// créé une boucle pour paramétrer tous les articles en même temps
	for (const element of products) {
		const article = document.createElement('article')
		shop.appendChild(article)
		
		// ajout d'une image dans l'article
		const image = document.createElement('img')
		image.src = element.image
		image.alt = element.title
		article.appendChild(image)

		// créer un titre avec le nom dans l'article
		const titre = document.createElement('h2')
		titre.innerText = element.title
		article.appendChild(titre)
		
		// créer un paragraphe avec le prix dans l'article
		const paragraphe = document.createElement('p')
		paragraphe.innerText = element.price+'€'
		paragraphe.classList.add('price')
		article.appendChild(paragraphe)

		// Ajout a la liste d'envies
		const bouton = document.createElement('a')
		bouton.innerHTML = '<i class="fa-solid fa-heart"></i> ajouter a ma liste d\'envies'
		article.appendChild(bouton)
		bouton.classList.add('envie')
		bouton.setAttribute('title', element.title)

		// Création bouton ajouter au panier
		const panier = document.createElement('button')
		panier.innerHTML = '<i class="fa-solid fa-cart-plus"></i> ajouter au panier'

	}
}

// Tri ascendant
function ascendingSorting() {
}

// Tri descendant
function descendingSorting() {
}

//
// GESTION DES CATÉGORIES (BONUS)
//

function displayCategories() {
}

function filterCategories() {
}

//
// GESTION DE LA LISTE D'ENVIES
//

function addToWishList() {
}

function displayWishList() {
}

function emptyWishList() {
}

//
// GESTION DU PANIER D'ACHATS
//

// Ajouter un élément au panier
function addToCart() {
}

// Calculer le total du panier
function cartTotals() {
}

// Affichage du panier
function displayCart() {
}

// Afficher/cacher le détail du panier
function showHideCart() {
}

// Mise à jour du panier (quantité, suppression d'un article) => BONUS
function updateCart(ev) {
}

// Vider le panier
function emptyCart() {
}
//
// CODE PRINCIPAL
//

document.addEventListener('DOMContentLoaded', function () {
	// Récupération des données du localStorage

	// Récupération des données du sessionStorage

	// Affichage de la boutique, de la liste d'envies et du contenu du panier

	displayProducts()

	// Définition des écouteurs d'événement
});