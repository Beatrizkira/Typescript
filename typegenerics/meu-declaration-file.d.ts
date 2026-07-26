declare module 'lodash' {
    interface LoDashStatic {
        mul(array: number[]): number;
        sum(array: number[]): number;
        min(array: number[]): number | undefined;
        max(array: number[]): number | undefined;
        mean(array: number[]): number | undefined;
    }
}

declare namespace NodeJS {
    interface Global {
        MINHAGLOBAL: string;
    }
}
