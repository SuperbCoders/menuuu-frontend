import React, {useState} from 'react';
import {GetModifiers} from "../../utils/classNames";
import Grid from "../Grid";
import LinkButton from "../LinkButton";
import {SIZE} from "../../constants/sizes";
import {HeaderBurgerLines, HeaderNavigationItems} from "./constants";
import {ROUTE_SETTINGS} from "../../constants/routes";
import LogoIcon from "../Icons/LogoIcon";
import {useTranslation} from "react-i18next";

const componentClass = 'header';
const keyPrefix = 'HEADER';

function Header() {
    const { t, i18n } = useTranslation([], {keyPrefix});
    const tFixed = i18n.getFixedT(i18n.language);
    const [menuVisibility, setMenuVisibility] = useState<boolean>(false);

    return (
        <header className={GetModifiers(componentClass, '', [{
            condition: menuVisibility,
            value: 'expanded',
        }])}>
            <Grid
                className={GetModifiers(componentClass, 'grid')}
                columns={[
                    false,
                    (
                        <div className={GetModifiers(componentClass, 'logo', [{
                            condition: menuVisibility,
                            value: 'active',
                        }])}>
                            <LogoIcon />
                        </div>
                    ),
                    (
                        <button
                            className={GetModifiers(componentClass, 'burger')}
                            onClick={() => setMenuVisibility(!menuVisibility)}
                        >
                            {HeaderBurgerLines.map((item) => <span
                                key={item}
                                className={GetModifiers(componentClass, 'burger-line', [{
                                    condition: menuVisibility,
                                    value: 'active',
                                }])}
                            />)}
                        </button>
                    )
                ]}
            />
            <div className={GetModifiers(componentClass, 'menu-wrapper', [{
                condition: menuVisibility,
                value: 'visible',
            }])}>
                <Grid
                    className={GetModifiers(componentClass, 'menu-grid')}
                    columns={[
                        false,
                        (
                            <div className={GetModifiers(componentClass, 'menu')}>
                                <div className={GetModifiers(componentClass, 'navigation')}>
                                    {HeaderNavigationItems.map((item) => {
                                        return (
                                            <LinkButton
                                                key={item.to}
                                                to={item.to}
                                                className={GetModifiers(componentClass, 'navigation-link')}
                                                size={SIZE.DISPLAY}
                                            >
                                                {t(item.title)}
                                            </LinkButton>
                                        )
                                    })}
                                </div>
                                <LinkButton
                                    to={ROUTE_SETTINGS}
                                    className={GetModifiers(componentClass, 'navigation-link', [{
                                        condition: true,
                                        value: 'small'
                                    }])}
                                    size={SIZE.SUBTITLE}
                                >
                                    {t('ACCOUNT_SETTINGS')} <span>{tFixed('COMMON.ARROW_RIGHT')}</span>
                                </LinkButton>
                            </div>
                        ),
                    ]}
                />
            </div>
        </header>
    );
}

export default Header;
