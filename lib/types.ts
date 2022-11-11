export interface Book {
  id: string | number;
  title: string;
  year: number;
  genre: string;
  cover?: string;
  author: string;
  rating?: number;
  read: boolean;
  shelf?: number;
  shelfId?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Shelf {
  id: string;
  createdAt: string;
  updatedAt: string;
  userId: string | number;
  name: string;
  books: Book[];
}

export interface User {
  id: string | number;
  firstName: string;
  lastName: string;
  password: string;
  shelves: Shelf[];
}
