import React from 'react';
import { Container, TeacherListScroll } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const Favorites:React.FC = () => (
  <Container>
    <PageHeader title="Meus Proffys favoritos" />

    <TeacherListScroll>
      <TeacherItem isFavorite />
      <TeacherItem isFavorite />
      <TeacherItem isFavorite />
    </TeacherListScroll>
  </Container>
);

export default Favorites;
