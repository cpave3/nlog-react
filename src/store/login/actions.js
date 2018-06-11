/**
 * Set the selected watchers.
 * 
 * This should use information provided by the WSS to remember the names and UUIDs of the watchers the user chooses
 * They should then be written to the redux state, which can be used to generate the logStream tabs later
 * 
 * selectedWatchers should be an array of objects containing a name and uuid
 * [{ name: 'String', uuid: 'string' }]
 */
export const SET_WATCHERS = 'SET_WATCHERS';
export function setWatchers(selectedWatchers) {
    return { type: SET_WATCHERS, selectedWatchers };
};

