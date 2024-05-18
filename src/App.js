import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './styles/App.css';
import Root from './layouts/Root';
import { ROUTES } from './routes/routes';
import { About, Contact, Home, Portfolio } from './pages';

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
      <RouterProvider router={router} />
    </>
  );
}

export default App;