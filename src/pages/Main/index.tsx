import React from 'react';
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {GetModifiers} from "../../utils/classNames";
import Header from "../../components/Header";
import Card from "../../components/Card";
import {COLOR_NAME} from "../../constants/colors";
import Button from "../../components/Button";
import Cards from "../../components/Cards";
import {ROUTE_PROFILE} from "../../constants/routes";
import {CreateAbsolutePath} from "../../utils/routes";
import Grid from "../../components/Grid";

const componentClass = 'main';
const keyPrefix = 'MAIN';

function Main() {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation([], { keyPrefix });
    const tFixed = i18n.getFixedT(i18n.language);

    return (
        <div className={componentClass}>
            <Header/>
            <Cards>
                <Card
                    colorTheme={COLOR_NAME.FRUIT}
                    title={t('TITLE')}
                >
                    <Grid
                        columns={[
                            false,
                            (
                                <div className={GetModifiers(componentClass, 'description')}>
                                    {t('DESCRIPTION')} <br/>
                                    <span className={GetModifiers(componentClass, 'arrow-down')}>
                                        {tFixed('COMMON.ARROW_DOWN')}
                                    </span>
                                </div>
                            ),
                        ]}
                    />
                </Card>
                <Card
                    colorTheme={COLOR_NAME.SNOW}
                    title={t('PROFILE_TITLE')}
                    icon={
                        <div className={GetModifiers(componentClass, 'step')}>
                            {t('STEP_ONE')}
                        </div>
                    }
                >
                    <Grid
                        columns={[
                            false,
                            (
                                <div>
                                    <div className={GetModifiers(componentClass, 'profile-description')}>
                                        {t('PROFILE_DESCRIPTION')}
                                    </div>
                                    <Button
                                        width='auto'
                                        colorTheme={COLOR_NAME.COAL}
                                        onClick={() => {
                                            navigate(CreateAbsolutePath(ROUTE_PROFILE))
                                        }}
                                    >
                                        {t('PROFILE_COMPLETE')}
                                    </Button>
                                </div>
                            ),
                        ]}
                    />
                </Card>
                <Card
                    colorTheme={COLOR_NAME.SNOW}
                    title={t('MENU_TITLE')}
                    disabled={true}
                    icon={
                        <div className={GetModifiers(componentClass, 'step', [{
                            condition: true,
                            value: 'disabled',
                        }])}>
                            {t('STEP_TWO')}
                        </div>
                    }
                >
                </Card>
            </Cards>
        </div>
    );
}

export default Main;