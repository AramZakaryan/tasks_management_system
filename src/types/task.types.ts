import { ObjectId } from 'mongodb'

export type Task = {
  _id: ObjectId;
  title: string;
  description: string;
  assignedMember: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  updatedAt: Date;
  completedAt: Date;
  dueDate: Date
}

export type TaskFromClient = Partial<Omit<Task, '_id' | 'createdAt' | 'updatedAt' | 'completedAt'>>
export type TaskToClient = Partial<Omit<Task, '_id'>> & Pick<Task, '_id'>



