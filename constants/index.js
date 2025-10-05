const navLinks = [
  {
    id: "cocktails",
    title: "Cocktails",
  },
  {
    id: "about",
    title: "À Propos",
  },
  {
    id: "work",
    title: "L’Art",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const cocktailLists = [
  {
    name: "Ngoki Punch",
    country: "CG",
    detail: "Bouteille 500 ml",
    price: "5 000 FCFA",
  },
  {
    name: "M’bolo Mojito",
    country: "CG",
    detail: "Verre 300 ml",
    price: "3 500 FCFA",
  },
  {
    name: "Palm Wine Spritz",
    country: "CG",
    detail: "Calebasse locale",
    price: "2 000 FCFA",
  },
  {
    name: "Rhum Nkéni",
    country: "CG",
    detail: "Bouteille 700 ml",
    price: "7 000 FCFA",
  },
];

const mockTailLists = [
  {
    name: "Jus de Bissap Glacé",
    country: "CG",
    detail: "Verre 250 ml",
    price: "1 500 FCFA",
  },
  {
    name: "Tamarin Twist",
    country: "CG",
    detail: "Verre 250 ml",
    price: "2 000 FCFA",
  },
  {
    name: "Mangue Sunrise",
    country: "CG",
    detail: "Verre 300 ml",
    price: "2 500 FCFA",
  },
  {
    name: "Ananas Fizz",
    country: "CG",
    detail: "Verre 300 ml",
    price: "2 500 FCFA",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  "Mélanges parfaitement équilibrés",
  "Décorés avec soin",
  "Toujours servis bien frais",
  "Secoués et mélangés avec expertise",
];

const goodLists = [
  "Ingrédients locaux sélectionnés",
  "Techniques de mixologie uniques",
  "Art du bar congolais en action",
  "Saveurs fraîchement pressées",
];

const storeInfo = {
  heading: "Où Nous Trouver",
  address: "Avenue Matsoua, Centre-ville, Brazzaville, Congo",
  contact: {
    phone: "+242 06 987 6543",
    email: "contact@brazzacocktail.com",
  },
};

const openingHours = [
  { day: "Lun–Jeu", time: "11h00 – 23h00" },
  { day: "Ven", time: "11h00 – 01h00" },
  { day: "Sam", time: "09h00 – 01h00" },
  { day: "Dim", time: "09h00 – 22h00" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

const allCocktails = [
  {
    id: 1,
    name: "Mojito Classique",
    image: "/images/drink1.png",
    title: "Des ingrédients simples, une saveur audacieuse",
    description:
      "Préparé avec du rhum local, du citron vert et de la menthe fraîche, ce Mojito est un incontournable des soirées chaudes de Brazzaville. Ajoutez un bord salé pour encore plus de caractère.",
  },
  {
    id: 2,
    name: "Mojito Framboise",
    image: "/images/drink2.png",
    title: "Un classique fruité qui séduit toujours",
    description:
      "Un équilibre parfait entre le citron vert acidulé, le rhum doux et la fraîcheur de la framboise. Idéal pour les apéros au bord du fleuve Congo.",
  },
  {
    id: 3,
    name: "Brise Violette",
    image: "/images/drink3.png",
    title: "Saveurs locales, créativité mondiale",
    description:
      "Mélange subtil de rhum blanc, sirop de bissap et touche florale. Inspiré des marchés colorés de Brazzaville.",
  },
  {
    id: 4,
    name: "Mojito Curaçao",
    image: "/images/drink4.png",
    title: "Préparé avec soin, servi avec passion",
    description:
      "Un cocktail tropical revisité avec une touche de curaçao bleu, évoquant les couchers de soleil sur Pointe-Noire.",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCocktails,
};
