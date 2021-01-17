import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new Appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '1933723a2c9279df9a4c13b1aa6b72bc',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1933723a2c9279df9a4c13b1aa6b72bc');
  });

  it('should not be able to create two Appointment on the same time', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointmentDate = new Date(2020, 4, 10, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '1933723a2c9279df9a4c13b1aa6b72bc',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '1933723a2c9279df9a4c13b1aa6b72bc',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
