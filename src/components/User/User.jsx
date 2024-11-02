import { Link, useNavigate } from 'react-router-dom';
import './user.css'

const User = ({user}) => {

 const navigate =useNavigate();

  function handleDetailsClick(){
    navigate(`/user/${id}`);
  }
  
  const{id,name,email}=user;
  return (
    <div>
    <div className="user">
      <h2>User:</h2>
      Id:{id}
      <br></br>
      Name:{name}
      <br></br>
      Email:{email}
      <br></br>
      <Link to={`/user/${id}`} > <button>Show Details</button> </Link>
    <button onClick={handleDetailsClick}> Click Here </button>
    </div>
    </div>
  );
};

export default User;