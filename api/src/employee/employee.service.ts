import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { employee } from './interfaces/employee.interface';
import { CreateEmployeeTDO } from './dto/employee.dto';

@Injectable()
export class EmployeeService {

    constructor(@InjectModel('employee') private readonly employeeModel: Model<employee>) {}

    async getEmployee(): Promise<employee[]> {
        const employee = await this.employeeModel.find();
        return employee;
    }

    async getEmploy(name: string): Promise<employee> {
        const employee = await this.employeeModel.findById(name);
        return employee;
    }

    async createEmployee(createEmployeeTDO: CreateEmployeeTDO): Promise<employee> {
        const employee = new this.employeeModel(createEmployeeTDO);
        return await employee.save();
    }

}
