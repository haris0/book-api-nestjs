import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entity/book.entity';
import { BookRepository } from './repository/book.repository';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookRepository)
    private readonly booksRepository: BookRepository,
  ) {}

  createBook = async (payload: CreateBookDto): Promise<Book> => {
    return this.booksRepository.createBook(payload);
  };
}
