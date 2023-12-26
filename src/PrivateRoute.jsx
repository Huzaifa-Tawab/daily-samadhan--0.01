import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { auth } from './firebase';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = !!auth.currentUser;
  return isAuthenticated ? (
    <Route {...rest} element={<Element />} />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
