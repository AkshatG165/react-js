import classes from './FirstPage.module.css';
import noProjects from '../assets/no-projects.png';

function NewProject() {
  const onClick = () => {};
  return (
    <div className={classes['new-project']}>
      <img src={noProjects} alt="No Projects" />
      <h1>No Project Selected</h1>
      <h3>Select a project or get started with new one</h3>
      <button type="button" onClick={onClick}>
        Create new project
      </button>
    </div>
  );
}

export default NewProject;
