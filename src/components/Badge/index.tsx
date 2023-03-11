import React, {ReactNode} from 'react';
import {GetModifiers} from "../../utils/classNames";

const componentClass = 'badge';

export interface BadgeProps {
    children?: ReactNode;
}

function Badge(props: BadgeProps) {
    const {
        children,
    } = props;

    return (
        <div className={GetModifiers(componentClass)}>
            {children}
        </div>
    );
}

export default Badge;