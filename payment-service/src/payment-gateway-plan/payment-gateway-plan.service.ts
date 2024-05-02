import {
  PaymentGatewayPlan,
} from '@brightauto/api-models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentGatewayPlanService {

  @InjectRepository(PaymentGatewayPlan)
  private readonly paymentGatewayPlan: Repository<PaymentGatewayPlan>;

  
  async findAll(): Promise<PaymentGatewayPlan[]> {
    try {
      return await this.paymentGatewayPlan.find({ relations: [ "paymentGateway", "paymentPlan" ] });
    } catch (error) {
      throw error;
    }
  }
}
