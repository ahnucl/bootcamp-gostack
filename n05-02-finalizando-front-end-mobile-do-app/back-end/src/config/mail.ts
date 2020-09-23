interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: '', // e-mail precisa estar configurado no SES
      name: 'Leo Cunha',
    },
  },
} as IMailConfig;
