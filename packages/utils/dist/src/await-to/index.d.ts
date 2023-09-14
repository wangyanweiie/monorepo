/**
 * @link https://github.com/scopsy/await-to-js
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export declare function to<T, U = Error>(promise: Promise<T>): Promise<[U, undefined] | [null, T]>;
