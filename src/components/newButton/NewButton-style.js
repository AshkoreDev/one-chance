import styled from 'styled-components';

export const NewSection = styled.section`
  width: 50%;
  height: 60px;
  margin: 0 auto 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & h2 {
    color: #263A29;
    font-size: 1.5rem;
    font-style: italic;
    letter-spacing: 1.2px;
  }

  & button {
    width: 120px;
    height: 50px;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 8px;
    background: #263A29;
  }

  @media (hover:hover) {
    button:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;