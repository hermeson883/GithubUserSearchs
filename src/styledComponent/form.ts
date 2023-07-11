import { styled } from 'styled-components'

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  gap: 2rem;
`
export const StyledInput = styled.input`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 0.8rem;
  border: 1px solid ${(props) => props.theme.black};
`
export const StyledButton = styled.button`
  color: ${(props) => props.theme.white};
  padding: 0.4rem;
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.theme.gray};
  transition: 0.5s;

  &:hover {
    color: ${(props) => props.theme.teal};
    background: ${(props) => props.theme.black};
  }
`
export const StyledDivInputButton = styled.div`
  display: flex;
  gap: 0.5rem;
`
