import {useState} from 'react'

import {
  MainContainer,
  CardContainer,
  Heading,
  InputCard,
  Text,
  Input,
  ErrorText,
} from './styledComponents'

const PasswordValidator = () => {
  const [inputValue, setInput] = useState('')

  const onChangeInput = event => {
    setInput(event.target.value)
  }

  const errorText = inputValue.length >= 8
  console.log(errorText)

  return (
    <MainContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>

        <InputCard>
          <Input type="password" value={inputValue} onChange={onChangeInput} />
          {errorText ? null : (
            <ErrorText>Your password must be at least 8 characters</ErrorText>
          )}
        </InputCard>
      </CardContainer>
    </MainContainer>
  )
}

export default PasswordValidator
