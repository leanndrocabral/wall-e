-- CreateTable
CREATE TABLE "Smile" (
    "id" SERIAL NOT NULL,
    "gif_url" TEXT NOT NULL,

    CONSTRAINT "Smile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cry" (
    "id" SERIAL NOT NULL,
    "gif_url" TEXT NOT NULL,

    CONSTRAINT "Cry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dance" (
    "id" SERIAL NOT NULL,
    "gif_url" TEXT NOT NULL,

    CONSTRAINT "Dance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Slap" (
    "id" SERIAL NOT NULL,
    "gif_url" TEXT NOT NULL,

    CONSTRAINT "Slap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hug" (
    "id" SERIAL NOT NULL,
    "gif_url" TEXT NOT NULL,

    CONSTRAINT "Hug_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pat" (
    "id" SERIAL NOT NULL,
    "gif_url" TEXT NOT NULL,

    CONSTRAINT "Pat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Punch" (
    "id" SERIAL NOT NULL,
    "gif_url" TEXT NOT NULL,

    CONSTRAINT "Punch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sad" (
    "id" SERIAL NOT NULL,
    "gif_url" TEXT NOT NULL,

    CONSTRAINT "Sad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blush" (
    "id" SERIAL NOT NULL,
    "gif_url" TEXT NOT NULL,

    CONSTRAINT "Blush_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Smile_gif_url_key" ON "Smile"("gif_url");

-- CreateIndex
CREATE UNIQUE INDEX "Cry_gif_url_key" ON "Cry"("gif_url");

-- CreateIndex
CREATE UNIQUE INDEX "Dance_gif_url_key" ON "Dance"("gif_url");

-- CreateIndex
CREATE UNIQUE INDEX "Slap_gif_url_key" ON "Slap"("gif_url");

-- CreateIndex
CREATE UNIQUE INDEX "Hug_gif_url_key" ON "Hug"("gif_url");

-- CreateIndex
CREATE UNIQUE INDEX "Pat_gif_url_key" ON "Pat"("gif_url");

-- CreateIndex
CREATE UNIQUE INDEX "Punch_gif_url_key" ON "Punch"("gif_url");

-- CreateIndex
CREATE UNIQUE INDEX "Sad_gif_url_key" ON "Sad"("gif_url");

-- CreateIndex
CREATE UNIQUE INDEX "Blush_gif_url_key" ON "Blush"("gif_url");
