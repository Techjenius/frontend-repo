'use client'
import styled from 'styled-components';

//this is the container that causes the signin and signup to have to part,(image and form) using grid
export const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

