declare module '*.css';

declare module 'validator/lib/isEmail' {
    const isEmail: (email: string) => boolean;
    export default isEmail;
}
