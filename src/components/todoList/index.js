import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@assets/icons/close-icon.svg'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`

const TodoItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.todoContent};
  color: ${({ theme }) => theme.colors.typo.todoContent};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  position: relative;

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    img {
      opacity: 0.2;
    }
  }
`

const Text = styled.div`
  font-size: 24px;
  line-height: 28px;
  flex: 1;
`

const CheckBox = styled.div`
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.boxShadow.todoPrimary};
  border-radius: 50%;
  margin-right: 15px;
  height: 30px;
  width: 30px;
`

const Img = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  opacity: 0;
  margin-right: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 1 !important;
  }
`

const TASKS = [
  {
    id: '1',
    content: 'Wake up',
    status: 'completed'
  },
  {
    id: '2',
    content: 'Breakfast',
    status: 'active'
  },
  {
    id: '3',
    content: 'Go to school',
    status: 'active'
  }
]

const TodoList = () => {
  return (
    <Wrapper>
      {TASKS.map((task) => (
        <TodoItem key={task.id}>
          <CheckBox />
          <Text>{task.content}</Text>
          <Img src={CloseIcon} alt='Delete task' />
        </TodoItem>
      ))}
    </Wrapper>
  )
}

export default TodoList
