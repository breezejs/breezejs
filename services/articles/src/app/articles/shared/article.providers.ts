/**
 * @author Mo Gusbi <me@mogusbi.co.uk>
 */
import {Article, SqlEnum} from '@breezejs/sql';
import {Provider} from '@nestjs/common';
import {Connection, Repository} from 'typeorm';
import {ArticleEnum} from './article.enum';

export const ArticleProviders: Provider[] = [
  {
    inject: [
      SqlEnum.providerToken
    ],
    provide: ArticleEnum.providerToken,
    useFactory (connection: Connection): Repository<Article> {
      return connection.getRepository(Article);
    }
  }
];
