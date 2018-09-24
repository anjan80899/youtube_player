import {combineReducers} from 'redux';
import VideoReducer from './video-reducer';
import SelectedVideoReducer from './selectedVideo-reducer';
import TermReducer from './term-reducer';

export const allReducers=combineReducers({
    videos:VideoReducer,
    selectedVideo:SelectedVideoReducer,
    term:TermReducer
});