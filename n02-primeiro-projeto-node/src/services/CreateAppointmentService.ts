import Appointment from '../models/Appointment';

class CreateAppointmentService {
  public execute(): Appointment {
    const appointmentDate = startOfHour(parsedDate); // regra de negócio

    const findAppointmentInSameDate = appointmentsRepository.findByDate(
      parsedDate,
    );

    if (findAppointmentInSameDate) {
      return response
        .status(400)
        .json({ message: 'This appointment is already booked.' });
    }

    const appointment = appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });
  }
}

export default CreateAppointmentService;
