import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  box-shadow: ${({ theme }) => theme.colors.boxShadow.primary} 0 -2px 1px 0px inset;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  padding-left: 60px;
  position: relative;
`

const ToggleAll = styled.div`
  cursor: ${({ active }) => (active ? 'pointer' : 'default')};
  font-size: 22px;
  color: ${({ theme }) => theme.colors.typo.toggle};
  position: absolute;
  top: 50%;
  left: 25px;
  transform: translateY(-50%) rotate(90deg);
`

const Input = styled.input`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.typo.primary};
  font-size: 24px;
  font-weight: 100;
  flex: 1;
  line-height: 1.5;
  outline: none;

  &::placeholder {
    font-weight: 100;
    font-style: italic;
    opacity: 0.3;
  }
`

const onToggleAll = () => {
  console.log('Toggle All')
}

const onInputChange = (event) => {
  console.log('On Input change')
}

const TodoInput = () => {
  return (
    <Wrapper>
      <ToggleAll onClick={onToggleAll}>❯</ToggleAll>
      <Input placeholder='What needs to be done?' onChange={onInputChange} />
    </Wrapper>
  )
}

export default TodoInput
