import request from 'supertest';
import { app } from '../src/app';
import { runDb, stopDb } from '../src/utils/db';

beforeAll(async () => {
  await runDb();
});

afterAll(async () => {
  await stopDb();
});

describe('Task API', () => {
  let taskId: string;

  it('should create a new task', async () => {
    const response = await request(app)
      .post('/api/task')
      .send({
        title: 'New Task',
        description: 'Task description',
        assignedMember: 'Member 1',
        status: 'pending',
        priority: 'low',
        createdAt: new Date().toISOString(),
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    taskId = response.body._id; // Save task ID for other tests
  });

  it('should retrieve all tasks', async () => {
    const response = await request(app).get('/api/task');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should retrieve a task by ID', async () => {
    const response = await request(app).get(`/api/task/${taskId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id', taskId);
  });

  // it('should update a task status', async () => {
  //   const response = await request(app)
  //     .put(`/api/task/${taskId}/status`)
  //     .send({ status: 'completed' });
  //
  //   expect(response.status).toBe(200);
  //   expect(response.body).toHaveProperty('status', 'completed');
  // });

  it('should return 404 for a non-existent task', async () => {
    const response = await request(app).get('/api/task/nonexistentid');
    expect(response.status).toBe(404);
  });
});
