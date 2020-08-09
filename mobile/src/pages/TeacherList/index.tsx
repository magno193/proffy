import React from 'react';
import { Container, TeacherListScroll } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const TeacherList:React.FC = () => (
  <Container>
    <PageHeader
      title="Proffys disponíveis"
    />
    <TeacherListScroll>
      <TeacherItem isFavorite={false} />
      <TeacherItem isFavorite={false} />
      <TeacherItem isFavorite={false} />
    </TeacherListScroll>
  </Container>
);

export default TeacherList;
