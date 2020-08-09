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
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
    </TeacherListScroll>
  </Container>
);

export default TeacherList;
