import classes from './TaskList.module.css';

let id = 1;

function TaskList(props) {
  const onClick = (e) =>
    props.setTaskList((prev) =>
      prev.filter((task) => task !== e.target.parentElement.childNodes[0].data)
    );
  const taskList = props.taskList.map((item) => (
    <li key={id++} className={classes['list-item']}>
      {item}
      <button onClick={onClick}>Clear Item</button>
    </li>
  ));
  return <ol className={classes['task-list']}>{taskList}</ol>;
}

export default TaskList;
