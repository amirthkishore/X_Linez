export abstract class AbstractChildHelper<T>{
    private parent: T;
    constructor(parent: T) {
        this.parent = parent;
    }

    public getParent = (): T => {
        return this.parent;
    }
}