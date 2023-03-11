import React, {MouseEvent, useMemo, useState} from 'react';
import {GetModifiers} from "../../utils/classNames";
import Grid from "../../components/Grid";
import Button from "../../components/Button";
import {PLAN_TYPE, PlansList} from "./constants";
import Plan from "../../components/Plan";
import Header from "../../components/Header";

const componentClass = 'plans';

function Plans() {
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
                                    plans
                                </div>
                                <div className={GetModifiers(componentClass, 'description')}>
                                    choose the plan that best <br/> suits your needs
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
                                        {!!upgradePrice && `pay extra $${upgradePrice}`}
                                    <span
                                        className={GetModifiers(componentClass, 'payment-title')}
                                    >
                                        {upgradePrice ? ' and activate new plan in current month' : 'we accept'}
                                    </span>
                                        {!upgradePrice && ' visa, mastercard, unionpay, usdt'}
                                    </div>
                                )}
                                <Button disabled={!planType}>
                                    continue
                                </Button>
                            </div>
                        ),
                    ]}
                />
            </div>
        </>
    );
}

export default Plans;