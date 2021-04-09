import React, { useState } from 'react'
import { useSelector } from '../../hooks/useTypedSelector';
import Swal from 'sweetalert2';
import { login } from '../../actions/loginAction';
import { UserData } from '../../interface/dataTypes';
import { useLoginDispatch } from '../../store/store';
import { useHistory } from 'react-router';

function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useLoginDispatch();
  const { loginReducer } = useSelector((state: any) => state.rootReducer);
  console.log(loginReducer);
  const history = useHistory();

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (username.length < 5) {
      return Swal.fire({
        title: "Login Error",
        icon: "error",
        text: "Your username must be 5 characters long"
      })
    }
    if (password.length < 7) {
      return Swal.fire({
        title: "Login Error",
        icon: "error",
        text: "Your password must be 7 characters long"
      })
    }
    const loginData: UserData = { username, password }
    dispatch(login(loginData));
    Swal.fire({
      title: "Login Success",
      icon: "success",
      text: "You are now logged in"
    })
    history.push("/login")
  }
  return (
    <div className="bg-login-page bg-cover bg-no-repeat bg-center flex flex-row justify-center items-center flex-grow h-screen">
      <div className="flex flex-row justify-center items-center h-4/6 w-5/6 md:h-3/6 md:w-3/6 bg-card-login bg-cover bg-no-repeat bg-center text-white shadow-lg">
        <div className="flex flex-col">
          <h3 className="font-bold text-3xl uppercase text-center mb-5">login</h3>
          <form onSubmit={submitForm} className="flex flex-col items-center px-4 md:px-0 ">
            <div className="flex md:flex-row flex-col md:pb-7">
              <label htmlFor="username" className="font-bold text-xl font-mono pr-2">username:</label>
              <input type="text" name="username" id="username" className="text-gray-400 font-bold border-solid border-2" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} required minLength={5} />
            </div>

            <div className="flex md:flex-row flex-col md:pb-5">
              <label htmlFor="password" className="font-bold text-xl font-mono pr-2">password:</label>
              <input type="password" name="password" id="password" className="text-gray-400 font-bold border-solid border-2" placeholder="*********" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={7} />
            </div>
            <button type="submit" className="uppercase bg-green-500 py-2 shadow-lg text-white font-medium mt-3 w-5/6 hover:text-blue-800">login</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Login
