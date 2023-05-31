import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Neo4jService } from '@dbc-tech/nest-neo4j';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrderService {
  constructor(private readonly neo4jService: Neo4jService, @Inject('PAYMENT_SERVICE') private paymentClientMS: ClientProxy) {
    try {
      this.paymentClientMS.connect();
    } catch {
      console.log('error while connecting payment MS');
    }
  }

  async create(createOrderDto: CreateOrderDto) {
    const query = `Create (o: Order 
      {
        id: $orderId,
        userId: $userId,
        productIds: $productIds,
        date: $orderDate,
        status: $orderStatus,
        total: $orderTotal,
        address: $orderAddress
      }) return o`;

      const orderId = Date.now().toString();
      const input = {
        orderId,
        ...createOrderDto
      };
      const result = await this.neo4jService.write(query, input);
      this.paymentClientMS.send('makeUpiPayment', {orderId, orderTotal: createOrderDto.orderTotal}).subscribe((res) => {
        console.log('res---', res);
      })
      return result;
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
