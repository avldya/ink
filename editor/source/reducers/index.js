import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import list from './list';
import editor from './editor';
import util from './util';

export default combineReducers({
    list,
    editor,
    util,
    routing: routeReducer
});
