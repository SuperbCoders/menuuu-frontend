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
import {ROUTE_ADD_CATEGORY, ROUTE_MENU} from "../../constants/routes";
import {CreateAbsolutePath} from "../../utils/routes";
import Toggle from "../../components/Toggle";
import Button from "../../components/Button";
import DotsIcon from "../../components/Icons/DotsIcon";
import {BUTTON_TYPE} from "../../components/Button/constants";
import {DIRECTION} from "../../constants/positions";
import TapTarget from "../../components/TapTarget";
import {useTranslation} from "react-i18next";

const CategoriesMock = [
    {
        value: 'coffee',
        name: 'coffee',
        count: 14,
        active: true,
    },
    {
        value: 'coldDrinks',
        name: 'cold drinks',
        count: 20,
        active: true,
    },
    {
        value: 'hotElixirs',
        name: 'hot elixirs',
        count: 5,
        active: true,
    },
    {
        value: 'beers',
        name: 'beers',
        count: 8,
        active: true,
    },
    {
        value: 'wines',
        name: 'wines',
        count: 7,
        active: true,
    },
]

const componentClass = 'category';
const keyPrefix = 'CATEGORY';

function Category() {
    const {t} = useTranslation([], {keyPrefix});
    const navigate = useNavigate();
    const [categories, setCategories] = useState<any>(CategoriesMock);
    const isEmpty = !categories.length;

    return (
        <div className={componentClass}>
            <Header/>
            <Cards>
                <Card
                    title='drinks'
                    icon={
                        <TapTarget
                            className={GetModifiers(componentClass, 'back')}
                            onClick={() => {
                                navigate(CreateAbsolutePath(ROUTE_MENU))
                            }}
                        >
                            <LongArrowIcon
                                direction={DIRECTION.LEFT}
                            />
                        </TapTarget>
                    }
                    thirdColumn={
                        <Button
                            tapClassName={GetModifiers(componentClass, 'more-tap')}
                            className={GetModifiers(componentClass, 'more')}
                            type={BUTTON_TYPE.SMALL}
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
                                                <div className={GetModifiers(componentClass, 'category-title')}>
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

export default Category;