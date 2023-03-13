import React, {MouseEvent, ReactNode} from 'react';
import {GetModifiers} from "../../utils/classNames";
import TapTarget from "../TapTarget";
import {BUTTON_OPACITY, BUTTON_TYPE} from "./constants";
import {COLOR_NAME} from "../../constants/colors";

const componentClass = 'button';

export interface ButtonProps {
    className?: string;
    tapClassName?: string;
    width?: string;
    disabled?: boolean;
    sticky?: boolean;
    type?: BUTTON_TYPE;
    opacity?: BUTTON_OPACITY;
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
        sticky,
        type,
        opacity,
        colorTheme,
        children,
        onClick,
    } = props;

    return (
        <TapTarget
            style={{
                display: width === 'auto' && 'inline-flex',
            }}
            sticky={sticky}
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
                        condition: opacity,
                        value: opacity,
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