import HttpFactory from '../factory';
import { ICreateAccountInput, ICreateAccountResponse, ILoginInput, ILoginResponse } from '@/types/repository-types';

class AuthModule extends HttpFactory {
  private RESOURCE = '/auth';

  async login(credentials: ILoginInput): Promise<ILoginResponse> {
    const path = `${this.RESOURCE}/login`
    return await this.call<ILoginResponse>('POST', path, credentials);
  }

  async logout(): Promise<ICreateAccountResponse> {
    const path = `${this.RESOURCE}/logout`
    return await this.call<ICreateAccountResponse>('POST', path);
  }

  async register(account: ICreateAccountInput): Promise<ICreateAccountResponse> {
    const path = `${this.RESOURCE}/register`
    return await this.call<ICreateAccountResponse>('POST', path, account);
  }

}

export default AuthModule;
