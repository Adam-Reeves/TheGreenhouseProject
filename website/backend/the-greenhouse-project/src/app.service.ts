import { Injectable } from '@nestjs/common';
import { Images, retrieveImages } from './services/db.service';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getImages(limit = 1, offset = 0): Promise<GetImages> {
    const images = await retrieveImages(limit, offset);
    const mapped = constructImageResponse(images);
    return mapped;
  }
}

function constructImageResponse(images: Images[]): GetImages {
  const getImages = { images: [] };
  const b64 = images.map((image) =>
    Buffer.from(image.image).toString('base64'),
  );
  b64.forEach((image) => getImages.images.push(image));
  return getImages;
}

export interface GetImages {
  images: Image[];
}

export interface Image {
  image: string;
}
