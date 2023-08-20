import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateTodoInput } from './dto/create-todo.input'
import { UpdateTodoInput } from './dto/update-todo.input'
import { Todo } from './entities/todo.entity'
import { TodoService } from './todo.service'

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo])
  fetchTodo(): Promise<Todo[]> {
    return this.todoService.findAll()
  }

  @Mutation(() => Todo)
  createTodo(
    @Args('createTodoInput') createTodoInput: CreateTodoInput,
  ): Promise<Todo> {
    return this.todoService.create({ createTodoInput })
  }

  @Mutation(() => Todo)
  updateTodo(
    @Args('updateTodoInput') updateTodoInput: UpdateTodoInput,
  ): Promise<Todo> {
    return this.todoService.update({ updateTodoInput })
  }

  @Mutation(() => Boolean)
  deleteTodo(@Args('id') id: string): Promise<boolean> {
    return this.todoService.delete({ id })
  }
}
