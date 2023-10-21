import React from 'react';
import { Card, StyledDealsSection, TitleCard, TextColumnCard } from './styles';
import { useGetDealsQuery } from '../redux/api';
import { deals as dealsMockData } from '../mocks/deals';
import { currencyFormatter } from '../utils';

function DealsSection() {
  const {
    // render mocks if no data, you need to do seeding on the server
    data: deals = dealsMockData,
    isLoading,
    isError,
  } = useGetDealsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching deals</p>;

  return (
    <StyledDealsSection>
      <h2
        style={{
          color: '#B29F7E',
          fontSize: '28px',
          lineHeight: '34px',
          width: '100%',
          margin: '5px 5px 10px 10px',
        }}
      >
        Open Deals
      </h2>
      {deals
        ? deals.map((deal) => (
            <Card bgUrl={deal.imageUrl}>
              <TextColumnCard>
                <TitleCard>{deal.title}</TitleCard>
                <span>{currencyFormatter(deal.totalAmount)}</span>
                <span>Tiket - {currencyFormatter(deal.pricePerSqM)}</span>
              </TextColumnCard>
              <TextColumnCard alignItems="center">
                <span>Yield {deal.projectedYield}%</span>
                <span>Days left {deal.daysLeft}</span>
              </TextColumnCard>
              <TextColumnCard
                alignItems="flex-end"
                justifyContent="center"
                minHeight="70px"
              >
                <span>Sold {deal.amountSold}%</span>
              </TextColumnCard>
            </Card>
          ))
        : 'No data available'}
    </StyledDealsSection>
  );
}

export default DealsSection;
