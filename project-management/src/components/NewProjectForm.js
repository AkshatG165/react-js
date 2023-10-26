import classes from './NewProjectForm.module.css';

function NewProjectForm() {
  return (
    <form className={classes['form']}>
      <div className={classes['buttons']}>
        <button type="button" className={classes['btn-cancel']}>
          Cancel
        </button>
        <button type="submit" className={classes['btn-save']}>
          Save
        </button>
      </div>
      <div className={classes['field-group']}>
        <label>TITLE</label>
        <input type="text" />
      </div>
      <div className={classes['field-group']}>
        <label>DESCRIPTION</label>
        <textarea />
      </div>
      <div className={classes['field-group']}>
        <label>DUE DATE</label>
        <input type="date" />
      </div>
    </form>
  );
}

export default NewProjectForm;
