import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Todo } from './entities/todo.entity'
import {
  ITodoServiceCreate,
  ITodoServiceDelete,
  ITodoServiceUpdate,
} from './interfaces/todo-service.interface'

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find()
  }

  create({ createTodoInput }: ITodoServiceCreate): Promise<Todo> {
    return this.todoRepository.save(createTodoInput)
  }

  update({ updateTodoInput }: ITodoServiceUpdate): Promise<Todo> {
    return this.todoRepository.save(updateTodoInput)
  }

  async delete({ id }: ITodoServiceDelete): Promise<boolean> {
    const result = await this.todoRepository.delete(id)

    return result.affected > 0
  }
}
