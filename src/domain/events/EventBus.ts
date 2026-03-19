import { DomainEvent } from "./DomainEvent";

type Handler<T> = (event: T) => void;

export class EventBus {
  private handlers: Record<string, Handler<any>[]> = {};

  subscribe<T>(eventName: string, handler: Handler<T>) {
    this.handlers[eventName] = this.handlers[eventName] || [];
    this.handlers[eventName].push(handler);
  }

  publish(event: DomainEvent) {
    const handlers = this.handlers[event.name] || [];
    handlers.forEach(h => h(event));
  }
}
