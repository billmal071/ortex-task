import React, { useEffect } from 'react'
import { Redirect, Route, useHistory } from 'react-router-dom';
import { Props } from '../interface/dataTypes';
import { useSelector } from '../hooks/useTypedSelector';

function PrivateRoute({ component: Component, ...rest }: Props): JSX.Element {

  const { loginReducer } = useSelector((state: any) => state.rootReducer);
  const history = useHistory();

  useEffect(() => {
    if (loginReducer.data.constructor === Object && Object.entries(loginReducer.data).length < 1) {
      history.push("/")
    }
    //eslint-disable-next-line
  }, [loginReducer.data])

  return <Route {...rest} render={(props) => loginReducer.data.constructor === Object && Object.entries(loginReducer.data).length > 1 ?
    (<Component {...props} />) :
    (<Redirect to={{ pathname: "/" }} />)
  }
  />
}

export default PrivateRoute
