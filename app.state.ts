import { Tutorial } from './models/tutorial.models';

export interface AppState {
    readonly tutorial: Tutorial[];
}