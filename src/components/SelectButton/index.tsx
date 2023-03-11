import React, {MouseEvent, ReactNode} from 'react';
import {GetModifiers} from "../../utils/classNames";
import TapTarget from "../TapTarget";
import {SELECT_BUTTON_TYPE} from "./constants";

const componentClass = 'select-button';

export interface SelectButtonProps {
    selected: boolean;
    type?: SELECT_BUTTON_TYPE;
    tapClassName?: string;
    className?: string;
    children?: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function SelectButton(props: SelectButtonProps) {
    const {
        selected,
        type = SELECT_BUTTON_TYPE.DEFAULT,
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
                        condition: selected,
                        value: 'selected',
                    },
                    {
                        condition: type,
                        value: type,
                    }
                ]) + ` ${className}`}
            >
                {children}
            </button>
        </TapTarget>
    );
}

export default SelectButton;