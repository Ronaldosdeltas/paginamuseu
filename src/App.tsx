
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./home";
import { Layout } from "./components/layout/layout";
import { CulturaIndigena } from "./culturaIndígena";
import { Acervooline } from "./programação";
import { Arteindigena } from "./arteindigena";
import { Acervo } from "./acervo";
import { Tradicao } from "./tradição";

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
      }
    
    ]
  }
])
export { router };