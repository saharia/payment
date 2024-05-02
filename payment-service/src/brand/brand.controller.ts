import { 
  User,
  CreateBrandInput,
  Brand,
  UpdateBrandInput,
  RemoveBrandInput,
  RemoveResponse,
  FindBrandInput,
  AuthUser
} from '@brightauto/api-models';
import { Controller, ExecutionContext } from '@nestjs/common';
import { Ctx, MessagePattern, Payload } from '@nestjs/microservices';
import { BrandService } from './brand.service';

@Controller()
export class BrandController {
  
  constructor(private readonly brandService: BrandService) {}

  @MessagePattern('brand.create')
  create(@AuthUser() user: User, @Payload('data') createBrandInput: CreateBrandInput, @Ctx() context: ExecutionContext): Promise<Brand> {
    return this.brandService.create(user, createBrandInput);
  }

  @MessagePattern('brand.update')
  update(@Payload('data') updateBrandInput: UpdateBrandInput): Promise<Brand> {
    return this.brandService.update(updateBrandInput);
  }

  @MessagePattern('brand.remove')
  async remove(@Payload('data') removeBrandInput: RemoveBrandInput): Promise<RemoveResponse> {
    await this.brandService.remove(removeBrandInput);
    return new RemoveResponse();
  }

  @MessagePattern('brand.findOne')
  findOne(@Payload('data') findBrandInput: FindBrandInput): Promise<Brand> {
    return this.brandService.findOne(findBrandInput);
  }

  @MessagePattern('brand.findAll')
  findAll(): Promise<Brand[]> {
    return this.brandService.findAll();
  }
}
