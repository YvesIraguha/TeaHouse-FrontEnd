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

const linkToPieceType = {
  "/poems": "Poem",
  "/short-stories": "Short story",
  "/interviews": "Interview",
  "/essays": "Essay",
  "/gossip": "Gossip",
  "/lit-news": "Lit news",
};

export const mapCategoryToTitle = (category) => categories[category];
export const mapCategoryToLink = (category) => categoryToLink[category];
export const mapLinkToPieceType = (pathname) => linkToPieceType[pathname];
