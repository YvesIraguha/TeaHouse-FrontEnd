const categories = {
  Poem: "POEMS",
  "Short story": "SHORT STORIES",
  Issues: "ISSUES",
  "Book series": "BOOK SERIES",
  Interview: "INTERVIEWS",
  "Lit news": "LIT NEWS",
  Gossip: "GOSSIPS",
};
const categoryToLink = {
  Poem: "/individual-pieces",
  "Short story": "/individual-pieces",
  Issues: "/collections",
  "Book series": "/collections",
  Interview: "/individual-pieces",
  "Lit news": "/individual-pieces",
  Gossip: "/individual-pieces",
};

export const mapCategoryToTitle = (category) => categories[category];
export const mapCategoryToLink = (category) => categoryToLink[category];
