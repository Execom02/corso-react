import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contatti from './pages/Contatti.jsx'
import About from './pages/About.jsx'
import Cards from './pages/Cards.jsx'
import Card from './pages/Card.jsx'
import CardsChildren from './pages/CardsChildren.jsx'
import store from './redux/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/about",
    element: <About></About>
  },
  {
    path: "/contatti",
    element: <Contatti></Contatti>
  },
  {
    path: "/cards",
    element: <Cards></Cards>
  },
  {
    path: "/cards/:cardID",
    element: <Card></Card>
  },
  {
    path: "/cards-children",
    element: <CardsChildren></CardsChildren>,
    children: [
      {
        path: ":cardID",
        element: <Card />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
