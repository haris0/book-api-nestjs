import {
  Get,
  Post,
  Query,
  Body,
  Controller,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { FilterBookDto } from './dto/filter-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entity/book.entity';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  async getBooks(@Query() filter: FilterBookDto): Promise<Book[]> {
    return this.bookService.getBooks(filter);
  }

  @Get(':id')
  async getBookById(@Param('id') id: string): Promise<Book> {
    return this.bookService.getBookById(id);
  }

  @Post()
  async createBook(@Body() payload: CreateBookDto): Promise<Book> {
    return this.bookService.createBook(payload);
  }

  @Put(':id')
  async updateBookById(
    @Param('id') id: string,
    @Body() payload: UpdateBookDto,
  ): Promise<Book> {
    return this.bookService.updateBookById(id, payload);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string): Promise<void> {
    return this.bookService.deleteBook(id);
  }
}
