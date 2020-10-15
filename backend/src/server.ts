import dotenvFlow from 'dotenv-flow';
import pino from 'pino';
import app from './app';

dotenvFlow.config();

const logger = pino();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  logger.info(`[SERVER]: server is running on http://localhost:${PORT}`);
});
