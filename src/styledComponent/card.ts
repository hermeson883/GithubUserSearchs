import { styled } from 'styled-components'

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  gap: 5px;
  width: 40%;
  margin-top: 1rem;
  background: ${(props) => props.theme.gray};
`

export const StyledImg = styled.img`
  margin-top: 1rem;
  width: 40%;
  border-radius: 50%;
`

export const StyledH1 = styled.h1`
  margin-top: 1rem;
  font-size: 20px;
  color: ${(props) => props.theme.white};
  font-family: 'Roboto', monospace;
`

export const StyledUl = styled.ul`
  display: flex;
  gap: 1rem;
`

const COLORS = {
  red: 'red',
  blue: 'blue',
} as const

interface LiProps {
  statuscolor: keyof typeof COLORS
}

export const StyledLi = styled.li<LiProps>`
  padding: 0.3rem;
  margin-top: 1rem;
  background: ${(props) => props.theme[props.statuscolor]};
  color: ${(props) => props.theme.white};
  border-radius: 3px;
  text-align: center;
`

export const StyledP = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 1.2rem;
  margin: 1rem;
  text-align: center;
  line-height: 1.5rem;
`
