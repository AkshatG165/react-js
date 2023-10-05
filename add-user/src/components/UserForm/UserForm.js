import { useState } from 'react';
import classes from './UserForm.module.css';
import Button from '../UI/Button';

function UserForm(props) {
  const [userInfo, setUserInfo] = useState({
    userName: '',
    age: '',
  });

  const onUsernameUpdate = (e) =>
    setUserInfo((prevUser) => {
      return {
        ...prevUser,
        id: Math.ceil(Math.random() * 100000).toString(),
        ['userName']: e.target.value,
      };
    });

  const onAgeUpdate = (e) =>
    setUserInfo((prevUser) => {
      return {
        ...prevUser,
        ['age']: +e.target.value,
      };
    });

  const onSubmit = (e) => {
    e.preventDefault();
    props.onAddUser(userInfo);
    setUserInfo({
      userName: '',
      age: '',
    });
  };

  return (
    <form className={classes['form']} onSubmit={onSubmit}>
      <div className={classes['input-group']}>
        <label>Username</label>
        <input
          type="text"
          value={userInfo.userName}
          id="user-name"
          onChange={onUsernameUpdate}
        />
      </div>
      <div className={classes['input-group']}>
        <label>Age (Years)</label>
        <input
          type="number"
          value={userInfo.age}
          id="age"
          onChange={onAgeUpdate}
        />
      </div>
      <div>
        <Button type="submit" label="Add User" />
      </div>
    </form>
  );
}

export default UserForm;
