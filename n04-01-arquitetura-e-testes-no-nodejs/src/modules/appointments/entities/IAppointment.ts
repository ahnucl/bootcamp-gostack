// Sei que esse import está errado, mas a princípio estoiu deixando assim
import User from '@modules/users/infra/typeorm/entities/User';

export default interface IAppointment {
  id: string;
  provider_id: string;
  provider: User;
  date: Date;
  created_at: Date;
  updated_at: Date;
}
