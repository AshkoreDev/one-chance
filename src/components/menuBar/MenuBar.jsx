import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, InfoContainer, UserContainer, ItemsContainer } from './MenuBar.style.js';

import { FaAlignJustify, FaHome, FaDog, FaUserTie, FaUser, FaUsers, FaUserCog, FaSignOutAlt } from "react-icons/fa";

function MenuBar() {

  const [activeMenu, setActiveMenu] = useState(false);

  const handleToggle = () => setActiveMenu(!activeMenu)
  
  return (

    <Menu className={activeMenu && 'active'}>
      <InfoContainer>
        <p>One Chance</p>
        <FaAlignJustify onClick={handleToggle}/>
      </InfoContainer>

      <UserContainer>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78OHFGu6IrVBAOl6MmaMSIQY_MaJd9sxSIMpiFk044SvvCmMOmLJqMzGaxwGbS5ESaUA&usqp=CAU" alt="" width="50" height="50"/>
        <div>
          <p>MALBA</p>
          <p>Administrador</p>
        </div>
      </UserContainer>

      <ItemsContainer>

        <li>
          <Link to="/">
            <span> <FaHome/> </span>
            <p>Inicio</p>
          </Link>
          <span>Inicio</span>
        </li>

        <li>
          <Link to="/pets">
            <span> <FaDog/> </span>
            <p>Mascotas</p>
          </Link>
          <span>Mascotas</span>
        </li>

        <li>
          <Link to="/adopters">
            <span> <FaUserTie/> </span>
            <p>Adoptantes</p>
          </Link>
          <span>Adoptantes</span>
        </li>

        <li>
          <Link to="/employees">
            <span> <FaUser/> </span>
            <p>Empleados</p>
          </Link>
          <span>Empleados</span>
        </li>

        <li>
          <Link to="/users">
            <span> <FaUsers/> </span>
            <p>Usuarios</p>
          </Link>
          <span>Usuarios</span>
        </li>

        <li>
          <Link to="/settings">
            <span> <FaUserCog/> </span>
            <p>Configuración</p>
          </Link>
          <span>Configuración</span>
        </li>

        <li>
          <Link to="#">
            <span> <FaSignOutAlt/> </span>
            <p>Salir</p>
          </Link>
          <span>Salir</span>
        </li>

      </ItemsContainer>
    </Menu>

  );
};

export default MenuBar;