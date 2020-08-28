import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'GET http://ip/categories POST http://ip/categories {nome:cat1}';
  }
}
