import { Controller, Get, Post, Body, Put, Param, Delete, Res, HttpStatus, NotFoundException, Query } from '@nestjs/common';
import { CreateEmployeeTDO } from './dto/employee.dto';
import { EmployeeService } from './employee.service';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
    ApiCreatedResponse
  } from '@nestjs/swagger';
import { Logger, LColor } from 'logger-colors';

const logger = new Logger();
const separador = '----------------------------------------------------';

@ApiBearerAuth()
@ApiTags('employee')
@Controller('employee')
export class EmployeeController {

    constructor(private employeeService: EmployeeService) {}

    @Post('/create')
    @ApiOperation({ summary: 'Create Employee' })
    @ApiResponse({ status: 400, description: 'Error.'})
    @ApiResponse({ status: 200, description: 'Ok.' })
    async createEmployee(@Res() res, @Body() createEmployeeTDO: CreateEmployeeTDO) {
        try {

            logger.cyan('CREATE Employee', true);
            logger.cyan('METHOD:     POST', false);
            logger.cyan('URL:        /employee/create', false);
            logger.cyan('BODY:', false);
            logger.success(JSON.stringify(createEmployeeTDO));
            logger.magenta('');
            logger.info(separador);

            const Employee = await this.employeeService.createEmployee(createEmployeeTDO);

            const respuesta = {
                error: null,
                detail: {
                    message: 'Employee Successfully created',
                    Employee
                }
            };

            logger.magenta('RESPONSE', true);
            logger.magenta(`STATUS: ${LColor.c_green}[200]`, false);
            logger.magenta(`BODY:`, false);
            logger.magenta(JSON.stringify(respuesta), false);
            logger.magenta('');
            logger.info(separador);

            res.status(HttpStatus.OK).json(respuesta);

        } catch (error) {

            const respuesta = {
                error,
                detail: null
            };

            logger.error('RESPONSE ERROR', true);
            logger.error(`STATUS: ${LColor.c_yellow}[400]`, false);
            logger.error(`BODY:`, false);
            logger.error(JSON.stringify(respuesta), false);
            logger.error('');
            logger.info(separador);

            res.status(400).json(respuesta);
        }
    }

    @Get('/')
    @ApiOperation({ summary: 'Get All Employees' })
    @ApiResponse({ status: 400, description: 'Error.'})
    @ApiResponse({ status: 200, description: 'Ok.' })
    async getAllEmployee(@Res() res) {
        try {
            logger.cyan('GET ALL EMPLOYEES', true);
            logger.cyan('METHOD:     GET', false);
            logger.cyan('URL:        /employee', false);
            logger.magenta('');
            logger.info(separador);

            const employee = await this.employeeService.getEmployee();

            const respuesta = {
                error: null,
                detail: {
                    message: 'Getting Employees Successfully',
                    employee
                }
            };

            logger.magenta('RESPONSE', true);
            logger.magenta(`STATUS: ${LColor.c_green}[200]`, false);
            logger.magenta(`BODY:`, false);
            logger.magenta(JSON.stringify(respuesta), false);
            logger.magenta('');
            logger.info(separador);

            res.status(HttpStatus.OK).json(respuesta);
        } catch (error) {

            const respuesta = {
                error,
                detail: null
            };

            logger.error('RESPONSE ERROR', true);
            logger.error(`STATUS: ${LColor.c_yellow}[400]`, false);
            logger.error(`BODY:`, false);
            logger.error(JSON.stringify(respuesta), false);
            logger.error('');
            logger.info(separador);

            res.status(400).json(respuesta)
        }
    }

    @Get('/:name')
    @ApiOperation({ summary: 'Get One employee' })
    @ApiResponse({ status: 400, description: 'Error.'})
    @ApiResponse({ status: 200, description: 'Ok.' })
    async getOneProduct(@Res() res, @Param('name') name) {
        try {

            logger.cyan('GET ONE PRODUCT', true);
            logger.cyan('METHOD:     GET', false);
            const help: string = 'URL:        /employee/' + name;
            logger.cyan(help, false);
            logger.magenta('');
            logger.info(separador);

            const product = await this.employeeService.getEmploy(name);
            let response: any;

            logger.magenta('RESPONSE', true);
            logger.magenta(`STATUS: ${LColor.c_green}[200]`, false);
            logger.magenta(`BODY:`, false);

            if (!product) {
                response = {
                    message: 'employee does not found',
                    product: []
                };
            } else {
                response = {
                    message: 'Getting employee Successfully',
                    product
                };
            }

            logger.magenta(JSON.stringify(response), false);
            logger.magenta('');
            logger.info(separador);

            res.status(HttpStatus.OK).json(response);

        } catch (error) {

            const respuesta = {
                error,
                detail: null
            };

            logger.error('RESPONSE ERROR', true);
            logger.error(`STATUS: ${LColor.c_yellow}[400]`, false);
            logger.error(`BODY:`, false);
            logger.error(JSON.stringify(respuesta), false);
            logger.error('');
            logger.info(separador);

            res.status(400).json(respuesta);
        }
    }
}
