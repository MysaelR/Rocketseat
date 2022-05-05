import nodemailer from 'nodemailer'

import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "288a7622ff93ef",
      pass: "a3efa1f3c7afba"
    }
  });
 

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData){
      await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Mysael Ribeiro <mysael.ti@gmail.com>',
            subject: subject,
            html: body,
        });
    };
}