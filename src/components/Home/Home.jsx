import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";


const Home = () => {
  // const data=useLoaderData();
  // console.log(data);
  const navigation=useNavigation();
  const location=useLocation();
  console.log(location);

  return (
    <div className="">
      <Header></Header>
      {navigation.state==="loading"?"loading": <Outlet></Outlet>
      }
      
      <p> Footer</p>
    </div>
  );
};

export default Home;