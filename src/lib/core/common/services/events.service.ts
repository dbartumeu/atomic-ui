import {Injectable} from '@angular/core';


@Injectable()
export class AtEvents {
    private _channels: any = [];

    /**
     * Subscribe to an event topic. Events that get posted to that topic will trigger the provided handler.
     *
     * @param topic the topic to subscribe to
     * @param handler the event handler
     */
    subscribe(topic: string, ...handlers: Function[]) {
        if (!this._channels[topic]) {
            this._channels[topic] = [];
        }
        handlers.forEach((handler) => {
            this._channels[topic].push(handler);
        });
    }

    /**
     * Unsubscribe from the given topic. Your handler will no longer receive events published to this topic.
     *
     * @param topic the topic to unsubscribe from
     * @param handler the event handler
     *
     * @return true if a handler was removed
     */
    unsubscribe(topic: string, handler: Function = null) {
        let t = this._channels[topic];
        if (!t) {
            // Wasn't found, wasn't removed
            return false;
        }

        if (!handler) {
            // Remove all handlers for this topic
            delete this._channels[topic];
            return true;
        }

        // We need to find and remove a specific handler
        let i = t.indexOf(handler);

        if (i < 0) {
            // Wasn't found, wasn't removed
            return false;
        }

        t.splice(i, 1);

        // If the channel is empty now, remove it from the channel map
        if (!t.length) {
            delete this._channels[topic];
        }

        return true;
    }

    /**
     * Publish an event to the given topic.
     *
     * @param topic the topic to publish to
     * @param eventData the data to send as the event
     */
    publish(topic: string, ...args: any[]) {
        var t = this._channels[topic];
        if (!t) {
            return null;
        }

        let responses: any[] = [];
        t.forEach((handler: any) => {
            responses.push(handler(...args));
        });
        return responses;
    }

}
