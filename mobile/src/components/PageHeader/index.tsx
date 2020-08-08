import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, TopBar, Title } from './styles';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

interface PageHeaderProps {
  title: string;
}

const PageHeader:React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();
  function NavigateToLanding() {
    navigate('Landing');
  }

  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={NavigateToLanding}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </TopBar>

      <Title>
        {title}
      </Title>
    </Container>
  );
};

export default PageHeader;
