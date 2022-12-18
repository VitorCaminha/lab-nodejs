import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { SendNotification } from '@app/use-cases/send-notification';

import { SendNotificationPayload } from '../dtos/send-notification-payload';

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @EventPattern('notifications.send-notification')
  async handleSendNotification(
    @Payload() { recipientId, content, category }: SendNotificationPayload,
  ) {
    await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });
  }
}
