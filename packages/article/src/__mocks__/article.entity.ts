/**
 * @author Mo Gusbi <me@mogusbi.co.uk>
 */
// tslint:disable no-reserved-keywords

/**
 * Mock article repository
 */
export class Article {
  public create: jest.Mock = jest.fn();
  public delete: jest.Mock = jest.fn();
  public findAndCount: jest.Mock = jest.fn();
  public findOne: jest.Mock = jest.fn();
  public save: jest.Mock = jest.fn();
  public update: jest.Mock = jest.fn();
}
