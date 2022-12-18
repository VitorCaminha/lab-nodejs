import { HttpException } from '@nestjs/common';

export class NotificationNotFound extends HttpException {
  constructor() {
    super('Notification not found.', 404);
  }
}
