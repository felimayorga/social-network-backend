import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { User } from '../entities';

const getCurrentUserByContex = (ctx: ExecutionContext): User => {
  return ctx.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => getCurrentUserByContex(ctx),
);
