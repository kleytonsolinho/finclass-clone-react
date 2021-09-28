import styled from 'styled-components';

export const Button = styled.button`

  width: ${(props) => (props.width)}%;
  padding: 10px 0;
  font-size: 1rem;
  line-height: 2rem;
  background-color: ${(props) => (props.primary === true ? props.color : 'transparent')};
  color: ${(props) => (props.primary === true ? '#000000' : props.color)};;
  border: 1px solid ${(props) => (props.primary !== true ? props.color : 'transparent')};
  display: block;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  border-radius: 6px;
  margin: 20px 0;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.2);
  }

`;
