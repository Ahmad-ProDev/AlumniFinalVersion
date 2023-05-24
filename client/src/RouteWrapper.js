import React, { useEffect } from 'react';
// import { useHistory } from 'react-router';

function RouteWrapper({ children }) {
  // const history = useHistory();

  // useEffect(() => {
  //   const unlisten = history.listen((location, action) => {
  //     if (action === 'POP') {
  //       // Handle the back button click here
  //       // For example, you can go back to the previous page:
  //       // history.goBack();
  //     }
  //   });

  //   return () => {
  //     unlisten();
  //   };
  // }, [history]);

  return (
    <>
      {children}
    </>
  );
}

export default RouteWrapper;