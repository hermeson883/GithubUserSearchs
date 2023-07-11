import {
  StyledDiv,
  StyledH1,
  StyledImg,
  StyledSection,
  StyledLi,
  StyledP,
  StyledUl,
} from '../styledComponent/card'
import { Quotes } from '@phosphor-icons/react'

interface CardProps {
  img: string
  name: string
  location?: string
  login: string
  bio?: string
}

export function Card({ img, name, location, login, bio }: CardProps) {
  return (
    <StyledSection>
      <StyledDiv>
        <StyledImg src={img} />
        <StyledH1>{name}</StyledH1>
        <StyledUl>
          <StyledLi statusColor="red">{login}</StyledLi>
          <StyledLi statusColor="blue">{location}</StyledLi>
        </StyledUl>
        <StyledP>
          <Quotes />
          {bio}
          <Quotes />
        </StyledP>
      </StyledDiv>
    </StyledSection>
  )
}
