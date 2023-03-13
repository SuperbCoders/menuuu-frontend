import React, {useRef, MouseEvent, Ref, ReactNode, CSSProperties} from 'react';
import {GetModifiers} from "../../utils/classNames";

const componentClass = 'tap-target';

export interface TapTargetProps {
    className?: string;
    sticky?: boolean;
    style?: CSSProperties;
    children?: ReactNode;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

function TapTarget(props: TapTargetProps) {
    const {
        className = '',
        sticky,
        style,
        children,
        onClick,
    } = props;
    const ref: Ref<HTMLDivElement> = useRef(null);

    const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
        if (onClick) {
            onClick(event);
        } else {
            const children: HTMLElement = ref.current.children[0] as HTMLElement;
            if (children && !children.isEqualNode(event.target as Node)) {
                children.click();
            }
        }
    }

    return (
        <div
            style={style}
            ref={ref}
            className={GetModifiers(componentClass, '', [
                {
                    condition: sticky,
                    value: 'sticky',
                },
            ]) + ` ${className}`}
            onClick={clickHandler}
        >
            {children}
        </div>
    );
}

export default TapTarget;