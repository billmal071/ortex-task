import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { feed } from '../../actions/feedAction';
import { login } from '../../actions/loginAction';
import { useSelector } from '../../hooks/useTypedSelector';
import { UserData } from '../../interface/dataTypes';
import ScrollRestoration from '../../utilities/scrollRestore';
import Spinner from '../../utilities/Spinner';
import style from '../../styles/profile.module.css';

function Profile(): JSX.Element {
  const { loginReducer, feedReducer } = useSelector((state: any) => state.rootReducer);
  console.log(feedReducer.data);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    dispatch(feed());
    setUsername(loginReducer.data.username);
    ReactModal.setAppElement('#root');
    //eslint-disable-next-line
  }, []);

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
      title: "Reset Password Success",
      icon: "success",
      text: "You password has now been reset"
    })
  }

  const date = new Date(feedReducer.data?.dt);
  return (
    <div className="bg-profile-page bg-cover bg-no-repeat bg-center flex flex-row justify-center items-center flex-grow h-screen text-white">
      <Helmet>
        <title>Ortex | Profile</title>
      </Helmet>
      <ScrollRestoration />
      <div>
        <div className="card bg-card">
          <h1 className="text-center text-4xl mb-3 font-bold">Bio</h1>
          <div className="text-center">
            <h3 className="text-2xl font-semibold my-1 font-mono">Username: {loginReducer.data.username}</h3>
            <h3 className="text-2xl font-semibold my-1 font-mono">Password: {loginReducer.data.password}</h3>
          </div>
          <div className="text-center mt-4">
            <button onClick={() => setOpenModal(true)} className="bg-red-600 capitalize p-2">reset password</button>
          </div>
        </div>

        <ReactModal
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          style={{
            overlay: {
              position: 'fixed',
              zIndex: 1,
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              overflow: 'auto',
              backgroundColor: 'rgb(0,0,0,0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }
          }}
          className={style.content}
        >
          <button className="close" onClick={() => setOpenModal(false)}>&times;</button>
          <div className="text-white">
            <h3 className="text-center capitalize font-bold text-2xl">Reset Password</h3>
            <br />
            <form onSubmit={submitForm} className="flex flex-col justify-center items-center px-4 md:px-0 container mx-auto px-3 w-3/6 mt-10">
              <div className="flex md:flex-row flex-col md:pb-7">
                <label htmlFor="username" className="font-bold text-xl font-mono pr-2">username:</label>
                <input type="text" name="username" id="username" className="text-gray-400 font-bold border-solid border-2" placeholder="username" value={loginReducer.data.username} onChange={() => setUsername(loginReducer.data.username)} required minLength={5} readOnly />
              </div>
              <h3 className="text-lg mb-2 text-left">Enter new password</h3>
              <div className="flex md:flex-row flex-col md:pb-5">
                <label htmlFor="password" className="font-bold text-xl font-mono pr-2">password:</label>
                <input type="password" name="password" id="password" className="text-gray-400 font-bold border-solid border-2" placeholder="*********" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={7} />
              </div>
              <button type="submit" className="uppercase bg-green-500 py-2 shadow-lg text-white font-medium mt-3 w-4/6 md:w-3/6 hover:text-red-400">reset</button>
            </form>
          </div>
        </ReactModal>

        <br />
        {feedReducer.loading && (
          <Spinner />
        )}
        {feedReducer.data?.constructor === Object && !Object.keys(feedReducer.data).includes('dt') && (
          <p className="text-red-500 text-3xl text-center capitalize font-bold">No websocket data</p>
        )}
        {feedReducer.error && (
          <p className="text-red-500 text-3xl text-center capitalize font-bold">An error occurred</p>
        )}
        {feedReducer.data?.constructor === Object && Object.keys(feedReducer.data).includes('dt') && (
          <div className="card bg-card">
            <h1 className="text-center text-3xl font-bold">EUR/USD exchange rate</h1>
            <h3 className="py-2 text-xl font-semibold font-mono">TimeStamp: {date.toLocaleString()}</h3>
            <h3 className="py-2 text-xl font-semibold font-mono">Price: {feedReducer.data.price}</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
