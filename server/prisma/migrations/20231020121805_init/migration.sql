-- CreateTable
CREATE TABLE "Deal" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "total_amount" INTEGER NOT NULL,
    "price_per_sq_m" INTEGER NOT NULL,
    "amount_sold" DOUBLE PRECISION,
    "projected_yield" DOUBLE PRECISION,
    "days_left" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Deal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
