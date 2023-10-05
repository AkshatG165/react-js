import React, { useState } from 'react';
import UserForm from './components/UserForm/UserForm';
import ItemList from './components/ItemList/ItemList';
import Alert from './components/Alerts/Alert';

let dummyInfo = { userName: '', age: '' };

function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [isValid, setIsValid] = useState(true);

  const onAddUser = (userInfo) => {
    if (userInfo) dummyInfo = userInfo;
    if (userInfo.userName === '' || userInfo.age === '' || userInfo.age <= 0) {
      setIsValid(false);
      return;
    }
    setUserInfo((prevUser) => {
      return [...prevUser, userInfo];
    });
  };

  const onAlertClose = () => setIsValid(true);

  return (
    <div>
      <UserForm onAddUser={onAddUser} />
      {userInfo.length && <ItemList userInfo={userInfo} />}
      {!isValid && <Alert userInfo={dummyInfo} onAlertClose={onAlertClose} />}
    </div>
  );
}

export default App;
