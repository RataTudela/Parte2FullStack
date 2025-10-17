import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './MainLayout.jsx';

import Home from './Home.jsx';
import Contacto from './contacto.jsx';
import Registro from './Registro.jsx';
import InicioSesion from './InicioSesion.jsx';
import Blog from './Blog.jsx';
import Productos from './Productos.jsx';
import DetalleProducto from './DetalleProducto.jsx';
import Noticia1 from './noticia1.jsx';
import Noticia2 from './noticia2.jsx';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove('route-registro');
    document.body.classList.remove('route-inicio-sesion');

    if (location.pathname === '/Registro') {
      document.body.classList.add('route-registro');
    } else if (location.pathname === '/inicio-sesion') {
      document.body.classList.add('route-inicio-sesion');
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/contacto" element={<MainLayout><Contacto /></MainLayout>} />
      <Route path="/inicio-sesion" element={<MainLayout><InicioSesion /></MainLayout>} />
      <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
      <Route path="/productos" element={<MainLayout><Productos /></MainLayout>} />
      <Route path="/detalle-producto" element={<MainLayout><DetalleProducto /></MainLayout>} />
      <Route path="/noticia1" element={<MainLayout><Noticia1 /></MainLayout>} />
      <Route path="/noticia2" element={<MainLayout><Noticia2 /></MainLayout>} />
      <Route path="/Registro" element={<MainLayout><Registro /></MainLayout>} />
      <Route path="*" element={<MainLayout><h2>404: Página no encontrada</h2></MainLayout>} />
    </Routes>
  );
}

