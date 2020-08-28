import { Controller } from '@nestjs/common';
import { Categories } from '../categories.entity';
import { CategoriesService } from './categories.service';
import { Get,Post,Put,Delete, Body, Param } from  '@nestjs/common';

@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService){}

    @Get()
    index(): Promise<Categories[]> {
        return this.categoriesService.findAll();
    }  
    
    @Post()
    async create(@Body() categoryData: Categories): Promise<any> {
      return this.categoriesService.create(categoryData);
    }     
}