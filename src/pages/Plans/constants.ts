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
        fullTitle: 'PRO_FULL_TITLE',
        title: 'PRO_TITLE',
        badges: ['PRO_BADGE_1', 'PRO_BADGE_2', 'PRO_BADGE_3',],
        price: 50,
    },
    {
        type: PLAN_TYPE.LIFE,
        fullTitle: 'LIFE_FULL_TITLE',
        title: 'LIFE_TITLE',
        badges: ['LIFE_BADGE_1', 'LIFE_BADGE_2', 'LIFE_BADGE_3',],
        price: 25,
        // disabled: true,
    },
]