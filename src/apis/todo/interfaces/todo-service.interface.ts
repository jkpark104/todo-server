import { CreateTodoInput } from '../dto/create-todo.input'
import { UpdateTodoInput } from '../dto/update-todo.input'

export interface ITodoServiceCreate {
  createTodoInput: CreateTodoInput
}

export interface ITodoServiceUpdate {
  updateTodoInput: UpdateTodoInput
}

export interface ITodoServiceDelete {
  id: string
}
