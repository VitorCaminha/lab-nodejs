import { Module } from '@nestjs/common';

import { DatabaseModule } from '@infra/database/database.module';

import { NotificationsController } from './kafka/controllers/notifications.controller';

import { SendNotification } from '@app/use-cases/send-notification';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [KafkaConsumerService, SendNotification],
})
export class MessagingModule {}
