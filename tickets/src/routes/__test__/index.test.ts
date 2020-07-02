import request from 'supertest';
import { app } from '../../app';

const createTicket = () => {
  return request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({ title: 'dasdasd', price: 10 })
    .expect(201);
};

it('can fetch list of tickets ', async () => {
  await createTicket();
  await createTicket();
  const ticketResponse = await request(app).get(`/api/tickets`).send({});
  expect(ticketResponse.body.length).toEqual(2);
});
