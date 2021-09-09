import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class UpdateBookDto {
  @IsOptional()
  public title: string;

  @IsOptional()
  public author: string;

  @IsOptional()
  public category: string;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public year: number;
}
