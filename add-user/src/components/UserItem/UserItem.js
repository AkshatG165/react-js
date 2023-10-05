import classes from './UserItem.module.css';

function UserItem({ user }) {
  return (
    <div className={classes['user-item']}>
      {`${user.userName} (${user.age} years old)`}
    </div>
  );
}

export default UserItem;
