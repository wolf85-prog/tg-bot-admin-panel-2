import React, {useContext} from 'react'
import {Routes, Route} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes_start";
import { LOGIN_ROUTE } from '../utils/consts';
import { Context } from '../index';
import {observer} from "mobx-react-lite"

// Pages
const Login = React.lazy(() => import('./../views/pages/login/Login'))

// Containers
const DefaultLayout = React.lazy(() => import('./../layout/DefaultLayout'))

const AppRouter = observer(() => {
  const {user} = useContext(Context)

  console.log(user)

  return (
    <Routes>  
        {user.isAuth && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component/>} exact/>
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="*" name="Home" element={<DefaultLayout />} />
    </Routes>
  );
});

export default AppRouter;