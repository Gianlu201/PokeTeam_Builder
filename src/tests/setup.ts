import { beforeAll, afterEach, afterAll, vi } from 'vitest';
import '@testing-library/jest-dom';
import { server } from './server';
import { cleanup } from '@testing-library/react';
import { toast } from 'sonner';

class MockIntersectionObserver {
  callback: IntersectionObserverCallback;

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver as unknown as typeof IntersectionObserver,
});

// Mock per setPointerCapture in JSDOM
if (!Element.prototype.setPointerCapture) {
  Element.prototype.setPointerCapture = () => {};
}

if (!Element.prototype.releasePointerCapture) {
  Element.prototype.releasePointerCapture = () => {};
}

beforeAll(() => {
  server.listen();
  document
    .querySelectorAll('[data-sonner-toaster], [data-sonner-toast]')
    .forEach((el) => el.remove());
});
afterEach(() => {
  server.resetHandlers();
  cleanup();
  toast.dismiss();
});
afterAll(() => server.close());
