import styled from 'styled-components'

export const Menu = styled.section`
  width: 80px;
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  // color: #fff;
  background-color: grey;
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

  & p {
    width: 90%;
    display: none;
    opacity: 0;
    transition: 0.5s;

    .active & {
      display: block;
      opacity: 1;
      transition-delay: 5s;
    }
  }

  & svg {
    margin: 0 auto;
    font-size: 1.2rem;

    .active & {
      margin: 0;
    }

    @media (hover:hover) {
      cursor: pointer;
    }
  }
`;

export const UserContainer = styled.div`
  padding: 10px 5px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;

  & img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #eee;
  }

  & div {
    margin-left: 15px;

    p {
      text-align: center;
      opacity: 0;
      transition: 0.5s;

      &:nth-child(1) {
        font-size: 1.2rem;
        font-weight: 600;
      }

      .active & {
        opacity: 1;
        transition-delay: 0.2s;
      }
    } 
  }
`;

export const ItemsContainer = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  & li {
    width: 90%;
    height: 40px;
    margin: 0 auto;
    position: relative;
    list-style: none;

    & a {
      display: flex;
      align-items: center;
      text-decoration: none;
      border-radius: 0.8rem;

      & span {
        min-width: 40px;
        height: 40px;
        padding: 8px 0;
        margin-left: 5px;
        font-size: 1.5rem;
        text-align: center;
        border-radius: 12px;
      }

      & p {
        height: 40px;
        padding: 10px 0;
        margin-left: 10px;
        font-size: 1.2rem;
        opacity: 0;

        .active & {
          opacity: 1;
          transition-delay: 0.2s;
        }
      }
    }
  }
`;