import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";

import { ConfigModule } from "@nestjs/config";
import { configuration } from "./shared/module/config/configuration";

import { LoggerMiddleware } from "./shared/utils/logger";
import { OportunidadeModule } from "@oportunidade/oportunidade.module";
import { PersistenceModule } from "./shared/module/persistence/persistence.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true,
      load: [configuration],
    }),
    PersistenceModule,
    OportunidadeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    if (configuration().NODE_ENV !== "test") {
      consumer.apply(LoggerMiddleware).forRoutes("*");
    }
  }
}
