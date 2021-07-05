import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ArrowDown from '@assets/icons/arrow-down.svg'
import { NOOP_FUNC } from '@constants/'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  box-shadow: ${({ theme }) => theme.colors.boxShadow.primary} 0 -2px 1px 0px inset;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  position: relative;
`

const ToggleAll = styled.div`
  cursor: ${({ active }) => (active ? 'pointer' : 'default')};
  font-size: 22px;
  color: ${({ theme }) => theme.colors.typo.toggle};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  width: 30px;
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

const Img = styled.img`
  opacity: 0.3;
  height: 25px;
  width: 25px;
  transition: opacity 0.3s ease-in-out;

  ${({ theme }) =>
    theme.active &&
    `
  &:hover {
    opacity: 1;
  }
  `}
`

const TodoInput = ({ onToggleAll, onKeyPress }) => {
  return (
    <Wrapper>
      <ToggleAll onClick={onToggleAll}>
        <Img src={ArrowDown} alt='Toggle all tasks' />
      </ToggleAll>
      <Input
        autoFocus
        placeholder='What needs to be done?'
        onKeyPress={onKeyPress}
      />
    </Wrapper>
  )
}

TodoInput.propTypes = {
  onToggleAll: PropTypes.func,
  onKeyPress: PropTypes.func
}

TodoInput.defaultProps = {
  onToggleAll: NOOP_FUNC,
  onKeyPress: NOOP_FUNC
}

export default TodoInput
