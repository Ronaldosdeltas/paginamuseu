
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../src/home/index";
import { Layout } from "./components/layout/layout";
import { HistoriaIndigena } from "./culturaIndígena/historiaindigena";
import { CulturaIndigena } from "./components/layout/culturaindigena";
import { AcervoOnline } from "./museu/acervoonline";
import { Museu } from "./components/layout/museu";
import { Tradicoes } from "./culturaIndígena/tradição";
import { Horarios } from "./visite/horarios";
import { Localizacao } from "./visite/localização";
import { Visite } from "./components/layout/visite";
import { Programação } from "./components/layout/programacao";
import { ExAtual } from "./programacao/exatual";
import { ExPassada } from "./programacao/expassada";
import { ExFutura } from "./programacao/exfutura";
import { Apoie } from "./components/layout/apoie";
import { Doacao } from "./apoie/doacao";


const router = createBrowserRouter([

  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
   
      },
      {
        path: "/culturaindigena",
        element: <CulturaIndigena />,
        children: [
          { path: "historiaindigena", element: <HistoriaIndigena /> },
          { path: "tradicao", element: <Tradicoes /> },
        ]
      },
      {
        path: "/museu",
        element: <Museu />,
        children: [
          { path: "acervoonline", element: <AcervoOnline /> },
        ]
      },
    
      {
        path: "/programacao",
        element: <Programação />,
        children: [
          { path: "atual", element: <ExAtual /> },
          { path: "passadas", element: <ExPassada /> },
          { path: "eventos", element: <ExFutura /> },
        ]
      },
      {
        path: "/apoie",
        element: <Apoie />,
        children: [
          { path: "doacao", element: <Doacao /> },
          
        ]
      
      },
     
  
      {
  path: "/visite",
  element: <Visite />,
  children: [
    { path: "horarios", element: <Horarios /> },
    { path: "localizacao", element: <Localizacao />, },
  
   ],
},
     
    ]
  }
])
export { router };