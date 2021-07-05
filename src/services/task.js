import { v4 as uuidv4 } from 'uuid'
import { LOCAL_STORAGE_ITEM } from '@constants/'

const setLocalStorageItem = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value))
}

export const getAllTasksService = () => {
  const allTasks = localStorage.getItem(LOCAL_STORAGE_ITEM)
  return allTasks ? JSON.parse(allTasks) : []
}

export const addNewTaskService = (content) => {
  const _id = uuidv4()
  const today = new Date().toISOString()
  const currentTaskList = getAllTasksService()
  const newTask = {
    _id,
    content,
    isCompleted: false,
    createdAt: today,
    updatedAt: today
  }

  setLocalStorageItem(LOCAL_STORAGE_ITEM, [...currentTaskList, newTask])
  return newTask
}

export const deleteTaskService = (taskId) => {
  const currentTaskList = getAllTasksService()
  const newTaskList = currentTaskList.filter(({ _id }) => _id !== taskId)

  setLocalStorageItem(LOCAL_STORAGE_ITEM, newTaskList)
  return newTaskList
}

export const updateTaskService = (updatedTaskList) => {
  setLocalStorageItem(LOCAL_STORAGE_ITEM, updatedTaskList)
}
