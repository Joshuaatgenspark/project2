import { IUser } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new IUser()).toBeTruthy();
  });
});
