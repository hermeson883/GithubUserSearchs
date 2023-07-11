import { defaulThemes } from '../styledComponent/defaultTheme'
import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { GitBranch } from '@phosphor-icons/react'
import { Card } from './Card'
import axios from 'axios'
import {
  StyledButton,
  StyledDiv,
  StyledInput,
  StyledDivInputButton,
} from '../styledComponent/form'

export function Form() {
  const [input, setInput] = useState<string>('')
  const [user, setUser] = useState<string>('')
  const [gitHub, setGithub] = useState<string[]>([])
  //   const [github, setGithub] = useState({})
  function handleInputClick(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value)
  }

  function handleForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setUser(input)
  }

  useEffect(() => {
    try {
      axios
        .get(`https://api.github.com/users/${user}`)
        .then((response) => setGithub([response.data]))
    } catch (e) {
      console.log(e)
    }
  }, [user])

  console.log(gitHub)

  return (
    <>
      <form onSubmit={handleForm}>
        <StyledDiv>
          <label htmlFor="">
            Find your User <GitBranch size={20} color={defaulThemes.teal} />
          </label>
          <StyledDivInputButton>
            <StyledInput
              id="user"
              placeholder="Insert your user name"
              onChange={handleInputClick}
            />
            <StyledButton type="submit">Buscar</StyledButton>
          </StyledDivInputButton>
        </StyledDiv>
      </form>
      <div>
        {gitHub.map((gitUser) => {
          return (
            <Card
              img={gitUser.avatar_url}
              name={gitUser.name}
              location={gitUser.location}
              login={gitUser.login}
              bio={gitUser.bio}
              key={1}
            />
          )
        })}
      </div>
    </>
  )
}
