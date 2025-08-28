
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./home";
import { Layout } from "./components/layout/layout";
import { CulturaIndigena } from "./culturaIndígena";
import { Programacao } from "./programação";
import { Visite } from "./visite";
import { Acervo } from "./acervo";

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
        path: "/programacao",
        element: <Programacao />
      },
      {
        path: "/visite",
        element: <Visite />
      
      },
      {
        path: "/acervo",
        element: <Acervo />
      }
    
    ]
  }
])
export { router };