import React from 'react';
import {
  Container, TeacherListScroll, SearchForm, Label, Input, InputGroup, InputBlock,
} from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const TeacherList:React.FC = () => (
  <Container>
    <PageHeader title="Proffys disponíveis">
      <SearchForm>
        <Label>Matéria</Label>
        <Input placeholder="Qual matéria?" placeholderTextColor="#c1bccc" />

        <InputGroup>
          <InputBlock>
            <Label>Dia da semana</Label>
            <Input placeholder="Qual dia?" placeholderTextColor="#c1bccc" />
          </InputBlock>

          <InputBlock>
            <Label>Horário</Label>
            <Input placeholder="Qual horário?" placeholderTextColor="#c1bccc" />
          </InputBlock>
        </InputGroup>
      </SearchForm>
    </PageHeader>
    <TeacherListScroll>
      <TeacherItem isFavorite={false} />
      <TeacherItem isFavorite={false} />
      <TeacherItem isFavorite={false} />
    </TeacherListScroll>
  </Container>
);

export default TeacherList;
