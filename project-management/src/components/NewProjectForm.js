import { useRef } from 'react';
import classes from './NewProjectForm.module.css';

function NewProjectForm(props) {
  const title = useRef();
  const desc = useRef();
  const dueDate = useRef();

  const onCancel = () => props.setState('first-page');
  const onSave = (e) => {
    if (!title.current.value || !desc.current.value || !dueDate.current.value)
      return;
    e.preventDefault();
    props.setProjectList((prev) => [
      ...prev,
      {
        title: title.current.value,
        desc: desc.current.value,
        dueDate: dueDate.current.value,
      },
    ]);
    props.setState('first-page');
  };

  return (
    <form className={classes['form']}>
      <div className={classes['buttons']}>
        <button
          type="button"
          className={classes['btn-cancel']}
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className={classes['btn-save']} onClick={onSave}>
          Save
        </button>
      </div>
      <div className={classes['field-group']}>
        <label>TITLE</label>
        <input type="text" ref={title} required />
      </div>
      <div className={classes['field-group']}>
        <label>DESCRIPTION</label>
        <textarea ref={desc} required />
      </div>
      <div className={classes['field-group']}>
        <label>DUE DATE</label>
        <input type="date" ref={dueDate} required />
      </div>
    </form>
  );
}

export default NewProjectForm;
