import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateBookDto } from '../dto/create-book.dto';
import { Book } from '../entity/book.entity';

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
  createBook = async (payload: CreateBookDto): Promise<Book> => {
    const { title, author, category, year } = payload;

    const book = this.create();
    book.title = title;
    book.author = author;
    book.category = category;
    book.year = year;

    try {
      book.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }

    return book;
  };
}
