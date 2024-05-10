import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

export default function Root() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
         <Outlet />
      </main>
    </>
  );
};