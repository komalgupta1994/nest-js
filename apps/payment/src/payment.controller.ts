import { Controller, Get, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get()
  getHello(): string {
    return this.paymentService.getHello();
  }

  @MessagePattern('makeUpiPayment')
  makeUpiPayment(orderInfo) {
    console.log('orderInfo', orderInfo);
    return 'UPI Successful';
  }

  @MessagePattern('makeCardPayment')
  makeCardPayment() {
    return 'Card Successful';
  }

  @EventPattern('makeNetbankingPayment')
  makeNetbankingPayment() {

  }

  selectPaymentType() {

  }
}
