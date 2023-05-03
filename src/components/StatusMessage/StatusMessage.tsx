import React, { FunctionComponent } from 'react';
import { Container } from "./styles";
import { StatusMessageProps } from '../../interfaces/StatusMessage';

const StatusMessage: FunctionComponent<StatusMessageProps> = ({selectedMarket = '', isFeedKilled}) => {
  return (
    <Container>
      {isFeedKilled ? 'Feed killed.' : `Selected market: ${selectedMarket}`}
    </Container>
  );
};

export default StatusMessage;