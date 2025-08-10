import { setupServer } from 'msw/node';
import { handlers } from '../mocks/handlers'; // handlers ben definiti!

export const server = setupServer(...handlers);
