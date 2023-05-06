import styled from 'styled-components'

export const Menu = styled.section`
  width: 80px;
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: lightgrey;
  transition: 0.5s;

  &.active {
    width: 200px;
  }
`;

export const InfoContainer = styled.div`
  height: 40px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background-color: grey;

  
`;

export const Logo = styled.p`
  // width: 90%;
  display: none;
  opacity: 0;
  transition: 0.5s;
  // transition-delay: 10s;

  .active & {
    display: block;
    opacity: 1;
    transition-delay: 5s;
  }
`;

export const UserContainer = styled.div`
  height: 50px;
  padding: 10px 5px;
  display: flex;
  align-items: center;

  & div {
    margin-left: 10px;
    background: green;
  }
`;

export const Image = styled.img`
  width: 50px;
  border-radius: 50%;
  border: 1px solid #eee;
`;

export const Username = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  opacity: 0;
  transition: 0.5s;

  .active & {
    opacity: 1;
    transition-delay: 0.2s;
  }
`;

export const Role = styled.p`
  opacity: 0;
  transition: 0.5s;

  .active & {
    opacity: 1;
    transition-delay: 0.2s;
  }
`;

export const ItemsContainer = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: grey;
`;

export const Item = styled.li`
  width: 90%;
  height: 40px;
  margin: 0 auto;
  // padding: 5px;
  position: relative;
  list-style: none;
  // line-height: 50px;
  background-color: lightgrey;
`;

export const Ancor = styled.a`
  display: flex;
  align-items: center;
  // color: #fff;
  text-decoration: none;
  border-radius: 0.8rem;
`;

export const AncorIcon = styled.span`
  min-width: 40px;
  height: 40px;
  padding: 8px 0;
  margin-left: 5px;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 12px;
`;

export const AncorText = styled.p`
  height: 40px;
  padding: 8px 0;
  margin-left: 10px;
  opacity: 0;

  .active & {
    opacity: 1;
    transition-delay: 0.2s;
  }
`;