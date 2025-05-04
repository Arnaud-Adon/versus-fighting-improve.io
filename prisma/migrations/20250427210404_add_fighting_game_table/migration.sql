-- CreateTable
CREATE TABLE "sheet" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "fightingGameId" TEXT NOT NULL,

    CONSTRAINT "sheet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "filter" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "sheetId" TEXT,

    CONSTRAINT "filter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fighting_game" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fighting_game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "character" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fightingGameId" TEXT NOT NULL,

    CONSTRAINT "character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterOnSheet" (
    "id" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,
    "sheetId" TEXT NOT NULL,

    CONSTRAINT "CharacterOnSheet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OpponentOnSheet" (
    "id" TEXT NOT NULL,
    "opponentId" TEXT NOT NULL,
    "sheetId" TEXT NOT NULL,

    CONSTRAINT "OpponentOnSheet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FightingGameOnUser" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fightingGameId" TEXT NOT NULL,

    CONSTRAINT "FightingGameOnUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CharacterOnSheet_sheetId_characterId_key" ON "CharacterOnSheet"("sheetId", "characterId");

-- CreateIndex
CREATE UNIQUE INDEX "OpponentOnSheet_sheetId_opponentId_key" ON "OpponentOnSheet"("sheetId", "opponentId");

-- AddForeignKey
ALTER TABLE "sheet" ADD CONSTRAINT "sheet_fightingGameId_fkey" FOREIGN KEY ("fightingGameId") REFERENCES "fighting_game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sheet" ADD CONSTRAINT "sheet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "filter" ADD CONSTRAINT "filter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "filter" ADD CONSTRAINT "filter_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "sheet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "character" ADD CONSTRAINT "character_fightingGameId_fkey" FOREIGN KEY ("fightingGameId") REFERENCES "fighting_game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterOnSheet" ADD CONSTRAINT "CharacterOnSheet_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterOnSheet" ADD CONSTRAINT "CharacterOnSheet_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "sheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpponentOnSheet" ADD CONSTRAINT "OpponentOnSheet_opponentId_fkey" FOREIGN KEY ("opponentId") REFERENCES "character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpponentOnSheet" ADD CONSTRAINT "OpponentOnSheet_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "sheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FightingGameOnUser" ADD CONSTRAINT "FightingGameOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FightingGameOnUser" ADD CONSTRAINT "FightingGameOnUser_fightingGameId_fkey" FOREIGN KEY ("fightingGameId") REFERENCES "fighting_game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
