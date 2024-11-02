import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const UserDetails = () => {
  const params=useParams()
  console.log(params.userId);

  const navigate =useNavigate();

  function handleGoBackClick(){
    navigate(-1);
  }
 const details =useLoaderData();
const{username,website,phone,id}=details;

 console.log(details);
  return (
    <div className="user">
      User Details is here: 
      <br></br>
      ID:{id} 
      <br></br>
     UserName: {username}
      <br></br>
      Website: {website}
      <br></br>
      Phone: {phone}
      <div>
        <button onClick={handleGoBackClick} >Go Back Home</button>
      </div>
    </div>
  );
};

export default UserDetails;