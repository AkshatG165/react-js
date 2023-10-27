import { useRef, useState } from 'react';
import classes from './EditProject.module.css';
import TaskList from './TaskList';

var id = 1;

function EditProject(props) {
  const taskRef = useRef();
  const [taskList, setTaskList] = useState([]);
  const curprojectInfo = props.projectList.filter(
    (project) => project.title === props.curProject
  );

  const formatDesc = (desc) => {
    if (!desc) return;
    return desc.split('\n').map((substr) => (
      <p key={id++}>
        {substr}
        <br />
      </p>
    ));
  };

  const onclick = () => {
    props.setProjectList((prev) =>
      prev.filter((project) => project.title === curprojectInfo.title)
    );
    props.setState('first-page');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (taskRef.current.value)
      setTaskList((prev) => [...prev, taskRef.current.value]);
  };

  return (
    <form className={classes['form']} onSubmit={onSubmit}>
      <div className={classes['info']}>
        <div className={classes['heading']}>
          <h1>{curprojectInfo[0].title}</h1>
          <button type="button" onClick={onclick}>
            Delete
          </button>
        </div>
        <h3>{curprojectInfo[0].dueDate}</h3>
        {formatDesc(curprojectInfo[0].desc)}
      </div>
      <h2>Tasks</h2>
      <div className={classes['tasks']}>
        <input type="text" ref={taskRef} />
        <button type="submit">Add Task</button>
      </div>
      {taskList.length > 0 && (
        <TaskList taskList={taskList} setTaskList={setTaskList} />
      )}
    </form>
  );
}

export default EditProject;
