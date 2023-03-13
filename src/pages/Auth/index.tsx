import React, {useMemo, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {GetModifiers} from "../../utils/classNames";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Cards from "../../components/Cards";
import FormSection from "../../components/FormSection";
import {FORM_SECTION_ROW_TYPE} from "../../components/FormSection/constants";
import Button from "../../components/Button";
import {connect} from "react-redux";
import {LoginRequestedAction, LoginRequestedPayload} from "../../store/users/actions";
import {useTranslation} from "react-i18next";

const componentClass = 'auth';

interface AuthProps {
    loginRequestedAction: (payload: LoginRequestedPayload) => void;
}

function Auth(props: AuthProps) {
    const {
        loginRequestedAction,
    } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const disabled = useMemo<boolean>(() => {
        return !login || !password;
    }, [login, password]);

    const submitHandler = () => {
        loginRequestedAction({
            username: login,
            password,
        })
    }

    return (
        <div className={componentClass}>
            <Header/>
            <Cards>
                <Card
                    title="AUTH.TITLE"
                >
                    <div className={GetModifiers(componentClass, 'form')}>
                        <FormSection rows={[
                            {
                                type: FORM_SECTION_ROW_TYPE.INPUT,
                                props: {
                                    placeholder: 'AUTH.LOGIN_PLACEHOLDER',
                                    value: login,
                                    onChange: (event) => {
                                        setLogin(event.target.value);
                                    },
                                },
                            },
                            {
                                type: FORM_SECTION_ROW_TYPE.INPUT,
                                props: {
                                    placeholder: 'AUTH.PASSWORD_PLACEHOLDER',
                                    value: password,
                                    onChange: (event) => {
                                        setPassword(event.target.value);
                                    },
                                },
                            },
                        ]}/>
                        <Button
                            tapClassName={GetModifiers(componentClass, 'submit')}
                            disabled={disabled}
                            sticky={true}
                            onClick={submitHandler}
                        >
                            {t('AUTH.SUBMIT')}
                        </Button>
                    </div>
                </Card>
            </Cards>
        </div>
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        loginRequestedAction: (payload) => dispatch(LoginRequestedAction(payload)),
    }
};

const mapStateToProps = (state) => {
    return {
        token: state.users.token
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);