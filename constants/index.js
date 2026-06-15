const BRAND_NAME = "COCO";

const navLinks = [
  {
    id: "cocktails",
    title: "Cocktails",
  },
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "art",
    title: "L'art",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const cocktailLists = [
  {
    name: "Ngoki Punch",
    country: "Signature COCO",
    detail: "Verre 350 ml",
    price: "5 000 FCFA",
  },
  {
    name: "M'bolo Mojito",
    country: "Signature COCO",
    detail: "Verre 300 ml",
    price: "3 500 FCFA",
  },
  {
    name: "Palm Wine Spritz",
    country: "Signature COCO",
    detail: "Verre 300 ml",
    price: "4 000 FCFA",
  },
  {
    name: "Rhum Nkéni",
    country: "Signature COCO",
    detail: "Verre 350 ml",
    price: "4 500 FCFA",
  },
];

const mockTailLists = [
  {
    name: "Jus de Bissap Glacé",
    country: "Sans alcool",
    detail: "Verre 250 ml",
    price: "1 500 FCFA",
  },
  {
    name: "Tamarin Twist",
    country: "Sans alcool",
    detail: "Verre 250 ml",
    price: "2 000 FCFA",
  },
  {
    name: "Mangue Sunrise",
    country: "Sans alcool",
    detail: "Verre 300 ml",
    price: "2 500 FCFA",
  },
  {
    name: "Ananas Fizz",
    country: "Sans alcool",
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
  heading: "Où nous trouver",
  address: "Avenue Matsoua, Centre-ville, Brazzaville, Congo",
  tagline: "Bar à cocktails & service événementiel",
  contact: {
    phone: "+242 06 987 6543",
    email: "contact@barcoco.cg",
  },
};

const openingHours = [
  { day: "Lun–Jeu", time: "17h00 – 23h00" },
  { day: "Ven–Sam", time: "17h00 – 01h00" },
  { day: "Dim", time: "15h00 – 22h00" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
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
      "Préparé au bar COCO avec du rhum local, du citron vert et de la menthe fraîche, ce Mojito est l'incontournable des soirées chaudes à Brazzaville. Servi avec un bord salé pour encore plus de caractère.",
  },
  {
    id: 2,
    name: "Mojito Framboise",
    image: "/images/drink2.png",
    title: "Un classique fruité qui séduit toujours",
    description:
      "L'équilibre parfait entre le citron vert acidulé, le rhum doux et la fraîcheur de la framboise. Idéal en apéritif sur notre terrasse, au bord du fleuve Congo.",
  },
  {
    id: 3,
    name: "Brise Violette",
    image: "/images/drink3.png",
    title: "Saveurs locales, créativité mondiale",
    description:
      "Création signature COCO : rhum blanc, sirop de bissap et touche florale. Inspirée des marchés colorés de Brazzaville, disponible sur place ou en service événementiel.",
  },
  {
    id: 4,
    name: "Mojito Curaçao",
    image: "/images/drink4.png",
    title: "Préparé avec soin, servi avec passion",
    description:
      "Un cocktail tropical revisité avec une touche de curaçao bleu, évoquant les couchers de soleil congolais. Préparé à la commande par nos barmans.",
  },
];

export {
  BRAND_NAME,
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
