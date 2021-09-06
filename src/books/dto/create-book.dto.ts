import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  public title: string;

  @IsNotEmpty()
  public author: string;

  @IsNotEmpty()
  public category: string;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  public year: number;
}
