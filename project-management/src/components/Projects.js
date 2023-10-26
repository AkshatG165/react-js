import classes from './Projects.module.css';

function Projects() {
  const onClick = () => {};
  return (
    <div className={classes['projects']}>
      <h1>Your Projects</h1>
      <button type="button" onClick={onClick}>
        + Add Project
      </button>
    </div>
  );
}

export default Projects;
