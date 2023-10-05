import UserItem from '../UserItem/UserItem';
import classes from './ItemList.module.css';

function ItemList({ userInfo }) {
  return (
    <div className={classes['item-list']}>
      {userInfo.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default ItemList;
