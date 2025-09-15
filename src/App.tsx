
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../src/home/index";
import { Layout } from "./components/layout/layout";
import { Historiaindigena } from "./culturaIndígena/historiaindigena";
import { CulturaIndigena } from "./components/layout/culturaindigena";
import { Acervooline } from "./museu/acervoonline";
import { Arteindigena } from "./culturaIndígena/artindigena";
import { Museu } from "./components/layout/museu";
import { Tradicao } from "./culturaIndígena/tradição";
import { Horarios } from "./visite/horarios";
import { Localizacao } from "./visite/localização";
import { Visite } from "./components/layout/visite";
import { Tickets } from "./visite/tickets";
import { Boletins } from "./museu/boletins";
import { Pesquisaref } from "./museu/pesquisarefe";
import { Programação } from "./components/layout/programacao";
import { ExAtual } from "./programacao/exatual";
import { ExPassada } from "./programacao/expassada";
import { ExFutura } from "./programacao/exfutura";
import { Apoie } from "./components/layout/apoie";
import { Doacao } from "./apoie/doacao";
import { Parcerias } from "./apoie/parcerias";
import { Voluntariado } from "./apoie/voluntariado";
import { Dia7setembro } from "./videos/dia7setembro";

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
          { path: "historiaindigena", element: <Historiaindigena /> },
          { path: "tradicao", element: <Tradicao /> },
          { path: "arteindigena", element: <Arteindigena /> },
        ]
      },
      {
        path: "/museu",
        element: <Museu />,
        children: [
          { path: "acervoonline", element: <Acervooline /> },
          { path: "boletins", element: <Boletins /> },
          { path: "pesquisaref", element: <Pesquisaref /> },
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
          { path: "parcerias", element: <Parcerias /> },
          { path: "voluntariado", element: <Voluntariado /> },  
        ]
      
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
      {
        path: "/videos",
        element: <Dia7setembro />,
      },  
    
    ]
  }
])
export { router };