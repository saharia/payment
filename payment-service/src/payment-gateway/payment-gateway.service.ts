import { 
  PaymentGateway,
  CreatePaymentGatewayInput,
  UpdatePaymentGatewayInput,
  RemovePaymentGatewayInput,
  FindPaymentGatewayInput,
  PaymentGatewayPlan
} from '@brightauto/api-models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { keyBy } from 'lodash';

@Injectable()
export class PaymentGatewayService {

  @InjectRepository(PaymentGateway)
  private readonly paymentGateway: Repository<PaymentGateway>;

  @InjectRepository(PaymentGatewayPlan)
  private readonly paymentGatewayPlan: Repository<PaymentGatewayPlan>;

  async create(createPaymentGatewayInput: CreatePaymentGatewayInput): Promise<PaymentGateway> {
    try {
      const paymentGatewayCreate = this.paymentGateway.create(createPaymentGatewayInput);
      return await this.paymentGateway.save(paymentGatewayCreate);
    } catch (error) {
      throw error;
    }
  }

  async update(updatePaymentGatewayInput: UpdatePaymentGatewayInput): Promise<PaymentGateway> {
    try {
      let paymentGatewayUpdate = await this.paymentGateway.preload(updatePaymentGatewayInput);
      /* Check and update primary key id avoid duplicate issue */
      if(paymentGatewayUpdate.paymentGatewayPlans.length) {
        let paymentGatewayPlansExists = await this.paymentGatewayPlan.find({ where: { paymentGateway: { id: paymentGatewayUpdate.id } }, relations: [ "paymentPlan" ] });
        const paymentGatewayPlanById = keyBy(paymentGatewayPlansExists, 'paymentPlan.id');
        for(let [index, paymentGatewayPlan] of paymentGatewayUpdate.paymentGatewayPlans.entries()) {
          if(paymentGatewayPlanById[paymentGatewayPlan.paymentPlan.id]) {
            paymentGatewayUpdate.paymentGatewayPlans[index].id = paymentGatewayPlanById[paymentGatewayPlan.paymentPlan.id].id;
          }
        }
      }
      return await this.paymentGateway.save(paymentGatewayUpdate);
    } catch (error) {
      throw error;
    }
  }

  async remove(removePaymentGatewayInput: RemovePaymentGatewayInput): Promise<boolean> {
    try {
      await this.paymentGateway.softDelete(removePaymentGatewayInput.id);
      return true;
    } catch (error) {
      throw error;
    }
  }
  
  async findOne(findPaymentGatewayInput: FindPaymentGatewayInput): Promise<PaymentGateway> {
    try {
      const query = {
        where: {
          id: findPaymentGatewayInput.id,
        },
        relations: [ "paymentGatewayPlans", "paymentGatewayPlans.paymentPlan" ]
      };
      return await this.paymentGateway.findOneOrFail(query);
    } catch (error) {
      throw error;
    }
  }
  
  async findAll(): Promise<PaymentGateway[]> {
    try {
      return await this.paymentGateway.find({ relations: [ "paymentGatewayKeys", "paymentGatewayPlans", "paymentGatewayPlans.paymentPlan" ] });
    } catch (error) {
      throw error;
    }
  }
}
