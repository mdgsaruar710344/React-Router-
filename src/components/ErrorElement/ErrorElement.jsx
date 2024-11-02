import { useRouteError } from "react-router-dom";


const ErrorElement = () => {
 const error= useRouteError();
 console.log(error)
  return (
    <div>
      <h1>Oops!</h1>
      <h2>Your requested URL doesnt exist.</h2>
      <div>
          {error.statusText||error.message}
      </div>
    </div>
  );
};

export default ErrorElement;