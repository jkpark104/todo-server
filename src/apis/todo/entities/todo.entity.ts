import { Field, ObjectType } from '@nestjs/graphql'
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
@ObjectType()
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string

  @Column({ default: false })
  @Field(() => Boolean)
  isCompleted: boolean

  @Column()
  @Field(() => String)
  description: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
