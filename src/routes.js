import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";

function AppRoutes() {
  return (
    //instalar o React Router 6 para utilizar os componentes: BrowserRouver>Routes>Route
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/SobreMim" element={<SobreMim />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
