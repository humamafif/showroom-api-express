/*
  Warnings:

  - The values [VirtualAccount] on the enum `PaymentMethod_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `paymentmethod` MODIFY `type` ENUM('COD', 'VA') NOT NULL;
