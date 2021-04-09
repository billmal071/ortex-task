import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector } from '../../hooks/useTypedSelector';

function Header() {
  const { loginReducer } = useSelector((state: any) => state.rootReducer);

  const history = useHistory();

  useEffect(() => {
    if (loginReducer.data.constructor === Object && Object.entries(loginReducer.data).length < 1) {
      history.push("/")
    }
    //eslint-disable-next-line
  }, [loginReducer.data])

  const [menuBtn, setMenuBtn] = useState<boolean>(false);

  function clearStorage() {
    window.localStorage.removeItem('ortex');
    history.push('/');
    window.location.reload();
  }

  return (
    <header className="p-2 shadow-2xl bg-gray-900 text-white w-full 2xl:container fixed">
      <nav className="md:flex flex-row justify-between hidden">
        <h2 className="text-2xl">
          Ortex
        </h2>
        <div className="flex flex-row pl-3">
          <a href="/" className="capitalize px-2">home</a>
          {loginReducer.data.constructor === Object && Object.entries(loginReducer.data).length ? (
            <>
              <a href="/login" className="capitalize px-2">profile</a>
              <p className="px-2">Welcome {loginReducer.data.username}</p>
              <button onClick={clearStorage} className="px-2 bg-red-800">logout</button>
            </>
          ) : (
            <p>not logged in</p>
          )}
        </div>
      </nav>
      <nav className="flex flex-row justify-between md:hidden">
        <h2 className="text-2xl">
          Ortex
        </h2>
        <i className="fas fa-bars fa-2x" onClick={() => setMenuBtn(!menuBtn)}>
        </i>
      </nav>
      <div className={`flex-col pl-3 ${menuBtn ? 'flex' : 'hidden'}`}>
        <a href="/" className="capitalize px-2">home</a>
        {loginReducer?.data?.constructor === Object && Object.entries(loginReducer.data).length > 1 ? (
          <>
            <a href="/login" className="capitalize px-2">profile</a>
            <p className="px-2">Welcome {loginReducer.data.username}</p>
            <button onClick={clearStorage} className="px-2 bg-red-800 w-2/6">logout</button>
          </>
        ) : (
          <p>not logged in</p>
        )}
      </div>
    </header>
  )
}

export default Header
