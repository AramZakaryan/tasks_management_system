import { ObjectId } from 'mongodb'

export type Task = {
  _id?: ObjectId;
  title: string;
  description: string;
  assignedMember: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
}



