import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../routes/routes';

export default function Navigation() {
  return (
    <div className='nav'>
      <NavLink to={ROUTES.home.path}>{ROUTES.home.title}</NavLink>
      <NavLink to={ROUTES.about.path}>{ROUTES.about.title}</NavLink>
      <NavLink to={ROUTES.portfolio.path}>{ROUTES.portfolio.title}</NavLink>
      <NavLink to={ROUTES.contact.path}>{ROUTES.contact.title}</NavLink>
    </div>
  );
}