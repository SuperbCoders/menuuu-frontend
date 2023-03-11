import React, {SVGProps} from "react";

function PlusIcon(props: SVGProps<any>) {
    return (
        <svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
            <path d="M13 0H11V11H0V13H11V24H13V13H24V11H13V0Z" fill="currentColor"/>
        </svg>
    );

}
export default PlusIcon;