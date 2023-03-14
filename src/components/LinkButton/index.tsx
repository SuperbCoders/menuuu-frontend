import React, {MouseEvent, ReactNode} from 'react';
import { Link } from "react-router-dom";
import {GetModifiers} from "../../utils/classNames";
import TapTarget from "../TapTarget";
import {SIZE} from "../../constants/sizes";
import {CreateAbsolutePath} from "../../utils/routes";

const componentClass = 'link-button';

export interface LinkButtonProps {
    to?: string;
    className?: string;
    tapClassName?: string
    disabled?: boolean;
    size?: SIZE;
    children?: ReactNode;
    onClick?: (event: MouseEvent<HTMLInputElement>) => void;
}

function LinkButton(props: LinkButtonProps) {
    const {
        to,
        className = '',
        tapClassName = '',
        size = '',
        disabled,
        children,
        onClick,
    } = props;

    return (
        <TapTarget
            className={tapClassName}
            onClick={onClick}
        >
            <Link
                to={(onClick || disabled) ? '#' : CreateAbsolutePath(to)}
                className={GetModifiers(componentClass, '', [
                    {
                        condition: size,
                        value: `size-${size}`,
                    },
                    {
                        condition: disabled,
                        value: 'disabled',
                    },
                ]) + ` ${className}`}
            >
                {children}
            </Link>
        </TapTarget>
    );
}

export default LinkButton;