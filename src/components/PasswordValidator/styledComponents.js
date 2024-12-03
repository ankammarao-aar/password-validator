import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-color: #24263c;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  background-color: #383a4e;
  border-radius: 10px;
  padding: 34px;
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 1px 1px 2px #434451;

  @media (max-width: 563px) {
    margin: 20px;
    padding: 24px;
  }
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 36px;
    font-weight: 500;
  }
`

export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: normal;
  color: #f8fafc;
  margin-top: 0px;
  margin-bottom: 18px;

  @media (min-width: 768px) {
    font-size: 12px;
    margin-bottom: 18px;
  }
`

export const InputCard = styled.div`
  padding: 12px;
  margin: 10px;

  @media (max-width: 563px) {
    margin: 0px;
    padding: 0px;
  }
`

export const Input = styled.input`
  font-family: 'Roboto';
  width: 100%;
  background-color: #edeeff;
  border: 1px solid #475569;
  padding: 5px;
  padding-left: 12px;
  outline: none;
`

export const ErrorText = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  color: #ef4444;
  margin-top: 6px;
`
