import React, {MouseEvent, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {GetModifiers} from "../../utils/classNames";
import SelectButton from "../../components/SelectButton";
import Grid from "../../components/Grid";
import Photo from "../UserCourse/photo.png";
import Badge from "../../components/Badge";
import Button from "../../components/Button";
import {BUTTON_TYPE} from "../../components/Button/constants";
import {ROUTE_ABOUT} from "../../constants/routes";
import {useTranslation} from "react-i18next";

enum CATEGORY {
    EARLIER = 'earlier',
    LATER = 'later',
    DRINKS = 'drinks',
    SPIRITS = 'spirits',
}

const Categories = [
    {
        name: 'earlier',
        value: CATEGORY.EARLIER,
    },
    {
        name: 'later',
        value: CATEGORY.LATER,
    },
    {
        name: 'drinks',
        value: CATEGORY.DRINKS,
    },
    {
        name: 'spirits',
        value: CATEGORY.SPIRITS,
    },
]
const Courses = [
    {
        id: 1,
        image: Photo,
        title: 'vegan magic monkey',
        description: 'oat milk, banana, dates, tahini and raw cacao, nutella 0,8 € + espresso shot 1 €',
        badges: ['lactose', 'gluten', 'lactose', 'gluten',],
        price: '6,50 €',
    },
    {
        id: 2,
        image: Photo,
        title: 'milkshake',
        description: 'coffee or chocolate or vanilla or peanut butter + oreos 0,8 €',
        badges: ['lactose', 'nuts'],
        price: '5,00 €',
    },
    {
        id: 3,
        title: 'tommy’s liquid green',
        description: 'apple, matcha, cucumber, celery, spinach, mint and a touch of lime',
        price: '6,50 €',
    },
]

const componentClass = 'user-menu';
const keyPrefix = 'PUBLIC_MENU';

function UserMenu() {
    const {t} = useTranslation([], {keyPrefix});
    const navigate = useNavigate();
    const [categories, setCategories] = useState<CATEGORY[]>([]);
    const categoryClickHandler = (event: MouseEvent<HTMLButtonElement>, value: CATEGORY) => {
        if (categories.includes(value)) {
            setCategories(categories.filter(item => item !== value))
        } else {
            setCategories([...categories, value])
        }
    }

    return (
        <>
            <div className={componentClass}>
                <div className={GetModifiers(componentClass, 'categories')}>
                    {Categories.map((item) => {
                        const {
                            name,
                            value,
                        } = item;
                        return (
                            <SelectButton
                                key={value}
                                selected={categories.includes(value)}
                                onClick={(event) => categoryClickHandler(event, value)}
                            >
                                {name}
                            </SelectButton>
                        )
                    })}
                </div>
                <div className={GetModifiers(componentClass, 'category')}>
                    <div className={GetModifiers(componentClass, 'title')}>
                        drinks
                    </div>
                    <div className={GetModifiers(componentClass, 'subtitle')}>
                        Cold drinks
                    </div>
                    {Courses.map((course) => {
                        const {
                            badges
                        } = course;
                        return (
                            <div
                                key={course.id}
                                className={GetModifiers(componentClass, 'course')}
                                onClick={() => {
                                    navigate('/user/351/courses/1')
                                }}
                            >
                                <Grid
                                    columns={[
                                        (
                                            course.image ?
                                                <div className={GetModifiers(componentClass, 'course-photo-block')}>
                                                    <img
                                                        src={course.image}
                                                        alt='Course'
                                                    />
                                                </div> : false
                                        ),
                                        (
                                            <div className={GetModifiers(componentClass, 'course-info')}>
                                                <div className={GetModifiers(componentClass, 'course-title')}>
                                                    {course.title}
                                                </div>
                                                <div className={GetModifiers(componentClass, 'course-description')}>
                                                    {course.description}
                                                </div>
                                                {!!badges?.length && (
                                                    <div className={GetModifiers(componentClass, 'course-badges')}>
                                                        {badges.map((badge, index) => {
                                                            const isOverflow: boolean = index > 1;
                                                            if (isOverflow) {
                                                                if (index === course.badges.length - 1) {
                                                                    return <Badge
                                                                        key={index}>+{course.badges.length - 2}</Badge>
                                                                }
                                                                return false;
                                                            }
                                                            return (
                                                                <Badge key={index}>{badge}</Badge>
                                                            )
                                                        })}
                                                    </div>
                                                )}
                                                <div className={GetModifiers(componentClass, 'course-price')}>
                                                    {course.price}
                                                </div>
                                            </div>
                                        ),
                                    ]}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
            <Grid
                className={GetModifiers(componentClass, 'footer')}
                columns={[
                    (
                        Photo ?
                            <div className={GetModifiers(componentClass, 'logo-block')}>
                                <img
                                    src={Photo}
                                    alt='Logo'
                                />
                            </div> : false
                    ),
                    (
                        <div className={GetModifiers(componentClass, 'info')}>
                            <div className={GetModifiers(componentClass, 'footer-title')}>
                                federal café
                            </div>
                            <div className={GetModifiers(componentClass, 'footer-description')}>
                                european kitchen
                            </div>
                        </div>
                    ),
                    (
                        <Button
                            type={BUTTON_TYPE.SMALL}
                            tapClassName={GetModifiers(componentClass, 'footer-about')}
                            onClick={() => {
                                navigate(`/user/351/${ROUTE_ABOUT}`)
                            }}
                        >
                            {t('ABOUT_BUTTON')}
                        </Button>
                    ),
                ]}
            />
        </>
    );
}

export default UserMenu;