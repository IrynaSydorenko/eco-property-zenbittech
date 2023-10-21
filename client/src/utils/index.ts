export const currencyFormatter = (amount: number) => {
  return (
    amount.toLocaleString('en-US', { useGrouping: true }).replace(/,/g, ' ') +
    ' Dhs'
  );
};
