import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import * as ejs from 'ejs';
import { map, omit, pick } from 'lodash';
import { ConfigService } from '@nestjs/config';
import { 
  Brand,
  PaymentGateway,
  CreateWidgetInput,
  WidgetResponse
} from '@brightauto/api-models';
import * as fs from 'fs';

@Injectable()
export class WidgetService {

  constructor(
    private configService: ConfigService
  ) {}

  @InjectRepository(Brand)
  private readonly brand: Repository<Brand>;

  @InjectRepository(PaymentGateway)
  private readonly paymentGateway: Repository<PaymentGateway>;

  async createWidget(createWidgetInput: CreateWidgetInput): Promise<WidgetResponse> {
    try {
      const paymentGatewayIds = createWidgetInput.paymentGatewayIds;
      const paymentGateways = await this.paymentGateway.find({ where: { id: In(paymentGatewayIds) }, select: { id: true, name: true } });
      const data = {
        paymentData: omit(createWidgetInput, 'paymentGatewayIds'),
        scriptPath: this.configService.get('widgetScriptUrl'),
        paymentGateways: map(paymentGateways, i => pick(i, [ 'id', 'name' ]))
      }
      const html = await ejs.renderFile(__dirname + '/templates/widget.ejs', { data });
      return { html };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

}
