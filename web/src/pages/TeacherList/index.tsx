import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import Input from '../../components/Input';

import './styles.css';
import Select from '../../components/Select';
import {
  optionsSubjectData,
  optionsWeekDayData,
} from '../../utils/optionsDataObject';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select name="subject" label="Matéria" options={optionsSubjectData} />
          <Select
            name="week_day"
            label="Dia da semana"
            options={optionsWeekDayData}
          />
          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  );
};
export default TeacherList;
