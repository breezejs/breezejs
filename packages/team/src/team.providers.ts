/**
 * @author Mo Gusbi <me@mogusbi.co.uk>
 */
import {SqlEnum} from '@breezejs/sql';
import {Provider} from '@nestjs/common';
import {Connection, Repository} from 'typeorm';
import {Team} from './team.entity';
import {TeamEnum} from './team.enum';

export const TeamProviders: Provider[] = [
  {
    inject: [
      SqlEnum.providerToken
    ],
    provide: TeamEnum.providerToken,
    useFactory (connection: Connection): Repository<Team> {
      return connection.getRepository(Team);
    }
  }
];
