import React, {useMemo, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {GetModifiers} from "../../utils/classNames";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Cards from "../../components/Cards";
import FormSection from "../../components/FormSection";
import {FORM_SECTION_ROW_TYPE} from "../../components/FormSection/constants";
import Button from "../../components/Button";
import LinkButton from "../../components/LinkButton";
import {ROUTE_MENU, ROUTE_PREVIEW, ROUTE_ROOT} from "../../constants/routes";
import {SIZE} from "../../constants/sizes";
import FileInput from "../../components/FileInput";
import CameraIcon from "../../components/Icons/CameraIcon";
import LongArrowIcon from "../../components/Icons/LongArrowIcon";
import {useTranslation} from "react-i18next";

const componentClass = 'profile';
const formName = 'profile';
const keyPrefix = 'PROFILE';

function Profile() {
    const navigate = useNavigate();
    const {t, i18n} = useTranslation([], {keyPrefix});
    const tFixed = i18n.getFixedT(i18n.language);

    const [name, setName] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [check, setCheck] = useState<string>('');
    const [to, setTo] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [facebook, setFacebook] = useState<string>('');
    const [instagram, setInstagram] = useState<string>('');

    const disabled = useMemo<boolean>(() => {
        return !name;
    }, [
        name, nickname, address, description,
        category, check, to, phone,
        email, facebook, instagram,
    ]);

    const onChangeCover = (file: File): void => {

    };

    return (
        <div className={componentClass}>
            <Header/>
            <Cards>
                <Card
                    title={t('TITLE')}
                >
                    <div className={GetModifiers(componentClass, 'form')}>
                        <div className={GetModifiers(componentClass, 'header')}>
                            <FileInput
                                name='cover'
                                formName={formName}
                                title={t('COVER_TITLE')}
                                hint={t('COVER_HINT')}
                                icon={<CameraIcon/>}
                                onChange={onChangeCover}
                            />
                            <FileInput
                                name='logo'
                                formName={formName}
                                title={t('LOGO_TITLE')}
                                hint={t('LOGO_HINT')}
                                className={GetModifiers(componentClass, 'logo')}
                                icon={<LongArrowIcon/>}
                                onChange={onChangeCover}
                            />
                        </div>
                        <FormSection rows={[
                            {
                                type: FORM_SECTION_ROW_TYPE.INPUT,
                                props: {
                                    placeholder: t('NAME_PLACEHOLDER'),
                                    value: name,
                                    onChange: (event) => {
                                        setName(event.target.value);
                                    },
                                },
                            },
                            {
                                type: FORM_SECTION_ROW_TYPE.INPUT,
                                props: {
                                    placeholder: t('NICKNAME_PLACEHOLDER'),
                                    value: nickname,
                                    onChange: (event) => {
                                        setNickname(event.target.value);
                                    },
                                },
                            },
                            {
                                type: FORM_SECTION_ROW_TYPE.INPUT,
                                props: {
                                    placeholder: t('ADDRESS_PLACEHOLDER'),
                                    value: address,
                                    onChange: (event) => {
                                        setAddress(event.target.value);
                                    },
                                },
                            },
                            {
                                type: FORM_SECTION_ROW_TYPE.INPUT,
                                props: {
                                    placeholder: t('DESCRIPTION_PLACEHOLDER'),
                                    value: description,
                                    onChange: (event) => {
                                        setDescription(event.target.value);
                                    },
                                },
                            },
                            {
                                type: FORM_SECTION_ROW_TYPE.INPUT,
                                props: {
                                    placeholder: t('CATEGORY_PLACEHOLDER'),
                                    value: category,
                                    onChange: (event) => {
                                        setCategory(event.target.value);
                                    },
                                },
                            },
                            {
                                type: FORM_SECTION_ROW_TYPE.BISECTED,
                                children: [
                                    {
                                        type: FORM_SECTION_ROW_TYPE.INPUT,
                                        props: {
                                            placeholder: t('CHECK_PLACEHOLDER'),
                                            minifiedPlaceholder: t('CHECK_MINIFIED_PLACEHOLDER'),
                                            value: check,
                                            onChange: (event) => {
                                                setCheck(event.target.value);
                                            },
                                        },
                                    },
                                    {
                                        type: FORM_SECTION_ROW_TYPE.INPUT,
                                        props: {
                                            placeholder: t('TO_PLACEHOLDER'),
                                            value: to,
                                            onChange: (event) => {
                                                setTo(event.target.value);
                                            },
                                        },
                                    },
                                ]
                            },
                        ]}/>
                        <FormSection rows={[
                            {
                                type: FORM_SECTION_ROW_TYPE.INPUT,
                                props: {
                                    placeholder: t('PHONE_PLACEHOLDER'),
                                    value: phone,
                                    onChange: (event) => {
                                        setPhone(event.target.value);
                                    },
                                },
                            },
                            {
                                type: FORM_SECTION_ROW_TYPE.INPUT,
                                props: {
                                    placeholder: t('EMAIL_PLACEHOLDER'),
                                    value: email,
                                    onChange: (event) => {
                                        setEmail(event.target.value);
                                    },
                                },
                            },
                            {
                                type: FORM_SECTION_ROW_TYPE.INPUT,
                                props: {
                                    placeholder: t('FACEBOOK_PLACEHOLDER'),
                                    value: facebook,
                                    onChange: (event) => {
                                        setFacebook(event.target.value);
                                    },
                                },
                            },
                            {
                                type: FORM_SECTION_ROW_TYPE.INPUT,
                                props: {
                                    placeholder: t('INSTAGRAM_PLACEHOLDER'),
                                    value: instagram,
                                    onChange: (event) => {
                                        setInstagram(event.target.value);
                                    },
                                },
                            },
                        ]}/>
                        <Button
                            disabled={disabled}
                            onClick={() => {
                                navigate(ROUTE_ROOT)
                            }}
                        >
                            {t('SAVE_BUTTON')}
                        </Button>
                        <div className={GetModifiers(componentClass, 'footer')}>
                            <LinkButton
                                to={ROUTE_MENU}
                                className={GetModifiers(componentClass, 'navigation-link', [{
                                    condition: true,
                                    value: 'small'
                                }])}
                                size={SIZE.SUBTITLE}
                                disabled={disabled}
                            >
                                {t('SAVE_AND_CREATE_BUTTON')} <span>
                                {tFixed('COMMON.ARROW_RIGHT')}
                                </span>
                            </LinkButton>
                            <LinkButton
                                to={ROUTE_PREVIEW}
                                className={GetModifiers(componentClass, 'navigation-link', [{
                                    condition: true,
                                    value: 'small'
                                }])}
                                size={SIZE.SUBTITLE}
                                disabled={disabled}
                            >
                                {t('PREVIEW_BUTTON')}
                            </LinkButton>
                        </div>
                    </div>
                </Card>
            </Cards>
        </div>
    );
}

export default Profile;