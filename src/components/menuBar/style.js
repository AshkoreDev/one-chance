import styled from 'styled-components'

export const Menu = styled.section`
  width: 80px;
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #222222;
  background-color: #7C9070; //#7C9070
  transition: 0.8s;

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

  & p {
    height: 16px;
    font-style: italic;
    font-weight: 600;
    letter-spacing: 1px;
    opacity: 0;
    transition-delay: 0s;

    .active & {
      opacity: 1;
      transition-delay: 0.4s;
    }
  }

  & svg {
    margin: 0 auto;
    font-size: 1.2rem;
    position: absolute;
    left: 30px;
    transition: 0.5s;
    transition-delay: 0s;

    .active & {
      margin: 0;
      left: 160px;
      transition-delay: 0.2s;
    }
  }

  @media (hover:hover) {
    svg:hover {
      color: #12171e;
      cursor: pointer;
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
      transition-delay: 0s;

      &:nth-child(1) {
        font-size: 1.2rem;
        font-weight: 600;
      }

      .active & {
        opacity: 1;
        transition-delay: 0.4s;
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
      color: #222222;
      text-decoration: none;
      border-radius: 0.5rem;

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
        transition-delay: 0s;

        .active & {
          opacity: 1;
          transition-delay: 0.4s;
        }
      }
    }

    & > span {
      padding: .4rem 1.2rem;
      position: absolute;
      top: 50%;
      left: 130px;
      color: #12171e;
      font-weight: 500;
      line-height: 1.8rem;
      border-radius: .6rem;
      z-index: 20;
      opacity: 0;
      transform: translate(-50%, -50%);
      background: #7AA874;
      box-shadow: 0 0.5rem 0.8rem rgba(0,0,0,0.2);

      .active & {
        display: none;
      }
    }
  }

  @media (hover:hover) {
    a:hover {
      color: #fff;
      background: #7AA874;
    }
    .active p:hover {
      transition-delay: 0s;
    }
    li:hover > span {
      opacity: 1;
    }
  }
`;