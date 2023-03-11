import React, {MouseEvent, ReactNode} from 'react';
import {GetModifiers} from "../../utils/classNames";
import TapTarget from "../TapTarget";
import {BUTTON_TYPE} from "./constants";
import {COLOR_NAME} from "../../constants/colors";

const componentClass = 'button';

export interface ButtonProps {
    className?: string;
    tapClassName?: string;
    width?: string;
    disabled?: boolean;
    type?: BUTTON_TYPE;
    colorTheme?: COLOR_NAME;
    children?: ReactNode;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
}

function Button(props: ButtonProps) {
    const {
        className = '',
        tapClassName = '',
        width = '',
        disabled,
        type,
        colorTheme,
        children,
        onClick,
    } = props;

    return (
        <TapTarget
            style={{
                display: width === 'auto' && 'inline-flex',
            }}
            className={tapClassName}
            onClick={onClick}
        >
            <button
                style={{
                    width,
                }}
                className={GetModifiers(componentClass, '', [
                    {
                        condition: type,
                        value: type,
                    },
                    {
                        condition: colorTheme,
                        value: colorTheme,
                    },
                ]) + ` ${className}`}
                disabled={disabled}
            >
                {children}
            </button>
        </TapTarget>
    );
}

export default Button;