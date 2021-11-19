export type DeepReadonly<T extends object> = {
    readonly [key in keyof T]: T[key] extends object
        ? DeepReadonly<T[key]>
        : T[key];
};
