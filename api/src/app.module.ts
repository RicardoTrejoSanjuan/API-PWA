import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './employee/employee.module';

const user = process.env.MDB_USER || 'testuser';
const pass = process.env.MDB_PASS || '4cIRenqa0x0WcNvP';
const host = process.env.MDB_HOST || 'cluster0.mqtsy.mongodb.net';
const database = process.env.MDB_DATABASE || 'Employees';
const conexion = `mongodb+srv://${user}:${pass}@${host}/${database}?retryWrites=true&w=majority`;
console.log('conexion :', conexion);

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(conexion, {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}