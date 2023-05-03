import React, { FunctionComponent } from 'react';

import { Container } from "./styles";
import Button from "../Button/Button";
import { FooterProps } from '../../interfaces/Footer';


const Footer: FunctionComponent<FooterProps> = ({ toggleFeedCallback, killFeedCallback , isFeedKilled}) => {
  return (
    <Container>
      {!isFeedKilled && <Button title={'Toggle Feed'} backgroundColor={'#5741d9'} callback={toggleFeedCallback}/>}
      <Button title={isFeedKilled ? 'Renew feed' : 'Kill Feed'} backgroundColor={'#b91d1d'} callback={killFeedCallback}/>
    </Container>
  );
};

export default Footer;