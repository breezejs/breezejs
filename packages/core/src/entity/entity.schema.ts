import {autoGeneratedHashKey, rangeKey, versionAttribute} from '@aws/dynamodb-data-mapper-annotations';

export class EntitySchema {
  @autoGeneratedHashKey()
  public id: string;

  @rangeKey()
  public createdAt: Date;

  @versionAttribute()
  public version: number;
}
