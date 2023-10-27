import { useState, useRef } from 'react';
import EditProject from './components/EditProject';
import FirstPage from './components/FirstPage';
import NewProjectForm from './components/NewProjectForm';
import Projects from './components/Projects';

function App() {
  const [state, setState] = useState('first-page');
  const [projectList, setProjectList] = useState([]);
  const [curProject, setCurProject] = useState('');

  return (
    <div className="main-container">
      <Projects
        projectList={projectList}
        setCurProject={setCurProject}
        setState={setState}
      />
      {state === 'first-page' && <FirstPage setState={setState} />}
      {state === 'new-project' && (
        <NewProjectForm setState={setState} setProjectList={setProjectList} />
      )}
      {state === 'edit-project' && (
        <EditProject
          setState={setState}
          projectList={projectList}
          setProjectList={setProjectList}
          curProject={curProject}
        />
      )}
    </div>
  );
}

export default App;
