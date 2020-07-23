const categories = {
  Poem: "POEMS",
  "Short story": "SHORT STORIES",
  Issues: "ISSUES",
  "Book series": "BOOK SERIES",
  interviews: "INTERVIEWS",
  "lit-news": "LIT NEWS",
  gossips: "GOSSIPS",
};
const categoryToLink = {
  Poem: "/individual-pieces",
  "Short story": "/individual-pieces",
  Issues: "/collections",
  "Book series": "/collections",
  interviews: "/collections",
  "lit-news": "/collections",
  gossips: "/collections",
};

export const mapCategoryToTitle = (category) => categories[category];
export const mapCategoryToLink = (category) => categoryToLink[category];
