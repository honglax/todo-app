import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getAllTasks } from '@services/task'
import { TodoInput, TodoFooter, TodoList } from '@components/'

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 550px;

  * {
    font-family: 'Lato';
  }
`

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.typo.header};
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  margin: 30px 0;
`

const TodoWrapper = styled.div`
  box-shadow: 0 2px 4px 0 ${({ theme }) => theme.colors.boxShadow.todoPrimary},
    0 25px 50px 0 ${({ theme }) => theme.colors.boxShadow.todoSecondary};
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`

const App = () => {
  const [allTasks, setAllTasks] = useState([])

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    const tasks = await getAllTasks()
    console.log(tasks)
    setAllTasks(tasks)
  }

  return (
    <Container>
      <Header>todos</Header>
      <TodoWrapper>
        <TodoInput />
        <TodoList />
        <TodoFooter />
      </TodoWrapper>
    </Container>
  )
}

export default App
