import { Controller, Get } from '@nestjs/common';
import { DealsService } from './deals.service';

@Controller('deals')
export class DealsController {
  constructor(private dealsService: DealsService) {}

  @Get()
  getAllDeals() {
    return this.dealsService.getAllDeals();
  }
}
