import { Observable } from "./gloast.ts"
import { Signal } from "npm:@preact/signals-core"

export class SignalObservable<T> implements Observable<T> {
	_signal: Signal<T>

	constructor (signal: Signal<T>) {
		this._signal = signal
	}

	subscribe(fn: (value: T) => void): () => void {
		return this._signal.subscribe(fn)
	}

	get value(): T {
		return this._signal.value
	}
	set value(value: T) {
		this._signal.value = value
	}
}

export default function signalgloast<T>(signal: Signal<T>): SignalObservable<T> {
	return new SignalObservable(signal)
}