import { RootState } from '../reducers'

export const getProjects = (state: RootState) => state.projects;
export const getViewProjects = (state: RootState) => state.viewProjects;
export const getPopularCategories = (state: RootState) => state.popularCategories;
export const getPrinciplesData = (state: RootState) => state.principlesData;
export const getProjectSaving = (state: RootState) => state.projectSaving;
export const getProjectsLoading = (state: RootState) => state.projectsLoading;
