import React, {MouseEvent} from 'react';
import {GetModifiers} from "../../utils/classNames";
import SelectButton from "../SelectButton";
import {SELECT_BUTTON_TYPE} from "../SelectButton/constants";
import {PLAN_TYPE, PlanInterface} from "../../pages/Plans/constants";
import {useTranslation} from "react-i18next";

const componentClass = 'plan';
const keyPrefix = 'PLAN';

export interface PlanProps {
    plan: PlanInterface;
    selected: boolean;
    paid: boolean;
    onSelectPlan: (event: MouseEvent<HTMLButtonElement>, type: PLAN_TYPE) => void;
}

function Plan(props: PlanProps) {
    const {
        plan,
        selected,
        paid,
        onSelectPlan,
    } = props;
    const {
        type,
        title,
        badges,
        price,
        disabled,
    } = plan;
    const {t, i18n} = useTranslation([], {keyPrefix});
    const tFixed = i18n.getFixedT(i18n.language);
    const TypeMods = {
        condition: type,
        value: type,
    };

    return (
        <div
            key={type}
            className={GetModifiers(componentClass, '', [
                TypeMods,
                {
                    condition: selected,
                    value: 'selected',
                },
                {
                    condition: disabled,
                    value: 'disabled',
                },
            ])}
        >
            <div className={GetModifiers(componentClass, 'title')}>
                {t(title)} {paid && t('TITLE_CURRENT')} {t('TITLE')}
            </div>
            <div className={GetModifiers(componentClass, 'price-block')}>
                <div className={GetModifiers(componentClass, 'currency')}>
                    {tFixed('COMMON.CURRENCY')}
                </div>
                <div className={GetModifiers(componentClass, 'price')}>
                    {price}
                </div>
                <div className={GetModifiers(componentClass, 'period')}>
                    {t('PERIOD')}
                </div>
            </div>
            <div className={GetModifiers(componentClass, 'badges')}>
                {badges.map((badge) => {
                    return (
                        <div
                            key={badge}
                            className={GetModifiers(componentClass, 'badge-block')}
                        >
                            <div className={GetModifiers(componentClass, 'tick')}>
                                {tFixed('COMMON.TICK')}
                            </div>
                            <div className={GetModifiers(componentClass, 'badge')}>
                                {t(badge)}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={GetModifiers(componentClass, 'footer')}>
                {paid || disabled ? (
                    <div className={GetModifiers(componentClass, 'hint')}>
                        {disabled && t('EXCEEDED_LIMITS')}
                        {paid && (
                            <>
                                {t('NEXT_DATE')}
                                <div className={GetModifiers(componentClass, 'date')}>
                                    14 April 2023
                                </div>
                            </>
                        )}
                    </div>
                ) : (
                    <SelectButton
                        type={SELECT_BUTTON_TYPE.PLAN}
                        tapClassName={GetModifiers(
                            componentClass,
                            'select-tap',
                            [TypeMods],
                        )}
                        className={GetModifiers(componentClass, 'select')}
                        onClick={(event) => onSelectPlan(event, type)}
                        selected={selected}
                    >
                        {t(selected ? 'BUTTON_SELECTED' : 'BUTTON_SELECT')}
                    </SelectButton>
                )}
            </div>
        </div>
    );
}

export default Plan;