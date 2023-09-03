import {
  DiHtml5,
  DiCss3,
  DiSqllite,
  DiReact,
  DiMongodb,
  DiPython,
  DiJavascript,
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: 'html', name:'HTML5', icon: <DiHtml5 />, text: 'Aplicação no projeto que adicionado como meu trabalho principal, mas também usado nos projetos dentro da empresa que trabalho atualmente Kenlo.'},
  { id: 'css', name:'CSS', icon: <DiCss3 />, text: 'Tecnologia utilizada neste portifólio, e algo inerente aos projetos web.'},
  { id: 'sql', name:'SQL', icon: <DiSqllite /> , text: 'Trablhando no processo de Migrações atualmente na empresa, o SQL Server é uma ferramenta que utilizo diariamente na minha função.'},
  { id: 'react', name:'REACT', icon: <DiReact />, text: 'Aplicação no projeto que adicionado como meu trabalho principal, mas também usado nos projetos dentro da empresa que trabalho atualmente Kenlo.'},
  { id: 'mongodb', name:'MONGODB', icon: <DiMongodb />, text: 'Utilizado bastante quando trabalhei no Suporte N1 da Kenlo, atualmente utilizado para acompanhamento de migrações e outros projetos.'},
  { id: 'python', name:'PYHTON', icon: <DiPython />, text: 'Utilizo essa ferramenta para criar algumas automações, uma das automações foi para converter arquivo de Json em CSV, outra automação foi com base numa planilha de dados, acessava uma sistema e atualizava em massa flags de opções que necessitavam alteração.'},
  { id: 'javascript', name:'JAVASCRIPT', icon: <DiJavascript />, text: 'Uma das principais tecnologias que utilizei até o momento, o sistema Netsuite é uma aplicação onde os scripts são em JavaScript e utilizei, entre outras funcionalidades.'},
];

const TechnologiesContainer = () => {
  return <section className='technologies-container'>
    <h2>Conhecimentos:</h2>
    <p>Nesta seção você tem a visualização das tecnologias que tenho conhecimento, e locais que já apliquei cada uma delas:</p>
    <div className='technologies-grid'>
      {technologies.map((tech) => (
        <div className='technology-card' id={tech.id} key={tech.id} text={tech.text}>
          {tech.icon}
          <div className='technology-info'>
            <h3>{tech.name}</h3>
            <p>
              {tech.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
};

export default TechnologiesContainer