import { NestFactory } from '@nestjs/core';
import { ShippingModule } from './shipping.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(ShippingModule, {
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 3002
    }
  });
  await app.listen().then(() => console.log('Microservice shipping start on 3002'));
}
bootstrap();
