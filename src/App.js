import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './styles/App.css';
import Root from './layouts/Root';
import { ROUTES } from './routes/routes';
import { About, Contact, Home, Portfolio } from './pages';
import { Helmet } from 'react-helmet';
import { ThemeArea } from './context/ThemeContext';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />}>
    <Route path={ROUTES.home.path} element={<Home />} />
    <Route path={ROUTES.about.path} element={<About />} />
    <Route path={ROUTES.portfolio.path} element={<Portfolio />} />
    <Route path={ROUTES.contact.path} element={<Contact />} />
  </Route>
));

function App() {
  return (
    <>
      <ThemeArea>
        <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet"/>

          <title>Portfolio | Laïs Ben Belgacem</title>
        </Helmet>
        <RouterProvider router={router} />
      </ThemeArea>
    </>
  );
}

export default App;