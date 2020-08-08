import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Banner,
  Title,
  TitleBold,
  ButtonsContainer,
  ButtonPrimary,
  ButtonSecondary,
  ButtonText,
  TotalsConnections,
} from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

const Landing:React.FC = () => {
  const { navigate } = useNavigation();

  function NavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  return (
    <Container>
      <Banner resizeMode="contain" source={landingImg} />
      <Title>
        Seja bem-vindo,
        {'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>

      <ButtonsContainer>
        <ButtonPrimary>
          <Image source={studyIcon} />
          <ButtonText>Estudar</ButtonText>
        </ButtonPrimary>
        <ButtonSecondary onPress={NavigateToGiveClassesPage}>
          <Image source={giveClassesIcon} />
          <ButtonText>Dar aulas</ButtonText>
        </ButtonSecondary>
      </ButtonsContainer>

      <TotalsConnections>
        Total de 285 conexões já realizadas
        {' '}
        <Image source={heartIcon} />
      </TotalsConnections>
    </Container>
  );
};

export default Landing;
