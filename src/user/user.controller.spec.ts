import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should filter users by provided names array', () => {
    const result = controller.getUser(['jon']);

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('jon Doe');
  });
});
