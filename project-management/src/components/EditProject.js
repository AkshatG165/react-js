import classes from './EditProject.module.css';

function EditProject() {
  return (
    <form className={classes['form']}>
      <button type="button" className={classes['btn-cancel']}>
        Delete
      </button>
      <div className={classes['info']}>
        <h1>Learning React</h1>
        <h3>Dec 29, 2024</h3>
        <p>
          Learn react from the gurond up.
          <br />
          <br />
          <br /> Start with the basics, finish with advanced knowledge.
        </p>
      </div>
      <div className={classes['tasks']}>
        <input type="text" />
        <button>Add Task</button>
      </div>
    </form>
  );
}

export default EditProject;
