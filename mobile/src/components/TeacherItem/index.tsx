import React from 'react';
import { Image, Linking } from 'react-native';
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

export interface ITeacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface ITeacherItemProps {
  isFavorite?: boolean;
  teacher: ITeacher;
}

const TeacherItem: React.FC<ITeacherItemProps> = ({ isFavorite, teacher }) => {
  function LinkToWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }
  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: teacher.avatar }} />
        <ProfileInfo>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>{teacher.bio}</Bio>

      <Footer>
        <Price>
          Preço/hora
          {'   '}
          <PriceValue>{`R$: ${teacher.cost}`}</PriceValue>
        </Price>

        <ButtonsContainer>
          <FavoriteButton isFavorite={isFavorite}>
            {isFavorite
              ? <Image source={unfavoriteIcon} />
              : <Image source={heartOutlineIcon} />}
          </FavoriteButton>

          <ContactButton onPress={LinkToWhatsapp}>
            <Image source={whatsappIcon} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};
export default TeacherItem;
