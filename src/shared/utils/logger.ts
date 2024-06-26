import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { method, originalUrl } = request;

    response.on('finish', () => {
      const { statusCode } = response;

      if (statusCode >= 400) {
        this.logger.error(
          `\x1b[31m${method} ${originalUrl} ${statusCode}\x1b[0m`,
        );
      } else {
        this.logger.log(`${method} ${originalUrl} ${statusCode}`);
      }
    });

    next();
  }
}
