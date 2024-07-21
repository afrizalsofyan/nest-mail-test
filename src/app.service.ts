import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private mail: MailerService) {}
  getHello(): string {
    return 'Hello World!';
  }
  testMail() {
    return this.mail.sendMail({
      to: 'john@gmail.com',
      from: 'emailsaya@gmail.com',
      subject: `Register User`,
      template: 'register-success',
      context: {
        name: 'John',
      },
    });
  }
}
