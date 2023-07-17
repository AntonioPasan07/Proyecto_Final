import {useAuth}from '../../hooks'

const Modal = ({ handleModal }) => {
    const { logout } = useAuth();
  
    return (
      <div>
        <h2>You are about to leave!</h2>
        <h3>Are you sure?</h3>
        <button onClick={() => handleModal(false)}>Nop</button>
        <button onClick={logout}>Yeah</button>
      </div>
    );
  };

  export default Modal