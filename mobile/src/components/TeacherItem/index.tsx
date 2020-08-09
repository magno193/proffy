import React from 'react';
import { Image } from 'react-native';
import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonsContainer,
  FavoriteButton,
  ContactButton,
  ContactButtonText,
} from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

interface ITeacherItemProps {
  isFavorite?: boolean;
}

const TeacherItem: React.FC<ITeacherItemProps> = ({ isFavorite }) => (
  <Container>
    <Profile>
      <Avatar source={{ uri: 'https://github.com/magno193.png' }} />
      <ProfileInfo>
        <Name>Alexandre Ferreira</Name>
        <Subject>Química</Subject>
      </ProfileInfo>
    </Profile>

    <Bio>
      Wannabe musician and full stack developer
    </Bio>

    <Footer>
      <Price>
        Preço/hora
        {'   '}
        <PriceValue>R$: 20.00</PriceValue>
      </Price>

      <ButtonsContainer>
        <FavoriteButton isFavorite={isFavorite}>
          {isFavorite
            ? <Image source={unfavoriteIcon} />
            : <Image source={heartOutlineIcon} />}
        </FavoriteButton>

        <ContactButton>
          <Image source={whatsappIcon} />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </ButtonsContainer>
    </Footer>
  </Container>
);
export default TeacherItem;
