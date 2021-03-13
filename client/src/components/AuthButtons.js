/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './scss/AuthButtons.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { logout } from '../redux/Sreducers/userReducer';

const AuthButtons = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  const showAuthButtons = () => {
    if (isAuth) {
      return (
        <div className="navbar__login" onClick={() => dispatch(logout())}>
          <Link to="/">Exit</Link>
        </div>
      );
    }

    return (
      <div className="auth-buttons">
        <Link to="/login">
          <Button size="small" startIcon={<VpnKeyIcon />} style={{ color: '#ffffff' }}>Log In</Button>
        </Link>
        <Link to="/registration">
          <Button size="small" startIcon={<PersonAddIcon />} style={{ color: '#ffffff' }}>Sign Up</Button>
        </Link>
      </div>
    );
  };

  const buttons = showAuthButtons();

  return (
    <div className="auth-buttons">
      {buttons}
    </div>
  );
};

export default AuthButtons;