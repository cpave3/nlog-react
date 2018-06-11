'use strict';

const host = 'localhost';
const port = 4001;

export const uri = `http://${host}:${port}`;

/**
 * Reduce an object of WS Message Types for listening on.
 */
export const messageTypes = [
    'welcome'
].reduce((accum, msg) => {
    accum[msg] = msg;
    return accum;
}, {});