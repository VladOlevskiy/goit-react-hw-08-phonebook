import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRout';
import { RestrictedRoute } from './RestrictedRout';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import AuthPage from 'pages/AuthPage/AuthPage';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { isRefreshing } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/auth"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<AuthPage />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<AuthPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/auth" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
