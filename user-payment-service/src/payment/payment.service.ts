import { 
  Paypal, 
  Brand, 
  PaymentInput 
} from '@brightauto/api-models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaypalService } from '../paypal/paypal.service';
import { RazorpayService } from '../razorpay/razorpay.service';
import { StripeService } from '../stripe/stripe.service';

@Injectable()
export class PaymentService {

  constructor(
    private paypalService: PaypalService,
    private razorpayService: RazorpayService,
    private stripeService: StripeService
  ) {}

  @InjectRepository(Paypal)
  private readonly paypal: Repository<Paypal>;

  @InjectRepository(Brand)
  private readonly brand: Repository<Brand>;

  async initiatePayment(paymentInput: PaymentInput): Promise<any> {
    try {
      const brandEntity = await this.brand.findOneOrFail({ where: { id: paymentInput.primaryBrandId, paymentGatewayKeys: { paymentGateway: { id: paymentInput.paymentGatewayId } } }, 
        relations: [ "paymentGatewayKeys", "paymentGatewayKeys.paymentGateway" ] });
      // console.log(brandEntity);
      const paymentGatewayKeyEntity = brandEntity.paymentGatewayKeys[0];
      const paymentGateway = paymentGatewayKeyEntity.paymentGateway;
      let response;
      switch (paymentGateway.name.toLowerCase()) {
        case 'paypal':
          response = await this.paypalService.initiatePayment(paymentInput, paymentGatewayKeyEntity);
          break;

        case 'razorpay':
          response = await this.razorpayService.initiatePayment(paymentInput, paymentGatewayKeyEntity);
          break;

        case 'stripe':
          response = await this.stripeService.initiatePayment(paymentInput, paymentGatewayKeyEntity);
          break;
      
        default:
          break;
      }
      return response;
    } catch (error) {
      throw error;
    }
  }

}
