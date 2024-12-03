import { useEffect } from "react";
import { useNavigate, matchPath } from "react-router-dom";
import myRoutes from "../routes/routes"; 

function ErrorPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const currentPath = window.location.pathname;
    
    const isValidPath = myRoutes.routes.some(route => matchPath(route.path, currentPath));


    if (!isValidPath) {
      navigate("/"); 
    }
  }, [navigate]);

  return (
    <div>
      <h2>Page non trouvée. Vous allez être redirigé...</h2>
    </div>
  );
}

export default ErrorPage;
