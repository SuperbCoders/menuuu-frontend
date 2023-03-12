import React, {useState} from 'react';
import {GetModifiers} from "../../utils/classNames";
import Header from "../../components/Header";
import Card from "../../components/Card";
import {COLOR_NAME} from "../../constants/colors";
import Cards from "../../components/Cards";
import {useNavigate} from "react-router-dom";
import Grid from "../../components/Grid";
import LongArrowIcon from "../../components/Icons/LongArrowIcon";
import PlusIcon from "../../components/Icons/PlusIcon";
import {GetCategoryRoute, ROUTE_ADD_CATEGORY, ROUTE_PUBLICATION} from "../../constants/routes";
import {CreateAbsolutePath} from "../../utils/routes";
import Toggle from "../../components/Toggle";
import Button from "../../components/Button";
import DotsIcon from "../../components/Icons/DotsIcon";
import {BUTTON_OPACITY, BUTTON_TYPE} from "../../components/Button/constants";
import {useTranslation} from "react-i18next";

const CategoriesMock = [
    {
        value: 'earlier',
        name: 'earlier',
        count: 3,
        active: true,
    },
    {
        value: 'later',
        name: 'later',
        count: 5,
        active: true,
    },
    {
        value: 'drinks',
        name: 'drinks',
        count: 8,
        active: true,
    },
    {
        value: 'spirits',
        name: 'spirits',
        count: 7,
        active: true,
    },
]

const componentClass = 'menu';
const keyPrefix = 'MENU';

function Menu() {
    const {t} = useTranslation([], {keyPrefix});
    const navigate = useNavigate();
    const [categories, setCategories] = useState<any>(CategoriesMock);
    const isEmpty = !categories.length;

    return (
        <div className={componentClass}>
            <Header/>
            <Cards>
                <Card
                    title={t('TITLE')}
                    thirdColumn={
                        <Button
                            tapClassName={GetModifiers(componentClass, 'more-tap')}
                            className={GetModifiers(componentClass, 'more')}
                            type={BUTTON_TYPE.SMALL}
                            opacity={BUTTON_OPACITY.HALF}
                        >
                            <DotsIcon/>
                        </Button>
                    }
                >
                    <>
                        {isEmpty ? (
                                <Grid
                                    columns={[
                                        false,
                                        (
                                            <div className={GetModifiers(componentClass, 'description')}>
                                                {t('EMPTY_DESCRIPTION')}
                                            </div>
                                        ),
                                    ]}
                                />
                            )
                            : categories.map((category, index) => {
                                return (
                                    <Grid
                                        key={category.value}
                                        className={GetModifiers(componentClass, 'category')}
                                        columns={[
                                            (
                                                <Toggle
                                                    tapClassName={GetModifiers(componentClass, 'toggle-tap')}
                                                    onClick={() => {
                                                        const newCategory = {...category};
                                                        const newCategories = [...categories];
                                                        newCategory.active = !category.active
                                                        newCategories[index] = newCategory;
                                                        setCategories(newCategories);
                                                    }}
                                                    active={category.active}
                                                />
                                            ),
                                            (
                                                <div
                                                    onClick={() => {
                                                        navigate(GetCategoryRoute(category.value))
                                                    }}
                                                    className={GetModifiers(componentClass, 'category-title')}
                                                >
                                                    {category.name}
                                                </div>
                                            ),
                                            (
                                                <div className={GetModifiers(componentClass, 'category-count')}>
                                                    {category.count}
                                                </div>
                                            ),
                                        ]}
                                    />
                                )
                            })}
                    </>
                </Card>
                <Card
                    colorTheme={COLOR_NAME.COAL}
                    title={t('PUBLISH_TITLE')}
                    disabled={isEmpty}
                    icon={
                        <div className={GetModifiers(componentClass, 'card-icon', [{
                            condition: isEmpty,
                            value: 'disabled',
                        }])}>
                            <LongArrowIcon/>
                        </div>
                    }
                    thirdColumn={
                        <div className={GetModifiers(componentClass, 'count', [{
                            condition: isEmpty,
                            value: 'disabled',
                        }])}>
                            0
                        </div>
                    }
                    onClick={() => {
                        navigate(CreateAbsolutePath(ROUTE_PUBLICATION))
                    }}
                />
                <Card
                    title={t('ADD_CATEGORY_TITLE')}
                    colorTheme={COLOR_NAME.FRUIT}
                    icon={
                        <div className={GetModifiers(componentClass, 'card-icon')}>
                            <PlusIcon/>
                        </div>
                    }
                    onClick={() => {
                        navigate(CreateAbsolutePath(ROUTE_ADD_CATEGORY))
                    }}
                />
            </Cards>
        </div>
    );
}

export default Menu;