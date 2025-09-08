
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./home";
import { Layout } from "./components/layout/layout";
import { CulturaIndigena } from "./culturaIndígena";
import { Acervooline } from "./acervoonline";
import { Arteindigena } from "./arteindigena";
import { Acervo } from "./acervo";
import { Tradicao } from "./tradição";
import { Horarios } from "./visite/horarios";
import { Localizacao } from "./visite/localização";
import { Visite } from "./components/visite";
import { Tickets } from "./visite/tickets";

const router = createBrowserRouter([

  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/culturaindigena",
        element: <CulturaIndigena />
      },
      {
        path: "/acervoonline",
        element: <Acervooline/>
      },
      {
        path: "/arteindigena",
        element: <Arteindigena />
      
      },
      {
        path: "/acervo",
        element: <Acervo />
      },
      {
      path: "/tradicao",
      element: <Tradicao />
      },
      {
  path: "/visite",
  element: <Visite />,
  children: [
    { path: "horarios", element: <Horarios /> },
    { path: "localizacao", element: <Localizacao />, },
    { path: "tickets", element: <Tickets />},
  ],
},
    
    ]
  }
])
export { router };