import { useState } from 'react';
import { Menu, InfoContainer, Logo, UserContainer, Image, Username, Role, ItemsContainer, Item, Ancor, AncorIcon, AncorText } from './style.js';

import { FaAlignJustify, FaDog, FaUserTie, FaUser, FaUsers, FaUserCog, FaSignOutAlt } from "react-icons/fa";

function MenuBar() {

  const [activeMenu, setActiveMenu] = useState(true);

  const handleToggle = () => setActiveMenu(!activeMenu)
  
  return (

    <Menu className={activeMenu && 'active'}>
      <InfoContainer>
        <Logo>One Chance</Logo>
        <FaAlignJustify onClick={handleToggle}/>
      </InfoContainer>

      <UserContainer>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78OHFGu6IrVBAOl6MmaMSIQY_MaJd9sxSIMpiFk044SvvCmMOmLJqMzGaxwGbS5ESaUA&usqp=CAU" alt="" width="50" height="50"/>
        <div>
          <Username>MALBA</Username>
          <Role>Administrador</Role>
        </div>
      </UserContainer>

      <ItemsContainer>
        <Item>
          <Ancor href="#">
            <AncorIcon> <FaDog/> </AncorIcon>
            <AncorText>Animales</AncorText>
          </Ancor>
        </Item>

        <Item>
          <Ancor href="#">
            <AncorIcon> <FaUserTie/> </AncorIcon>
            <AncorText>Adoptantes</AncorText>
          </Ancor>
        </Item>

        <Item>
          <Ancor href="#">
            <AncorIcon> <FaUser/> </AncorIcon>
            <AncorText>Empleados</AncorText>
          </Ancor>
        </Item>

        <Item>
          <Ancor href="#">
            <AncorIcon> <FaUsers/> </AncorIcon>
            <AncorText>Usuarios</AncorText>
          </Ancor>
        </Item>

        <Item>
          <Ancor href="#">
            <AncorIcon>  </AncorIcon>
            <AncorText>Roles</AncorText>
          </Ancor>
        </Item>

        <Item>
          <Ancor href="#">
            <AncorIcon>   </AncorIcon>
            <AncorText>Especies</AncorText>
          </Ancor>
        </Item>

        <Item>
          <Ancor href="#">
            <AncorIcon>   </AncorIcon>
            <AncorText>Razas</AncorText>
          </Ancor>
        </Item>

        <Item>
          <Ancor href="#">
            <AncorIcon></AncorIcon>
            <AncorText>Estatus</AncorText>
          </Ancor>
        </Item>

        <Item>
          <Ancor href="#">
            <AncorIcon> <FaUserCog/> </AncorIcon>
            <AncorText>Perfil</AncorText>
          </Ancor>
        </Item>

        <Item>
          <Ancor href="#">
            <AncorIcon> <FaSignOutAlt/> </AncorIcon>
            <AncorText>Salir</AncorText>
          </Ancor>
        </Item>

      </ItemsContainer>
    </Menu>

  );
};

export default MenuBar;