import {DataMapper} from '@aws/dynamodb-data-mapper';
import {Injectable} from '@nestjs/common';
import {DynamoDB} from 'aws-sdk';

/**
 * Dynamo DB mapper client
 */
@Injectable()
export class DynamoDb {
  private readonly dataMapper: DataMapper;

  constructor () {
    // TODO: Point to the correct endpoint
    const client: DynamoDB = new DynamoDB({
      endpoint: 'http://localhost:8000'
    });

    this.dataMapper = new DataMapper({
      client
    });
  }

  /**
   * Inserts entity into the database
   * @param {T} data - The data to insert
   * @returns {Promise<T>} - The inserted entity
   */
  public async insert <T> (data: T): Promise<T> {
    return this.dataMapper.put<T>(data);
  }
}
