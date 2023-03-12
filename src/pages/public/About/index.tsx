import React from 'react';
import {useTranslation} from "react-i18next";
import {GetModifiers} from "../../../utils/classNames";
import {AboutSocials} from "./constants";
import TapTarget from "../../../components/TapTarget";
import FormSection from "../../../components/FormSection";
import {FORM_SECTION_ROW_TYPE} from "../../../components/FormSection/constants";
import Background from './background.png';
import Logo from './logo.png';

const componentClass = 'public-about';
const keyPrefix = 'PUBLIC_ABOUT';

function PublicAbout() {
    const { t } = useTranslation([], {keyPrefix});

    return (
        <div className={componentClass}>
            <div className={GetModifiers(componentClass, 'main')}>
                {Background && (
                    <div className={GetModifiers(componentClass, 'background')}>
                        <img
                            src={Background}
                            alt={t('BACKGROUND_ALT')}
                            className={GetModifiers(componentClass, 'background-image')}
                        />
                    </div>
                )}
                <div className={GetModifiers(componentClass, 'main-info')}>
                    {Logo && (
                        <div className={GetModifiers(componentClass, 'logo', [{
                            condition: !Background,
                            value: 'no-background'
                        }])}>
                            <img
                                src={Logo}
                                alt={t('LOGO_ALT')}
                                className={GetModifiers(componentClass, 'logo-image')}
                            />
                        </div>
                    )}
                    <div className={GetModifiers(componentClass, 'title')}>
                        federal café
                    </div>
                    <div className={GetModifiers(componentClass, 'description')}>
                        Breakfast, lunch, local products,<br/> vegan menu
                    </div>
                    <div className={GetModifiers(componentClass, 'socials')}>
                        {AboutSocials.map((item) => {
                            return (
                                <TapTarget key={item.value}>
                                    <a rel="noreferrer" target="_blank" href={item.link}
                                       className={GetModifiers(componentClass, 'social')}>
                                        <img src={item.image} alt={t(item.alt)}/>
                                    </a>
                                </TapTarget>
                            )
                        })}
                    </div>
                </div>
            </div>
            <FormSection rows={[
                {
                    type: FORM_SECTION_ROW_TYPE.INPUT,
                    props: {
                        placeholder: t('ADDRESS_PLACEHOLDER'),
                        value: 'Passatge de la Pau 1108002 Barcelona',
                        readonly: true,
                    },
                },
                {
                    type: FORM_SECTION_ROW_TYPE.INPUT,
                    props: {
                        placeholder: t('CHECK_PLACEHOLDER'),
                        value: '10−15 €',
                        readonly: true,
                    },
                },
            ]}/>
            <FormSection rows={[
                {
                    type: FORM_SECTION_ROW_TYPE.INPUT,
                    props: {
                        placeholder: t('PHONE_PLACEHOLDER'),
                        value: '932 808 171',
                        readonly: true,
                    },
                },
                {
                    type: FORM_SECTION_ROW_TYPE.INPUT,
                    props: {
                        placeholder: t('EMAIL_PLACEHOLDER'),
                        value: 'barcelonagotic@federalcafe.es',
                        readonly: true,
                    },
                },
            ]}/>
        </div>
    );
}

export default PublicAbout;