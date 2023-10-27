import classes from './ProjectList.module.css';

let id = 1;

function ProjectList(props) {
  const onClick = (e) => {
    props.setCurProject(e.target.firstChild.data);
    props.setState('edit-project');
  };
  const projectList = props.projectList
    .map((item) => item.title)
    .map((item) => (
      <li key={id++} className={classes['project-item']}>
        <button type="button" onClick={onClick}>
          {item}
        </button>
      </li>
    ));
  return <ol className={classes['project-list']}>{projectList}</ol>;
}

export default ProjectList;
