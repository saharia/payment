import { Controller, Get, Inject, OnModuleInit, Res } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom, Observable, timeout, toArray } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController implements OnModuleInit {
  constructor(private readonly appService: AppService) {}

  @Inject('NAT_SERVICE')
  protected readonly client: ClientProxy;
  
  async onModuleInit() {
    console.log("client connected in api service")
  }
  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  async getTest(@Res() res) {
    try {
      let data = await lastValueFrom(this.client.send('upload.test', { hello: 1 }).pipe(timeout(1000)));
      console.log(data);
      return res.redirect('https://www.example.com');
    } catch (error) {
      return res.redirect('https://www.example.com?message=' + error.message);
    }
  }
}
