import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import NotAllowedPage from '../MainPage/NotAllowedPage/NotAllowedPage.jsx'
import { UserContext } from '../../App.js'

// const userContext = useContext(UserContext)

const PrivateRoute = ({
  component: Component,
  isAuthorized,
  // userHasAccess,
  allowedRoles,
  userData,
  ...rest
}) => {
  const userContext = useContext(UserContext)
  // console.log(userContext)
  //Если пользователь не авторизован и у него нет токена
  //доступа, то редирект на /login, иначе - рендер
  //передаваемого компонента
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('refreshToken') ? (
          allowedRoles !== undefined ? (
            userContext.userData.username !== '' ? (
              userContext.userHasAccess(allowedRoles) &&
              userContext.isAuthorized ? (
                <Component
                  {...rest}
                  {...props}
                  userData={userData}
                  userHasAccess={userContext.userHasAccess}
                />
              ) : (
                <NotAllowedPage />
              )
            ) : null
          ) : (
            <Component
              {...rest}
              {...props}
              userData={userData}
              userHasAccess={userContext.userHasAccess}
            />
          )
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
