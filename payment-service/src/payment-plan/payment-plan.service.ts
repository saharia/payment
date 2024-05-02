import { 
  PaymentPlan,
  CreatePaymentPlanInput,
  UpdatePaymentPlanInput,
  RemovePaymentPlanInput,
  FindPaymentPlanInput
} from '@brightauto/api-models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentPlanService {

  @InjectRepository(PaymentPlan)
  private readonly paymentPlan: Repository<PaymentPlan>;

  async create(createPaymentPlanInput: CreatePaymentPlanInput): Promise<PaymentPlan> {
    try {
      const paymentPlan = this.paymentPlan.create({ name: createPaymentPlanInput.name });
      return await this.paymentPlan.save(paymentPlan);
    } catch (error) {
      throw error;
    }
  }

  async update(updatePaymentPlanInput: UpdatePaymentPlanInput): Promise<PaymentPlan> {
    try {
      let paymentPlan = await this.paymentPlan.preload(updatePaymentPlanInput);
      return await this.paymentPlan.save(paymentPlan);
    } catch (error) {
      throw error;
    }
  }

  async remove(removePaymentPlanInput: RemovePaymentPlanInput): Promise<boolean> {
    try {
      await this.paymentPlan.softDelete(removePaymentPlanInput.id);
      return true;
    } catch (error) {
      throw error;
    }
  }
  
  async findOne(findPaymentPlanInput: FindPaymentPlanInput): Promise<PaymentPlan> {
    try {
      const query = {
        where: {
          id: findPaymentPlanInput.id,
        },
      };
      return await this.paymentPlan.findOneOrFail(query);
    } catch (error) {
      throw error;
    }
  }
  
  async findAll(): Promise<PaymentPlan[]> {
    try {
      return await this.paymentPlan.find({});
    } catch (error) {
      throw error;
    }
  }
}
