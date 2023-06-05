import styled from 'styled-components';

export const Menu = styled.section`
  width: 80px;
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  left: 0;
  color: #fff;
  background-color: #263A29; //#7C9070
  transition: 0.8s;

  &.active {
    width: 250px;
  }
`;

export const InfoContainer = styled.div`
  height: 40px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  & p {
    height: 16px;
    font-style: italic;
    font-weight: 600;
    letter-spacing: 1px;
    opacity: 0;
    transition-delay: 0s;

    .active & {
      opacity: 1;
      transition-delay: 0.5s;
    }
  }

  & svg {
    margin: 0 auto;
    font-size: 1.4rem;
    position: absolute;
    left: 25px;
    transition: 0.5s;
    transition-delay: 0s;

    .active & {
      left: 210px;
      transition: 0.5s;
      transition-delay: 0.2s;
    }
  }

  @media (hover:hover) {
    svg:hover {
      cursor: pointer;
    }
`;

export const UserContainer = styled.div`
  height: 83px;
  padding: 10px 5px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #fff;

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
      transition-delay: 0s;

      &:nth-child(1) {
        font-size: 1rem;
        font-weight: 600;
      }

      &:nth-child(2) {
        letter-spacing: 1px;
        color: #ccc;
      }

      .active & {
        opacity: 1;
        transition-delay: 0.5s;
      }
    } 
  }
`;

export const ItemsContainer = styled.ul`
  padding: 0.65rem 0;

  & li {
    width: 90%;
    height: 50px;
    margin: 0.8rem auto;
    position: relative;
    list-style: none;
    line-height: 50px;

    & a {
      display: flex;
      align-items: center;
      color: #fff;
      text-decoration: none;
      border-radius: 0.8rem;

      & span {
        min-width: 50px;
        height: 50px;
        padding: 2.5px 0;
        font-size: 1.5rem;
        text-align: center;
        border-radius: 12px;
      }

      & p {
        font-size: 1.1rem;
        opacity: 0;
        transition-delay: 0s;

        .active & {
          opacity: 1;
          transition-delay: 0.5s;
        }
      }
    }

    & > span {
      padding: .4rem 1.2rem;
      position: absolute;
      top: 50%;
      left: 140px;
      color: #fff;
      font-size: 1.1rem;
      font-weight: 500;
      line-height: 1.8rem;
      border-radius: .6rem;
      z-index: 20;
      opacity: 0;
      transform: translate(-40%, -50%);
      background: #41644A;
      box-shadow: 0 0.5rem 0.8rem rgba(0,0,0,0.2);

      .active & {
        display: none;
      }
    }
  }

  @media (hover:hover) {
    a:hover {
      color: #fff;
      background: #41644A;
    }
    li:hover > span {
      opacity: 1;
    }
  }
`;