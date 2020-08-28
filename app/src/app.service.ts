import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "GET http://ip:porta/categories POST http://ip:porta/categories {'nome':'cat X'}";
  }
}
