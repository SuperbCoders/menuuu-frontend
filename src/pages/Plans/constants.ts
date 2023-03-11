export enum PLAN_TYPE {
    PROFESSIONAL = 'pro',
    LIFE = 'life',
}

export interface PlanInterface {
    type: PLAN_TYPE;
    fullTitle: string;
    title: string;
    badges: string[];
    price: number;
    disabled?: boolean;
}

export const PlansList: PlanInterface[] = [
    {
        type: PLAN_TYPE.PROFESSIONAL,
        fullTitle: 'professional',
        title: 'pro',
        badges: ['200+ items', '100+ photos', 'unlimited views',],
        price: 50,
    },
    {
        type: PLAN_TYPE.LIFE,
        fullTitle: 'life',
        title: 'life',
        badges: ['50 items', '20 photos', '1 000 views',],
        price: 25,
        // disabled: true,
    },
]