/*
  Warnings:

  - You are about to drop the `Sad` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Dance" ADD COLUMN     "single" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "Sad";

-- CreateTable
CREATE TABLE "Kiss" (
    "id" SERIAL NOT NULL,
    "gif_url" TEXT NOT NULL,

    CONSTRAINT "Kiss_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Kiss_gif_url_key" ON "Kiss"("gif_url");
