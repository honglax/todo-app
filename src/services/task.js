import { v4 as uuidv4 } from 'uuid'

export const getAllTasks = async () => {
  return []
}

export const createTask = async (content) => {
  const _id = uuidv4()
  const newTask = {
    _id,
    content,
    isCompleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
}
