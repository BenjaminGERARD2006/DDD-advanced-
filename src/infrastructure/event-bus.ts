import { DomainEvent } from "./domain-events";

type EventHandler = (event: DomainEvent) => void;

export class EventBus {
  private handlers: Record<string, EventHandler[]> = {};

  subscribe(eventType: DomainEvent["type"], handler: EventHandler): void {
    if (!this.handlers[eventType]) {
      this.handlers[eventType] = [];
    }

    this.handlers[eventType].push(handler);
  }

  unsubscribe(eventType: DomainEvent["type"], handler: EventHandler): void {
    const currentHandlers = this.handlers[eventType];
    if (!currentHandlers) {
      return;
    }

    this.handlers[eventType] = currentHandlers.filter(
      (currentHandler) => currentHandler !== handler
    );
  }

  emit(event: DomainEvent): void {
    const currentHandlers = this.handlers[event.type];
    if (!currentHandlers) {
      return;
    }

    currentHandlers.forEach((handler) => handler(event));
  }
}