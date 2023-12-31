import { IsNumber, IsPositive, IsOptional } from 'class-validator'

export class PaginationDto {

    @IsOptional()
    @IsNumber()
    @IsPositive()
    page?: number;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    limit?: number;
}