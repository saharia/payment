import { Test, TestingModule } from '@nestjs/testing';
import { PaymentGatewayPlanService } from './payment-gateway-plan.service';

describe('PaymentGatewayPlanService', () => {
  let service: PaymentGatewayPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentGatewayPlanService],
    }).compile();

    service = module.get<PaymentGatewayPlanService>(PaymentGatewayPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
