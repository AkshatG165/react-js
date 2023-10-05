import Button from '../UI/Button';
import classes from './Alert.module.css';

function Alert(props) {
  console.log(props, props.userInfo.age, props.userInfo.age <= 0);
  const onClick = () => {
    props.onAlertClose();
  };

  let alertText = 'Please enter a valid name and age (non-empty values).';
  if (props.userInfo.age !== '' && props.userInfo.age <= 0) {
    alertText = 'Please enter a valid age (> 0).';
  }

  return (
    <div className={classes['alert']}>
      <div className={classes['alert-body']}>
        <div className={classes['header']}>Invalid Input</div>
        <div className={classes['body']}>{alertText}</div>
        <div className={classes['button']}>
          <Button type="button" label="Okay" onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

export default Alert;
