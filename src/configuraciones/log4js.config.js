export const log4jsConfig = {
    appenders: {
      errorsFile: {
        type: 'file',
        filename: './logs/errorLogs.log',
      },
      fileConsoleLogger: { type: 'console' },
    },
    categories: {
      default: { appenders: ['fileConsoleLogger'], level: 'info' },
      errorLogger: {
        appenders: ['errorsFile'],
        level: 'info',
      },
    },
  };
  