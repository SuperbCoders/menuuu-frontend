import React, {SVGProps} from "react";

function DotsIcon(props: SVGProps<any>) {
    return (
        <svg viewBox="0 0 24 4" width={24} height={4} fill="none" {...props}>
            <path d="M4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2Z" fill="currentColor"/>
            <path d="M14 2C14 3.10457 13.1046 4 12 4C10.8954 4 10 3.10457 10 2C10 0.89543 10.8954 0 12 0C13.1046 0 14 0.89543 14 2Z" fill="currentColor"/>
            <path d="M24 2C24 3.10457 23.1046 4 22 4C20.8954 4 20 3.10457 20 2C20 0.89543 20.8954 0 22 0C23.1046 0 24 0.89543 24 2Z" fill="currentColor"/>
        </svg>
    );

}
export default DotsIcon;