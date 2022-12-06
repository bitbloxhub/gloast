// mostly a simplified preact signal
export interface Observable<T> {
	subscribe(fn: (value: T) => void): () => void
	toString(): string
	get value(): T
	set value(value: T);
}