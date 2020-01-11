import { Action } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.models';
import * as TutorialActions from './../actions/tutorial.actions';

const initialState: Tutorial = {
    name: 'Initial State',
    url: 'http://google.com'
};

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
    switch(action.type) {
        case TutorialActions.ADD_TUTORIAL: {
            return [...state, action.payload];
        }
        case TutorialActions.REMOVE_TUTORIAL: {
            let index = action.payload;
            state.splice(index, 1);
            return state;
        }
        default: {
            return state;
        }
    }
}
