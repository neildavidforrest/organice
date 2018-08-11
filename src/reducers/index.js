import { combineReducers } from 'redux';
import undoable, { includeAction } from 'redux-linear-undo';

import baseReducer from './base';
import dropboxReducer from './dropbox';
import orgReducer from './org';

const UNDOABLE_ACTIONS = [
  'ADD_HEADER', 'REMOVE_HEADER', 'MOVE_HEADER_UP',
  'MOVE_HEADER_DOWN', 'MOVE_HEADER_LEFT', 'MOVE_HEADER_RIGHT',
  'MOVE_SUBTREE_LEFT', 'MOVE_SUBTREE_RIGHT', 'ADVANCE_TODO_STATE',
  'EDIT_HEADER_TITLE', 'EDIT_HEADER_DESCRIPTION', 'NO_OP',
  'ADD_NEW_TABLE_ROW', 'ADD_NEW_TABLE_COLUMN', 'MOVE_TABLE_ROW_DOWN',
  'MOVE_TABLE_ROW_UP', 'MOVE_TABLE_COLUMN_LEFT', 'MOVE_TABLE_COLUMN_RIGHT',
];

export default combineReducers({
  base: baseReducer,
  dropbox: dropboxReducer,
  org: undoable(orgReducer, {
    filter: includeAction(UNDOABLE_ACTIONS),
    linearizeHistory: true,
  }),
});
