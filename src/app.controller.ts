import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  welcomeMsg = 'Welcome to Afrihub API';

  constructor() {}

  @Get()
  getHello(): string {
    return this.welcomeMsg;
  }
}
