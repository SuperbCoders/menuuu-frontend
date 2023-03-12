import React, {MouseEvent, ReactNode} from 'react';
import {GetModifiers} from "../../utils/classNames";
import Grid from "../../components/Grid";
import {COLOR_NAME} from "../../constants/colors";
import {useTranslation} from "react-i18next";

const componentClass = 'card';

export interface CardProps {
    colorTheme?: COLOR_NAME;
    title?: string;
    className?: string;
    disabled?: boolean;
    icon?: ReactNode;
    thirdColumn?: ReactNode;
    children?: ReactNode;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

function Card(props: CardProps) {
    const {
        colorTheme = '',
        disabled,
        title,
        icon,
        thirdColumn,
        children,
        onClick,
    } = props;
    const { t } = useTranslation();

    return (
        <div
            className={GetModifiers(componentClass, '', [
                {
                    condition: colorTheme,
                    value: colorTheme,
                },
                {
                    condition: disabled,
                    value: 'disabled',
                },
                {
                    condition: onClick,
                    value: 'clickable',
                },
            ])}
            onClick={(event) => {
                if (onClick && !disabled) {
                    onClick(event)
                }
            }}
        >
            <Grid
                className={GetModifiers(componentClass, 'header', [{
                    condition: !children,
                    value: 'empty',
                }])}
                columns={[
                    icon,
                    (
                        <div className={GetModifiers(componentClass, 'title')}>
                            {t(title)}
                        </div>
                    ),
                    thirdColumn,
                ]}
            />
            {children}
        </div>
    );
}

export default Card;