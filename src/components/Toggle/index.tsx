import React, {MouseEvent, ReactNode} from 'react';
import {GetModifiers} from "../../utils/classNames";
import TapTarget from "../TapTarget";

const componentClass = 'toggle';

export interface ToggleProps {
    active?: boolean;
    disabled?: boolean;
    tapClassName?: string;
    className?: string;
    children?: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function Toggle(props: ToggleProps) {
    const {
        active,
        disabled,
        tapClassName = '',
        className = '',
        children,
        onClick,
    } = props;

    return (
        <TapTarget className={tapClassName}>
            <button
                onClick={onClick}
                className={GetModifiers(componentClass, '', [
                    {
                        condition: active,
                        value: 'active',
                    },
                    {
                        condition: disabled,
                        value: 'disabled',
                    },
                ]) + ` ${className}`}
            >
                {children}
            </button>
        </TapTarget>
    );
}

export default Toggle;