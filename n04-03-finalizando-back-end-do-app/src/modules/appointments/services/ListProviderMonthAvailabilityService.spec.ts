import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailabilityService', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it("should be able to list a providers's monthly availability ", async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4).getTime();
    });

    await fakeAppointmentsRepository.create({
      user_id: 'customer',
      provider_id: 'user',
      date: new Date(2020, 4, 12, 8, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      user_id: 'customer',
      provider_id: 'user',
      date: new Date(2020, 4, 12, 9, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      user_id: 'customer',
      provider_id: 'user',
      date: new Date(2020, 4, 12, 10, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      user_id: 'customer',
      provider_id: 'user',
      date: new Date(2020, 4, 12, 11, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      user_id: 'customer',
      provider_id: 'user',
      date: new Date(2020, 4, 12, 12, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      user_id: 'customer',
      provider_id: 'user',
      date: new Date(2020, 4, 12, 13, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      user_id: 'customer',
      provider_id: 'user',
      date: new Date(2020, 4, 12, 14, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      user_id: 'customer',
      provider_id: 'user',
      date: new Date(2020, 4, 12, 15, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      user_id: 'customer',
      provider_id: 'user',
      date: new Date(2020, 4, 12, 16, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      user_id: 'customer',
      provider_id: 'user',
      date: new Date(2020, 4, 12, 17, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      user_id: 'customer',
      provider_id: 'user',
      date: new Date(2020, 4, 21, 8, 0, 0),
    });

    const avaiability = await listProviderMonthAvailability.execute({
      provider_id: 'user',
      year: 2020,
      month: 5,
    });

    expect(avaiability).toEqual(
      expect.arrayContaining([
        { day: 12, available: false },
        { day: 20, available: true },
        { day: 21, available: true },
      ]),
    );
  });

  it('should be able to list a past month as having no availability', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 6).getTime();
    });

    const avaiability = await listProviderMonthAvailability.execute({
      provider_id: 'user',
      year: 2020,
      month: 5,
    });

    expect(avaiability).toEqual(
      expect.arrayContaining([
        { day: 12, available: false },
        { day: 20, available: false },
        { day: 21, available: false },
      ]),
    );
  });

  it('should be able to list past days in month as having no availability', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 4, 8).getTime();
    });

    const avaiability = await listProviderMonthAvailability.execute({
      provider_id: 'user',
      year: 2020,
      month: 5,
    });

    expect(avaiability).toEqual(
      expect.arrayContaining([
        { day: 1, available: false },
        { day: 2, available: false },
        { day: 3, available: false },
        { day: 4, available: true },
        { day: 5, available: true },
      ]),
    );
  });
});
