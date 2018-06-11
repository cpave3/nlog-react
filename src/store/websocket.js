'use strict';

import io from 'socket.io-client';
import { messageTypes, uri } from '../constants/websocket.js';

const socket = io(uri);


export const init = (store) => {
    Object.keys( messageTypes )
        .forEach( type => socket.on(type, (payload) => 
            store.dispatch({ type, payload })
        )
    );
};

/**
 * Abstraction of the standard socket.io emission method
 * 
 * @param {String} type 
 * @param {Object} payload 
 */
export const emit = (type, payload) => socket.emit(type, payload);