import React from 'react';
import {GetModifiers} from "../../utils/classNames";
import Photo from './photo.png';
import {useTranslation} from "react-i18next";

const Properties = [
    {
        name: 'PROPERTY_COOKING_TIME',
        value: '5−7 minutes',
    },
    {
        name: 'PROPERTY_ALLERGY_INGREDIENTS',
        value: 'lactose, nuts',
    },
]

const componentClass = 'user-course';
const keyPrefix = 'PUBLIC_COURSE';

function UserCourse() {
    const { t, i18n } = useTranslation([], {keyPrefix});
    const tFixed = i18n.getFixedT(i18n.language);

    return (
        <div className={componentClass}>
            {Photo && (
                <div className={GetModifiers(componentClass, 'photo-block')}>
                    <img
                        src={Photo}
                        alt={t('PHOTO_ALT')}
                        className={GetModifiers(componentClass, 'photo')}
                    />
                </div>
            )}
            <div className={GetModifiers(componentClass, 'info')}>
                <div className={GetModifiers(componentClass, 'title')}>
                    vegan magic monkey
                </div>
                <div className={GetModifiers(componentClass, 'properties')}>
                    <div className={GetModifiers(componentClass, 'property')}>
                        <div className={GetModifiers(componentClass, 'property-name')}>
                            coffee or chocolate or vanilla or peanut butter + oreos 0,8 €
                        </div>
                    </div>
                    {Properties.map((item, index) => {
                        const {
                            name,
                            value,
                        } = item;
                        return (
                            <div key={index} className={GetModifiers(componentClass, 'property')}>
                                <div className={GetModifiers(componentClass, 'property-name')}>
                                    {t(name)}
                                </div>
                                {value && (
                                    <div className={GetModifiers(componentClass, 'property-value')}>
                                        {value}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
                <div className={GetModifiers(componentClass, 'price')}>
                    5,00 {tFixed('COMMON.CURRENCY_EURO')}
                </div>
            </div>
        </div>
    );
}

export default UserCourse;