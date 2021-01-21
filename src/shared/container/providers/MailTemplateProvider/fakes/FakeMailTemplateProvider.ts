import IMailTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailProvider implements IMailTemplateProvider {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}

export default FakeMailProvider;
