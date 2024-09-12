import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module'
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'dastan.kg',
      database: 'bookdb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    BooksModule,
  ],
})
export class AppModule {}
