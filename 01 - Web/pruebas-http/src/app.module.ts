import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmCoreModule} from "@nestjs/typeorm/dist/typeorm-core.module";
import {UsuarioEntity} from "./usuario/usuario.entity";
@Module({
  imports: [
    TypeOrmCoreModule.forRoot(
        {
          name: 'default',
          type: 'mysql',
          host: 'localhost',
          port: 32769,
          username: 'nika',
          password: '1234',
          database: 'web',
          entities: [
              UsuarioEntity
          ],
          synchronize: true,

        })

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

