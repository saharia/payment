import { NatService } from '@brightauto/api-models';
import { CreateWidgetInput } from '@brightauto/api-models';
import { WidgetResponse } from '@brightauto/api-models';
import { OnModuleInit } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';

@Resolver('Widget')
export class WidgetResolver implements OnModuleInit {

  constructor(private natService: NatService) {}

  async onModuleInit() {
  }

  @Mutation(() => WidgetResponse, { name: 'createWidget' })
  create(@Context() context: any, @Args('createWidgetInput') createWidgetInput: CreateWidgetInput) {
    return this.natService.send(context, 'widget.create', createWidgetInput, 'graphQl');
  }

}
