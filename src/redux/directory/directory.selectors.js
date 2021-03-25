import {createSelector} from 'reselect';

const selectDirectory = state => state.directory; // primero selecciono del state el objeto directory, y mas abajo el sections dentro del directory

export const selectDirectorySections = createSelector(

    [selectDirectory],
    directory => directory.sections

);