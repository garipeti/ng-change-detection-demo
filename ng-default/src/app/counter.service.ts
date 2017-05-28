import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CounterService {
    private _count = 1;
    private _eventEmitter = new EventEmitter<any>();

    get count() {
        return this._count;
    }

    inc() {
        this._count += 1;
        this._eventEmitter.emit(this._count);
    }

    get events() {
        return this._eventEmitter;
    }
}