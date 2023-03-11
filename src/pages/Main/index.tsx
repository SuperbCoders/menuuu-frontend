import React from 'react';
import {GetModifiers} from "../../utils/classNames";
import Header from "../../components/Header";
import Card from "../../components/Card";
import {COLOR_NAME} from "../../constants/colors";
import Button from "../../components/Button";
import Cards from "../../components/Cards";
import {useNavigate} from "react-router-dom";
import {ROUTE_PROFILE} from "../../constants/routes";
import {CreateAbsolutePath} from "../../utils/routes";
import Grid from "../../components/Grid";

const componentClass = 'main';

function Main() {
    const navigate = useNavigate();

    return (
        <div className={componentClass}>
            <Header/>
            <Cards>
                <Card
                    colorTheme={COLOR_NAME.FRUIT}
                    title='let’s get it started!'
                >
                    <Grid
                        columns={[
                            false,
                            (
                                <div className={GetModifiers(componentClass, 'description')}>
                                    fill out a profile, create a restaurant menu and publish it <br/>
                                    <span className={GetModifiers(componentClass, 'arrow-down')}>↓</span>
                                </div>
                            ),
                        ]}
                    />
                </Card>
                <Card
                    colorTheme={COLOR_NAME.SNOW}
                    title='profile'
                    icon={
                        <div className={GetModifiers(componentClass, 'step')}>
                            1
                        </div>
                    }
                >
                    <Grid
                        columns={[
                            false,
                            (
                                <div>
                                    <div className={GetModifiers(componentClass, 'profile-description')}>
                                        complete a restaurant profile
                                    </div>
                                    <Button
                                        width='auto'
                                        colorTheme={COLOR_NAME.COAL}
                                        onClick={() => {
                                            navigate(CreateAbsolutePath(ROUTE_PROFILE))
                                        }}
                                    >
                                        complete
                                    </Button>
                                </div>
                            ),
                        ]}
                    />
                </Card>
                <Card
                    colorTheme={COLOR_NAME.SNOW}
                    title='create menu'
                    disabled={true}
                    icon={
                        <div className={GetModifiers(componentClass, 'step', [{
                            condition: true,
                            value: 'disabled',
                        }])}>
                            2
                        </div>
                    }
                >
                </Card>
            </Cards>
        </div>
    );
}

export default Main;