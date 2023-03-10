import request from 'supertest';
import app from '../../src/app';
import User from '../../src/models/user.model';

describe('User Routes', () => {
  let testUser: User;

  beforeEach(() => {
    testUser = {
      name: 'John Doe',
      password: 'myPassword',
    };
  });

  it('should add a new user', async () => {
    const response = await request(app).post('/users').send(testUser);
    expect(response.status).toEqual(201);
    expect(response.body).toEqual(testUser);
  });

  it('should get all users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
});
