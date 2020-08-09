import React, { useState } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import {
  Container,
  TeacherListScroll,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
  SubmitButton,
  SubmitText,
} from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const TeacherList:React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  function ToggleFiltersForm() {
    setIsFiltersVisible(!isFiltersVisible);
  }
  return (
    <Container>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={(
          <BorderlessButton onPress={ToggleFiltersForm}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        )}
      >
        { isFiltersVisible && (
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
            <SubmitButton>
              <SubmitText>Filtrar</SubmitText>
            </SubmitButton>
          </SearchForm>
        )}

      </PageHeader>
      <TeacherListScroll>
        <TeacherItem isFavorite={false} />
        <TeacherItem isFavorite={false} />
        <TeacherItem isFavorite={false} />
      </TeacherListScroll>
    </Container>
  );
};

export default TeacherList;
