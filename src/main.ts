import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //Ceamos el servidor
  const app = await NestFactory.create(AppModule);
  //lanzamos el servidor
  await app.listen(process.env.PORT ?? 3000);

  console.log('servidor ejecutandose en el puerto 3000')
}
bootstrap();
