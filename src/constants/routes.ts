export const PARAM_RESTAURANT = ':restaurant';
export const PARAM_ID = ':id';

export const ROUTE_AUTH = '/auth';
export const ROUTE_ROOT = '/';
export const ROUTE_500 = '/500';
export const ROUTE_404 = '/404';
export const ROUTE_REST = '*';

export const ROUTE_PROFILE = 'profile';
export const ROUTE_PREVIEW = 'preview';
export const ROUTE_MENU = 'menu';
export const ROUTE_ADD_CATEGORY = 'add-category';
export const ROUTE_PUBLICATION = 'publication';
export const ROUTE_CATEGORIES = 'categories';
export const GetCategoryRoute = (id: string) => `${ROUTE_CATEGORIES}/${id}`;
export const ROUTE_PLANS = 'plans';

export const ROUTE_USER = 'user';
export const ROUTE_ABOUT = 'about';
export const ROUTE_COURSES = 'courses';
export const ROUTE_SETTINGS = 'settings';
export const GetCourseRoute = (id: string) => `${ROUTE_COURSES}${id}`;