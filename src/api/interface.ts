export interface ArrayResponse<DataItem> {
    count: number;
    results: DataItem[];
}

export interface ResponseWithPagination<DataItem> extends ArrayResponse<DataItem> {
    next: string;
    previous: string;
}

export interface MenuCourse {
    id: number;
    menu: number;
    section: number;
    published: boolean;
    translations: string;
    price: string; // decimal
    cooking_time: string;
    options: any;
}

export interface MenuSection {
    id: number;
    translations: string;
    published: boolean;
    menu: number;
    published_courses: MenuCourse[];
}

export interface MenuInterface {
    id: number;
    translations: string;
    restaurant: number;
    published: boolean;
    sections: MenuSection[];
    extra_published_courses: MenuCourse[];
}

export interface RestaurantCategoryInterface {
    id: number;
    translations: string;
}

export enum RESTAURANT_STAFF_POSITION {
    OWNER = 'owner',
    WORKER = 'worker',
}

export interface RestaurantStaffInterface {
    restaurant: number;
    user: number;
    position: RESTAURANT_STAFF_POSITION;
}

export interface RestaurantInterface {
    id: number;
    translations: string;
    slug: string;
    logo: string;
    picture: string; // cover
    category: number;
    stars: number;
    country: string;
    city: string;
    street: string;
    building: string;
    address_details: string;
    zip_code: string;
    longitude: string; // decimal
    latitude: string; // decimal;
    phone: string;
    site: string;
    category_data: RestaurantCategoryInterface;
    current_menu: MenuInterface;
}

export interface TariffInterface {
    id: number;
    translations: string;
    month_price: number;
    year_price: number;
}

export interface UserCreationInterface {
    username: string;
    password: string;
    email: string;
    phone: string;
    id: number;
}