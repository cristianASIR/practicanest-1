import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GeneracionesModule } from './generaciones/generaciones.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true,}),
    TypeOrmModule.forRoot({
      name:'base1',
      type: 'mysql',
      host: process.env.HOST,
      port: 3306,
      username: process.env.DBUSERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      //Se utiliza la sincronización de los datos cuando estamos en desarrollo
      //Si esta en producción se mantiene desactivada para no provocar conflicto
      synchronize:true
    }),
    TypeOrmModule.forRoot({
      name:'base2',
      type: 'mysql',
      host: process.env.HOST,
      port: 3306,
      username: process.env.DBUSERNAME2,
      password: process.env.PASSWORD2,
      database: process.env.BBDD,

      //Busca la Base de datos que está activa
      autoLoadEntities: true,
      //Se utiliza la sincronización de los datos cuando estamos en desarrollo
      //Si esta en producción se mantiene desactivada para no provocar conflicto
      synchronize:true
    }),
    PokemonModule,
    GeneracionesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
