import { 
  CreateWidgetInput,
  WidgetResponse
} from '@brightauto/api-models';
import { Controller, ExecutionContext } from '@nestjs/common';
import { Ctx, MessagePattern, Payload } from '@nestjs/microservices';
import { WidgetService } from './widget.service';

@Controller()
export class WidgetController {
  
  constructor(private readonly widgetService: WidgetService) {}

  @MessagePattern('widget.create')
  create(@Payload('data') createWidgetInput: CreateWidgetInput, @Ctx() context: ExecutionContext): Promise<WidgetResponse> {
    return this.widgetService.createWidget(createWidgetInput);
  }

}
