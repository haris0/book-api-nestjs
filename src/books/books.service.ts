import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { FilterBookDto } from './dto/filter-book.dto';
import { Book } from './entity/book.entity';
import { BookRepository } from './repository/book.repository';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookRepository)
    private readonly booksRepository: BookRepository,
  ) {}

  getBooks = async (filter: FilterBookDto): Promise<Book[]> => {
    return this.booksRepository.getBooks(filter);
  };

  createBook = async (payload: CreateBookDto): Promise<Book> => {
    return this.booksRepository.createBook(payload);
  };
}
