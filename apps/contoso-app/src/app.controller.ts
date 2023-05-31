import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/products/all')
  getAllProduct() {
    return [{
      id: 1,
      name: 'Product 1',
      price: 10
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20
    },
    {
      id: 3,
      name: 'Product 3',
      price: 30
    }]
  }
}
