import { useState } from 'react';
import { Menu, InfoContainer, UserContainer, ItemsContainer } from './style.js';

import { FaAlignJustify, FaDog, FaUserTie, FaUser, FaUsers, FaUserCog, FaSignOutAlt } from "react-icons/fa";

function MenuBar() {

  const [activeMenu, setActiveMenu] = useState(true);

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
          <a href="#">
            <span> <FaDog/> </span>
            <p>Animales</p>
          </a>
          <span>Animales</span>
        </li>

        <li>
          <a href="#">
            <span> <FaUserTie/> </span>
            <p>Adoptantes</p>
          </a>
          <span>Adoptantes</span>
        </li>

        <li>
          <a href="#">
            <span> <FaUser/> </span>
            <p>Empleados</p>
          </a>
          <span>Empleados</span>
        </li>

        <li>
          <a href="#">
            <span> <FaUsers/> </span>
            <p>Usuarios</p>
          </a>
          <span>Usuarios</span>
        </li>

        {/*<li>
          <a href="#">
            <span>  </span>
            <p>Roles</p>
          </a>
          <span>Roles</span>
        </li>

        <li>
          <a href="#">
            <span>   </span>
            <p>Especies</p>
          </a>
          <span>Especies</span>
        </li>

        <li>
          <a href="#">
            <span>   </span>
            <p>Razas</p>
          </a>
          <span>Razas</span>
        </li>

        <li>
          <a href="#">
            <span></span>
            <p>Estatus</p>
          </a>
          <span>Estatus</span>
        </li>
*/}
        <li>
          <a href="#">
            <span> <FaUserCog/> </span>
            <p>Perfil</p>
          </a>
          <span>Perfil</span>
        </li>

        <li>
          <a href="#">
            <span> <FaSignOutAlt/> </span>
            <p>Salir</p>
          </a>
          <span>Salir</span>
        </li>

      </ItemsContainer>
    </Menu>

  );
};

export default MenuBar;