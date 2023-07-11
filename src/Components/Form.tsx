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
  const [input, setInput] = useState('')
  const [user, setUser] = useState('')
  const [gitHub, setGithub] = useState([])
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
        .catch((e) => {
          console.log(e)
        })
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
        {gitHub.map((hub) => {
          return (
            <Card
              img={hub.avatar_url}
              name={hub.name}
              location={hub.location}
              login={hub.login}
              bio={hub.bio}
            />
          )
        })}
      </div>
    </>
  )
}
