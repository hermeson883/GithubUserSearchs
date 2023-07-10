import { defaulThemes } from '../styledComponent/defaultTheme'
import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { GitBranch } from '@phosphor-icons/react'
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
    console.log('deu certo')
  }

  function handleForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setUser(input)
  }

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then((response) => setGithub(response.data))
    console.log(gitHub)
  }, [user])

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
            <StyledButton>Buscar</StyledButton>
          </StyledDivInputButton>
        </StyledDiv>
      </form>
      <div>{}</div>
    </>
  )
}
