import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import { optionsSubjectData } from '../../utils/optionsDataObject';

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input type="text" name="name" label="Nome completo" />
          <Input type="text" name="avatar" label="Avatar" />
          <Input type="text" name="whatsapp" label="Whatsapp" />
          <TextArea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Select name="subject" label="Matéria" options={optionsSubjectData} />
          <Input type="text" name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        {/* <fieldset>
          <legend>Horários disponíveis</legend>
          <Input type="text" name="name" label="Nome completo" />
          <Input type="text" name="avatar" label="Avatar" />
          <Input type="text" name="whatsapp" label="Whatsapp" />
        </fieldset> */}

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante !
            <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
};
export default TeacherForm;
