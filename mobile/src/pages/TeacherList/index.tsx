import React from 'react';
import { Container } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const TeacherList:React.FC = () => (
  <Container>
    <PageHeader
      title="Proffys disponíveis"
    />

    <TeacherItem />
  </Container>
);

export default TeacherList;
