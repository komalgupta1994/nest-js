import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Neo4jService } from '@dbc-tech/nest-neo4j';

@Injectable()
export class OrderService {
  constructor(private readonly neo4jService: Neo4jService) {}

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
