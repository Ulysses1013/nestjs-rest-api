import { User as CustomUser } from '@prisma/client';

declare module 'express-serve-static-core' {
  interface Request {
    user?: Omit<CustomUser, 'hashedPassword'>;
  }
}
