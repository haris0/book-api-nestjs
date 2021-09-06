import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class FilterBookDto {
  @IsOptional()
  public title: string;

  @IsOptional()
  public author: string;

  @IsOptional()
  public category: string;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public min_year: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public max_year: number;
}
