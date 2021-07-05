import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter/'
import { FILTER_TYPES, KEY_CODES } from '@constants/'
import { sortTaskList } from '@utils/'
import {
  getAllTasksService,
  addNewTaskService,
  updateTaskService
} from '@services/task'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  witdh: 100%;
`

const Todo = () => {
  const [tasks, setTasks] = useState([])
  const [filteredTasks, setFilteredTasks] = useState([])
  const [filterType, setFilterType] = useState(FILTER_TYPES['ALL'])
  const [isCheckingAll, setIsCheckingAll] = useState(false)

  useEffect(() => {
    initTaskList()
  }, [])

  useEffect(() => {
    getFilteredTaskList()
    getIsCheckingAll()
  }, [tasks, filterType])

  const initTaskList = () => {
    const allTasks = sortTaskList(getAllTasksService())
    setTasks(allTasks)
  }

  const getIsCheckingAll = () => {
    const isCheckingAll = !tasks.find(
      ({ isCompleted }) => isCompleted === false
    )
    setIsCheckingAll(isCheckingAll)
  }

  const getFilteredTaskList = () => {
    setFilteredTasks(filterListByType(tasks, filterType))
  }

  const filterListByType = (taskList, type) =>
    taskList.filter((task) => {
      const { isCompleted } = task
      switch (type) {
        case FILTER_TYPES['ACTIVE']:
          return isCompleted === false
        case FILTER_TYPES['COMPLETE']:
          return isCompleted === true
        default:
          return true
      }
    })

  const handleTaskList = (newTaskList) => {
    const taskList = sortTaskList(newTaskList)
    setTasks(taskList)
    setFilteredTasks(filterListByType(taskList, filterType))
  }

  const addTask = (content) => {
    const newTask = addNewTaskService(content)
    const newTaskList = [...tasks, newTask]
    handleTaskList(newTaskList)
  }

  const onToggleAll = () => {
    const updatedTaskList = tasks.map((task) => ({
      ...task,
      isCompleted: !isCheckingAll,
      updatedAt: new Date().toISOString()
    }))
    setIsCheckingAll(!isCheckingAll)
    handleTaskList(updatedTaskList)
    updateTaskService(updatedTaskList)
  }

  const onAddNewTask = (event) => {
    const keyCode = event.which || event.keyCode
    const content = event.currentTarget.value
    if (keyCode === KEY_CODES['ENTER'] && content) {
      addTask(content)
      event.currentTarget.value = ''
    }
  }

  const onToggleTaskStatus = (_id) => {
    const updatedTaskList = tasks.map((task) =>
      task._id === _id
        ? {
            ...task,
            isCompleted: !task.isCompleted,
            updatedAt: new Date().toISOString()
          }
        : task
    )
    handleTaskList(updatedTaskList)
    updateTaskService(updatedTaskList)
  }

  const onDeleteTask = (taskId) => {
    const updatedTaskList = tasks.filter(({ _id }) => _id !== taskId)
    handleTaskList(updatedTaskList)
    updateTaskService(updatedTaskList)
  }

  const onFilterTasks = (filterType) => {
    setFilterType(filterType)
    setFilteredTasks(filterListByType(tasks, filterType))
  }

  const clearCompletedTask = () => {
    const newTaskList = tasks.filter(({ isCompleted }) => isCompleted === false)
    handleTaskList(newTaskList)
    updateTaskService(newTaskList)
  }

  return (
    <Wrapper>
      <TodoInput onToggleAll={onToggleAll} onKeyPress={onAddNewTask} />
      {tasks.length > 0 ? (
        <TodoList
          tasks={filteredTasks}
          onToggleTaskStatus={onToggleTaskStatus}
          onDeleteTasks={onDeleteTask}
        />
      ) : (
        <></>
      )}
      <TodoFooter
        tasks={tasks}
        filterType={filterType}
        onFilterTasks={onFilterTasks}
        clearCompletedTask={clearCompletedTask}
      />
    </Wrapper>
  )
}

export default Todo
