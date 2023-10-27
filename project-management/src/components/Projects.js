import ProjectList from './ProjectList';
import classes from './Projects.module.css';

function Projects(props) {
  const onClick = () => props.setState('new-project');
  return (
    <div className={classes['projects']}>
      <h1>Your Projects</h1>
      <button type="button" onClick={onClick}>
        + Add Project
      </button>
      <ProjectList
        projectList={props.projectList}
        setCurProject={props.setCurProject}
        setState={props.setState}
      />
    </div>
  );
}

export default Projects;
