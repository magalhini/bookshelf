/*
  Warnings:

  - You are about to drop the column `rating` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the `_BookToShelf` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BookToShelf" DROP CONSTRAINT "_BookToShelf_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookToShelf" DROP CONSTRAINT "_BookToShelf_B_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "rating";

-- DropTable
DROP TABLE "_BookToShelf";

-- CreateTable
CREATE TABLE "BooksOnShelves" (
    "bookId" INTEGER NOT NULL,
    "shelfId" INTEGER NOT NULL,

    CONSTRAINT "BooksOnShelves_pkey" PRIMARY KEY ("bookId","shelfId")
);

-- AddForeignKey
ALTER TABLE "BooksOnShelves" ADD CONSTRAINT "BooksOnShelves_shelfId_fkey" FOREIGN KEY ("shelfId") REFERENCES "Shelf"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BooksOnShelves" ADD CONSTRAINT "BooksOnShelves_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
