import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import Clock from './Clock';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navigation() {
  return (
    <div className='nav'>
      <ThemeSwitcher />
      <div className='nav__links'>
        <NavLink className='nav__links--link' to={ROUTES.home.path}>{ROUTES.home.title}</NavLink>
        <NavLink className='nav__links--link' to={ROUTES.about.path}>{ROUTES.about.title}</NavLink>
        <NavLink className='nav__links--link' to={ROUTES.portfolio.path}>{ROUTES.portfolio.title}</NavLink>
        <NavLink className='nav__links--link' to={ROUTES.contact.path}>{ROUTES.contact.title}</NavLink>
      </div>
      <Clock />
    </div>
  );
};