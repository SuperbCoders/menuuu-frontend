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

const componentClass = 'add-category';

function AddCategory() {
    const navigate = useNavigate();

    const [title, setTitle] = useState<string>('');

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
                    title='add category'
                >
                    <div className={GetModifiers(componentClass, 'form')}>
                        <FormSection rows={[
                            {
                                type: FORM_SECTION_ROW_TYPE.INPUT,
                                props: {
                                    placeholder: 'title',
                                    value: title,
                                    onChange: (event) => {
                                        setTitle(event.target.value);
                                    },
                                },
                            },
                        ]}/>
                        <Button
                            tapClassName={GetModifiers(componentClass, 'submit')}
                            disabled={disabled}
                            onClick={() => {
                                navigate(CreateAbsolutePath(ROUTE_MENU))
                            }}
                        >
                            save
                        </Button>
                        <div className={GetModifiers(componentClass, 'footer')}>
                            <LinkButton
                                onClick={saveAndCreateNew}
                                to={ROUTE_ADD_CATEGORY}
                                size={SIZE.SUBTITLE}
                                disabled={disabled}
                            >
                                save and create new <span>→</span>
                            </LinkButton>
                        </div>
                    </div>
                </Card>
            </Cards>
        </div>
    );
}

export default AddCategory;