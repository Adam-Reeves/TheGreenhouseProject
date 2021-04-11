import { Controller, Get, Query } from '@nestjs/common';
import { AppService, GetImages } from './app.service';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('image')
  async getImages(@Query() query: GetImagesDto): Promise<GetImages> {
    return await this.appService.getImages(query.limit, query.offset);
  }
}

interface GetImagesDto {
  limit: number;
  offset: number;
}
