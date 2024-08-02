import { Controller, Get, Version } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './decorators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Public()
  @Version('1')
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
