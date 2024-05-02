import { NatService } from '@brightauto/api-models';
import { Brand } from '@brightauto/api-models';
import { CreateBrandInput } from '@brightauto/api-models';
import { FindAllBrandInput } from '@brightauto/api-models';
import { FindBrandInput } from '@brightauto/api-models';
import { RemoveBrandInput } from '@brightauto/api-models';
import { UpdateBrandInput } from '@brightauto/api-models';
import { OnModuleInit } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver('Brand')
export class BrandResolver implements OnModuleInit {

  constructor(private natService: NatService) {}

  async onModuleInit() {
  }

  @Mutation(() => Brand, { name: 'createBrand' })
  create(@Context() context: any, @Args('createBrandInput') createBrandInput: CreateBrandInput) {
    return this.natService.send(context, 'brand.create', createBrandInput, 'graphQl');
  }

  @Mutation(() => Brand, { name: 'updateBrand' })
  update(@Context() context: any, @Args('updateBrandInput') updateBrandInput: UpdateBrandInput) {
    return this.natService.send(context, 'brand.update', updateBrandInput, 'graphQl');
  }

  @Mutation(() => Brand, { name: 'removeBrand' })
  remove(@Context() context: any, @Args('removeBrandInput') removeBrandInput: RemoveBrandInput) {
    return this.natService.send(context, 'brand.remove', removeBrandInput, 'graphQl');
  }
  
  @Query(() => Brand, { name: 'brand' })
  findOne(@Context() context: any, @Args('findBrandInput') findBrandInput: FindBrandInput) {
    return this.natService.send(context, 'brand.findOne', findBrandInput, 'graphQl');
  }

  @Query(() => [Brand], { name: 'brands' })
  findAll(@Context() context: any, @Args('findAllBrandInput', { nullable: true }) findAllBrandInput: FindAllBrandInput) {
    return this.natService.send(context, 'brand.findAll', findAllBrandInput, 'graphQl');
  }

}
