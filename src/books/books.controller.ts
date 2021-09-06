import { Get, Post, Query, Body, Controller } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { FilterBookDto } from './dto/filter-book.dto';
import { Book } from './entity/book.entity';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  async getBooks(@Query() filter: FilterBookDto): Promise<Book[]> {
    return this.bookService.getBooks(filter);
  }

  @Post()
  async createBook(@Body() payload: CreateBookDto): Promise<Book> {
    return this.bookService.createBook(payload);
  }
}
