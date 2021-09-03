import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSmile(): string {
    return ':)';
  }
}
