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
import {ROUTE_ADD_CATEGORY, ROUTE_MENU} from "../../constants/routes";
import {SIZE} from "../../constants/sizes";
import {CreateAbsolutePath} from "../../utils/routes";
import TapTarget from "../../components/TapTarget";
import LongArrowIcon from "../../components/Icons/LongArrowIcon";
import {DIRECTION} from "../../constants/positions";
import {useTranslation} from "react-i18next";
import Input from "../../components/Input";

const componentClass = 'course-form';
const keyPrefix = 'COURSE_FORM';

function CourseForm() {
    const {t, i18n} = useTranslation([], {keyPrefix});
    const tFixed = i18n.getFixedT(i18n.language);
    const navigate = useNavigate();

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [time, setTime] = useState<string>('');

    const disabled = useMemo<boolean>(() => {
        return !title;
    }, [title]);

    const saveAndCreateNew = () => {
        setTitle('');
    }

    return (
        <div className={componentClass}>
            <Header/>
            <Cards>
                <Card
                    title={t('TITLE')}
                    icon={
                        <TapTarget
                            className={GetModifiers(componentClass, 'back')}
                            onClick={() => {
                                navigate(CreateAbsolutePath(ROUTE_MENU))
                            }}
                        >
                            <LongArrowIcon
                                direction={DIRECTION.LEFT}
                            />
                        </TapTarget>
                    }
                >
                    <div className={GetModifiers(componentClass, 'form')}>
                        <Input
                            placeholder={t('TITLE_PLACEHOLDER')}
                            value={title}
                            onChange={(event) => {
                                setTitle(event.target.value);
                            }}
                        />
                        <FormSection
                            className={GetModifiers(componentClass, 'section')}
                            rows={[
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
                                    type: FORM_SECTION_ROW_TYPE.BISECTED,
                                    className: GetModifiers(componentClass, 'section-footer'),
                                    children: [
                                        {
                                            type: FORM_SECTION_ROW_TYPE.INPUT,
                                            props: {
                                                placeholder: t('PRICE_PLACEHOLDER'),
                                                value: price,
                                                onChange: (event) => {
                                                    setPrice(event.target.value);
                                                },
                                            },
                                        },
                                        {
                                            type: FORM_SECTION_ROW_TYPE.INPUT,
                                            props: {
                                                placeholder: t('TIME_PLACEHOLDER'),
                                                value: time,
                                                onChange: (event) => {
                                                    setTime(event.target.value);
                                                },
                                            },
                                        },
                                    ]
                                },
                            ]}/>
                        <Button
                            tapClassName={GetModifiers(componentClass, 'submit')}
                            disabled={disabled}
                            sticky={true}
                            onClick={() => {
                                navigate(CreateAbsolutePath(ROUTE_MENU))
                            }}
                        >
                            {t('SAVE_BUTTON')}
                        </Button>
                        <div className={GetModifiers(componentClass, 'footer')}>
                            <LinkButton
                                onClick={saveAndCreateNew}
                                to={ROUTE_ADD_CATEGORY}
                                size={SIZE.SUBTITLE}
                                disabled={disabled}
                            >
                                {t('SAVE_AND_CREATE_BUTTON')} <span>
                                {tFixed('COMMON.ARROW_RIGHT')}
                            </span>
                            </LinkButton>
                        </div>
                    </div>
                </Card>
            </Cards>
        </div>
    );
}

export default CourseForm;