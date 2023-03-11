import React, {ReactNode} from 'react';
import {GetModifiers} from "../../utils/classNames";

const componentClass = 'cards';

export interface CardsProps {
    children: ReactNode;
}

function Cards(props: CardsProps) {
    const {
        children
    } = props;

    return (
        <div
            className={GetModifiers(componentClass)}
        >
            {children}
        </div>
    );
}

export default Cards;