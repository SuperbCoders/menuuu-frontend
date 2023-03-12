import React, {MouseEvent, useMemo, useState} from 'react';
import {GetModifiers} from "../../utils/classNames";
import Grid from "../../components/Grid";
import Button from "../../components/Button";
import {PLAN_TYPE, PlansList} from "./constants";
import Plan from "../../components/Plan";
import Header from "../../components/Header";
import {useTranslation} from "react-i18next";

const componentClass = 'plans';
const keyPrefix = 'PLANS';

function Plans() {
    const {t} = useTranslation([], {keyPrefix});
    const [planType, setPlanType] = useState<PLAN_TYPE>();
    const [paidPlan, setPaidPlan] = useState<PLAN_TYPE>();
    const selectPlan = (event: MouseEvent<HTMLButtonElement>, type: PLAN_TYPE) => {
        if (type === planType) {
            setPlanType(null);
        } else {
            setPlanType(type);
        }
    }

    const upgradePrice = useMemo<number>(() => {
        if (planType && paidPlan) {
            const planToUpgrade = PlansList.find(item => item.type === planType);
            const currentPlan = PlansList.find(item => item.type === paidPlan);
            return planToUpgrade.price - currentPlan.price;
        }
        return 0;
    }, [paidPlan, planType]);

    return (
        <>
            <Header />
            <div className={componentClass}>
                <Grid
                    columns={[
                        false,
                        (
                            <div>
                                <div className={GetModifiers(componentClass, 'title')}>
                                    {t('TITLE')}
                                </div>
                                <div className={GetModifiers(componentClass, 'description')}>
                                    {t('DESCRIPTION_PART_1')} <br/> {t('DESCRIPTION_PART_2')}
                                </div>
                            </div>
                        ),
                    ]}
                />
                <Grid
                    columns={[
                        false,
                        (PlansList.map((plan) => {
                            return (
                                <Plan
                                    key={plan.type}
                                    plan={plan}
                                    selected={plan.type === planType}
                                    paid={plan.type === paidPlan}
                                    onSelectPlan={selectPlan}
                                />
                            )
                        })),
                    ]}
                    columnClassNames={[
                        '',
                        GetModifiers(componentClass, 'list'),
                        '',
                    ]}
                />
                <Grid
                    className={GetModifiers(componentClass, 'footer-grid')}
                    columns={[
                        false,
                        (
                            <div className={GetModifiers(componentClass, 'footer')}>
                                {planType && (
                                    <div className={GetModifiers(componentClass, 'payment')}>
                                        {!!upgradePrice && `${t('EXTRA_PAYMENT_PART_1')}${upgradePrice}`}
                                    <span
                                        className={GetModifiers(componentClass, 'payment-title')}
                                    >
                                        {t(upgradePrice
                                            ? 'EXTRA_PAYMENT_PART_2'
                                            : 'PAYMENT_ACCEPT_TITLE'
                                        )}
                                    </span>
                                        {!upgradePrice && t('PAYMENT_METHODS')}
                                    </div>
                                )}
                            </div>
                        ),
                    ]}
                />
                <Button
                    disabled={!planType}
                    tapClassName={GetModifiers(componentClass, 'continue')}
                >
                    {t('CONTINUE_BUTTON')}
                </Button>
            </div>
        </>
    );
}

export default Plans;