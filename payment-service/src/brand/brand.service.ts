import { 
  Brand,
  User,
  CreateBrandInput,
  UpdateBrandInput,
  RemoveBrandInput,
  FindBrandInput,
  PaymentGatewayKey
} from '@brightauto/api-models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { keyBy } from 'lodash';

@Injectable()
export class BrandService {

  @InjectRepository(Brand)
  private readonly brand: Repository<Brand>;

  @InjectRepository(PaymentGatewayKey)
  private readonly paymentGatewayKey: Repository<PaymentGatewayKey>;

  async create(user: User, createBrandInput: CreateBrandInput): Promise<Brand> {
    try {
      createBrandInput['user'] = user;
      const newBrand = this.brand.create(createBrandInput);
      return await this.brand.save(newBrand);
    } catch (error) {
      throw error;
    }
  }

  async update(updateBrandInput: UpdateBrandInput): Promise<Brand> {
    try {
      let brandUpdate = await this.brand.preload(updateBrandInput);
      /* Check and update primary key id avoid duplicate issue */
      if(brandUpdate.paymentGatewayKeys.length) {
        let paymentGatewayKeysExists = await this.paymentGatewayKey.find({ where: { paymentGateway: { id: brandUpdate.id } }, relations: [ "paymentGateway" ] });
        const paymentGatewayKeyById = keyBy(paymentGatewayKeysExists, 'paymentGateway.id');
        for(let [index, paymentGatewayKey] of brandUpdate.paymentGatewayKeys.entries()) {
          if(paymentGatewayKeyById[paymentGatewayKey.paymentGateway.id]) {
            brandUpdate.paymentGatewayKeys[index].id = paymentGatewayKeyById[paymentGatewayKey.paymentGateway.id].id;
          }
        }
      }
      return await this.brand.save(brandUpdate);
    } catch (error) {
      throw error;
    }
  }

  async remove(removeBrandInput: RemoveBrandInput): Promise<boolean> {
    try {
      await this.brand.softDelete(removeBrandInput.id);
      return true;
    } catch (error) {
      throw error;
    }
  }
  
  async findOne(findBrandInput: FindBrandInput): Promise<Brand> {
    try {
      const query = {
        where: {
          id: findBrandInput.id,
        },
        relations: [ "paymentGatewayKeys", "paymentGatewayKeys.paymentGatewayPlans.paymentPlan", 
        "paymentGatewayKeys.paymentGatewayPlans.paymentGateway",
        "paymentGatewayKeys.paymentGateway", "user" ]
      };
      return await this.brand.findOneOrFail(query, );
    } catch (error) {
      throw error;
    }
  }
  
  async findAll(): Promise<Brand[]> {
    try {
      return await this.brand.find({ relations: [ "paymentGatewayKeys", "paymentGatewayKeys.paymentGatewayPlans", "paymentGatewayKeys.paymentGatewayPlans.paymentPlan", 
        "paymentGatewayKeys.paymentGateway", "user" ] });
    } catch (error) {
      throw error;
    }
  }
}
