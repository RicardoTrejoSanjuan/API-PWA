import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeTDO {
  @ApiProperty()
  readonly name:       string;
  @ApiProperty()
  readonly email:      string;
  @ApiProperty()
  readonly role:       string;
  @ApiProperty()
  readonly birdate:    string;
  @ApiProperty()
  readonly adress:     string;
  @ApiProperty()
  readonly skill:      string;
}