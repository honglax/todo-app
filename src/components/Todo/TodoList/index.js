import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CloseIcon from '@assets/icons/close-icon.svg'
import CheckMarkIcon from '@assets/icons/check-mark.svg'
import { NOOP_FUNC } from '@constants/'

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
  text-decoration: ${({ isCompleted }) => (isCompleted ? 'line-through' : '')};
  opacity: ${({ isCompleted }) => (isCompleted ? '0.5' : 1)};
  transition: all 0.2s ease-in-out;
  flex: 1;
`

const CheckBox = styled.div`
  background-image: ${({ isCompleted, bgImg }) =>
    isCompleted ? `url(${bgImg})` : 'none'};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px 20px;
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

const TodoList = ({ tasks, onToggleTaskStatus, onDeleteTasks }) => {
  return (
    <Wrapper>
      {tasks.map(({ _id, content, isCompleted }) => (
        <TodoItem key={_id}>
          <CheckBox
            isCompleted={isCompleted}
            bgImg={CheckMarkIcon}
            onClick={() => onToggleTaskStatus(_id)}
          />
          <Text isCompleted={isCompleted}>{content}</Text>
          <Img
            src={CloseIcon}
            alt='Delete task'
            onClick={() => onDeleteTasks(_id)}
          />
        </TodoItem>
      ))}
    </Wrapper>
  )
}

TodoList.propTypes = {
  tasks: PropTypes.array,
  onToggleTaskStatus: PropTypes.func,
  onDeleteTasks: PropTypes.func
}

TodoList.defaultProps = {
  tasks: [],
  onToggleTaskStatus: NOOP_FUNC,
  onDeleteTasks: NOOP_FUNC
}

export default TodoList
