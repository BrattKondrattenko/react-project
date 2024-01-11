import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import MainPage from '../../pages/MainPage';
import TablePage from '../../pages/TablePage';
import UserPage from '../../pages/UserPage';
import CartPage from '../../pages/CartPage';
import { MAIN_ROUTE, USER_ROUTE, TABLE_ROUTE, CART_ROUTE, AUTH_ROUTE } from './configs';
import AuthPage from '../../pages/AuthPage';

const MainRouter = ({isAuth = false}) => {
  
  const basedPath: RouteObject[] = [
    { path: MAIN_ROUTE, element: <MainPage />,},
    { path: TABLE_ROUTE, element: <TablePage /> },
    { path: AUTH_ROUTE, element: <AuthPage /> },
    { path: "*", element: <Navigate to={'/'} replace />},
  ]

  const authPath: RouteObject[] = [
    { path: USER_ROUTE , element: <UserPage />,},
    { path: CART_ROUTE, element: <CartPage /> },
  ]

  const resultPaths: RouteObject[] = basedPath
  
  if(isAuth){
    resultPaths.push(...authPath)
  }
  return useRoutes(resultPaths);
}

export default MainRouter;