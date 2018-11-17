/**
 * @author Mo Gusbi <me@mogusbi.co.uk>
 */
import {PaginationOptions} from '@breeze-bb/pagination';
import {Inject, Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {TeamDto} from './team.dto';
import {Team} from './team.entity';
import {TeamEnum} from './team.enum';

/**
 * Service used to query team database table
 */
@Injectable()
export class TeamService {
  /**
   * @param team - Team repository
   */
  constructor (
    @Inject(TeamEnum.providerToken) private readonly team: Repository<Team>
  ) {}

  /**
   * Create a new team entity
   *
   * @param dto - Data transfer object
   *
   * @returns The new team entity
   */
  public async create (dto: TeamDto): Promise<Team> {
    const team: Team = this.team.create(dto);

    return this.team.save(team);
  }

  /**
   * List all team entities in a paginated list
   *
   * @returns A paginated list of teams and the total number of entities in the database
   */
  public async listAll ({order, select, skip, take}: PaginationOptions<Team>): Promise<[Team[], number]> {
    return this.team.findAndCount({
      order,
      select,
      skip,
      take
    });
  }

  /**
   * Removes a team entity
   *
   * @param id - Team entity id
   */
  public async remove (id: string): Promise<void> {
    await this.team.delete(id);
  }
}