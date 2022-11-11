export const shelvesData: {
  name: string;
  books: any;
}[] = [
  {
    name: "Living Room",
    books: {
      create: [
        {
          title: "Fermi Paradox",
          genre: "Sci-fi",
          year: 2003,
          cover: "/public/books/1.jpg",
          read: false,
          rating: 4,
          author: {
            create: {
              name: "Emily St. John Mandel",
            },
          },
        },
        {
          title: "Illusions",
          genre: "Sci-fi",
          year: 2004,
          cover: "/public/books/2.jpg",
          read: true,
          rating: 3,
          author: {
            create: {
              name: "Afonso Saramago",
            },
          },
        },
      ],
    },
  },
  {
    name: "My Library",
    books: {
      create: [
        {
          title: "Fermi Paradox",
          genre: "Sci-fi",
          year: 2003,
          cover: "/public/books/1.jpg",
          read: true,
          rating: 2,
          author: {
            create: {
              name: "Emily St. John Mandel",
            },
          },
        },
        {
          title: "The Midnight Café",
          genre: "Fiction",
          year: 2012,
          cover: "/public/books/3.jpg",
          read: true,
          rating: 5,
          author: {
            create: {
              name: "Theodor Omir",
            },
          },
        },
      ],
    },
  },
];
