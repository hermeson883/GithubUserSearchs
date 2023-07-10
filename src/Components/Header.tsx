import { defaulThemes } from '../styledComponent/defaultTheme'
import { StyleNav, StyledHeader } from '../styledComponent/styleHeader'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

export function Header() {
  return (
    <StyledHeader>
      <StyleNav>
        <li>
          <a
            href="https://github.com/hermeson883?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo size={30} color={defaulThemes.white} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/hermeson-do-vale-beserra-482526220/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo size={30} color={defaulThemes.white} />
          </a>
        </li>
      </StyleNav>
    </StyledHeader>
  )
}
