import React, {SVGProps} from "react";
import {DIRECTION} from "../../constants/positions";

const DirectionToRotateTransformer = {
    [DIRECTION.TOP]: '0',
    [DIRECTION.RIGHT]: '90',
    [DIRECTION.BOTTOM]: '180',
    [DIRECTION.LEFT]: '-90',
}

interface LongArrowIconProps {
    direction?: DIRECTION;
}

function LongArrowIcon(props: SVGProps<any> & LongArrowIconProps) {
    const {
        direction,
    } = props;

    return (
        <svg
            viewBox="0 0 22 26"
            width={22}
            height={26}
            fill="none"
            style={{
                transform: `rotate(${DirectionToRotateTransformer[direction]}deg)`,
                ...props.style,
            }}
            {...props}
        >
            <path d="M20.293 12.7072L21.7072 11.293L11.0001 0.585846L0.292969 11.293L1.70718 12.7072L10.0001 4.41427L10.0001 26H12.0001L12.0001 4.41427L20.293 12.7072Z" fill="currentColor"/>
        </svg>
    );
}
export default LongArrowIcon;