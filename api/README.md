<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# API - Store

## Environment Variables

The following environment variables are required for data base conexion it is locate in mongo db atlas

```
export MDB_USER=testuser
export MDB_PASS=4cIRenqa0x0WcNvP
export MDB_HOST=cluster0.mqtsy.mongodb.net
export MDB_DATABASE=Employees
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Api is running at <a href="http://localhost:3001">http://localhost:3001</a>


## Endpoints 

### Get All

http://localhost:3001/employee


### Get Ono

http://localhost:3001/employee/:nameEmployee

### Create

http://localhost:3001/employee/create

```Request
{
  "name": "",
  "email": "",
  "role": "",
  "birdate": "",
  "adress": "",
  "skill": ""
}
```
