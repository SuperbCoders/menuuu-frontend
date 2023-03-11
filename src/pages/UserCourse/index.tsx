import React from 'react';
import {GetModifiers} from "../../utils/classNames";
import Photo from './photo.png';

const componentClass = 'user-course';

const Properties = [
    {
        name: 'coffee or chocolate or vanilla or peanut butter + oreos 0,8 €',
    },
    {
        name: 'cooking time',
        value: '5−7 minutes',
    },
    {
        name: 'allergy ingredients',
        value: 'lactose, nuts',
    },
]

function UserCourse() {
    return (
        <div className={componentClass}>
            {Photo && (
                <div className={GetModifiers(componentClass, 'photo-block')}>
                    <img
                        src={Photo}
                        alt='Course'
                        className={GetModifiers(componentClass, 'photo')}
                    />
                </div>
            )}
            <div className={GetModifiers(componentClass, 'info')}>
                <div className={GetModifiers(componentClass, 'title')}>
                    vegan magic monkey
                </div>
                <div className={GetModifiers(componentClass, 'properties')}>
                    {Properties.map((item, index) => {
                        const {
                            name,
                            value,
                        } = item;
                        return (
                            <div key={index} className={GetModifiers(componentClass, 'property')}>
                                <div className={GetModifiers(componentClass, 'property-name')}>
                                    {name}
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
                    5,00 €
                </div>
            </div>
        </div>
    );
}

export default UserCourse;