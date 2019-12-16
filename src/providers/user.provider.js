import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { auth } from '../firebase/firebase.utils';

const Context = React.createContext();

function UserProvider({ children, ...remainingProps }) {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged(user => {
      user ? setCurrentUser(user) : setCurrentUser(undefined);
    });

    return () => {
      unlisten();
    };
  }, [currentUser]);

  return (
    <Context.Provider value={currentUser} {...remainingProps}>
      {children}
    </Context.Provider>
  );
}

UserProvider.propTypes = {
  user: PropTypes.node,
  children: PropTypes.node,
};

export default UserProvider;

export { Context as UserContext };
