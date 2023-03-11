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

const componentClass = 'profile';
const formName = 'profile';

function Profile() {
    const navigate = useNavigate();

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
                    title='your restaurant'
                >
                    <div className={GetModifiers(componentClass, 'form')}>
                        <div className={GetModifiers(componentClass, 'header')}>
                            <FileInput
                                name='cover'
                                formName={formName}
                                title='upload cover'
                                hint='jpeg less than 3 mb'
                                icon={<CameraIcon/>}
                                onChange={onChangeCover}
                            />
                            <FileInput
                                name='logo'
                                formName={formName}
                                title='upload logo'
                                hint='jpeg 192×192 px'
                                className={GetModifiers(componentClass, 'logo')}
                                icon={<LongArrowIcon/>}
                                onChange={onChangeCover}
                            />
                        </div>
                        <FormSection rows={[
                            {
                                type: FORM_SECTION_ROW_TYPE.INPUT,
                                props: {
                                    placeholder: 'name',
                                    value: name,
                                    onChange: (event) => {
                                        setName(event.target.value);
                                    },
                                },
                            },
                            {
                                type: FORM_SECTION_ROW_TYPE.INPUT,
                                props: {
                                    placeholder: 'nickname',
                                    value: nickname,
                                    onChange: (event) => {
                                        setNickname(event.target.value);
                                    },
                                },
                            },
                            {
                                type: FORM_SECTION_ROW_TYPE.INPUT,
                                props: {
                                    placeholder: 'address',
                                    value: address,
                                    onChange: (event) => {
                                        setAddress(event.target.value);
                                    },
                                },
                            },
                            {
                                type: FORM_SECTION_ROW_TYPE.INPUT,
                                props: {
                                    placeholder: 'description',
                                    value: description,
                                    onChange: (event) => {
                                        setDescription(event.target.value);
                                    },
                                },
                            },
                            {
                                type: FORM_SECTION_ROW_TYPE.INPUT,
                                props: {
                                    placeholder: 'category',
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
                                            placeholder: 'avg. check',
                                            minifiedPlaceholder: 'avg. check, from',
                                            value: check,
                                            onChange: (event) => {
                                                setCheck(event.target.value);
                                            },
                                        },
                                    },
                                    {
                                        type: FORM_SECTION_ROW_TYPE.INPUT,
                                        props: {
                                            placeholder: 'to',
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
                                    placeholder: 'phone',
                                    value: phone,
                                    onChange: (event) => {
                                        setPhone(event.target.value);
                                    },
                                },
                            },
                            {
                                type: FORM_SECTION_ROW_TYPE.INPUT,
                                props: {
                                    placeholder: 'e-mail',
                                    value: email,
                                    onChange: (event) => {
                                        setEmail(event.target.value);
                                    },
                                },
                            },
                            {
                                type: FORM_SECTION_ROW_TYPE.INPUT,
                                props: {
                                    placeholder: 'facebook',
                                    value: facebook,
                                    onChange: (event) => {
                                        setFacebook(event.target.value);
                                    },
                                },
                            },
                            {
                                type: FORM_SECTION_ROW_TYPE.INPUT,
                                props: {
                                    placeholder: 'instagram',
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
                            save
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
                                save and create menu <span>→</span>
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
                                preview
                            </LinkButton>
                        </div>
                    </div>
                </Card>
            </Cards>
        </div>
    );
}

export default Profile;