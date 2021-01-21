import ISendMailDTO from '../dtos/ISendMailDTO';

export default interface IMailProvider {
  sendMail({ to, from, subject }: ISendMailDTO): Promise<void>;
}
