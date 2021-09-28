import styled from 'styled-components';

export const Container = styled.aside`

  width: 100vw;
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  padding: 0 2rem;
  background-color: rgba(0, 0, 0, 0.3);

  z-index: 10;

.content {
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  p {
    margin-right: 25px;
    font-weight: 300;
  }
}

`;
