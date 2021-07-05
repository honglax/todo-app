import { ORDER_BY } from '@constants/'

export const isPlural = (number) => number > 1

export const compareTaskByDate = (taskA, taskB, orderBy = ORDER_BY['DESC']) => {
  const dateA = new Date(taskA.createdAt)
  const dateB = new Date(taskB.createdAt)

  return (dateA - dateB) * (orderBy === ORDER_BY['ASC'] ? 1 : -1)
}

export const sortTaskList = (taskList, orderBy) => {
  return taskList.sort(compareTaskByDate)
}
