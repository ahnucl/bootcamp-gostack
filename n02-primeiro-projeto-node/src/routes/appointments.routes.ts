import { parseISO, startOfHour } from 'date-fns';
import { Router } from 'express';

import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();

  return response.json(appointments);
});

appointmentRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = parseISO(date); // transformação de dados
  // const appointmentDate = startOfHour(parsedDate); // regra de negócio

  return response.json(appointment);
});

export default appointmentRouter;
