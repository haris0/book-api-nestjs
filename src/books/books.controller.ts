import { Post } from '@nestjs/common';
import { Body, Controller } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entity/book.entity';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Post()
  async createBook(@Body() payload: CreateBookDto): Promise<Book> {
    return this.bookService.createBook(payload);
  }
}
