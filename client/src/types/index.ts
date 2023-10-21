export interface Deal {
  id: number;
  title: string;
  totalAmount: number;
  pricePerSqM: number;
  amountSold: number;
  projectedYield: number;
  daysLeft: number;
  imageUrl: string;
}
