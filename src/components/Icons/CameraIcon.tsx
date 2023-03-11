import React, {SVGProps} from "react";

function CameraIcon(props: SVGProps<any>) {
    return (
        <svg viewBox="0 0 26 22" width={26} height={22} fill="none" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M13 7C10.2386 7 8 9.23858 8 12C8 14.7614 10.2386 17 13 17C15.7614 17 18 14.7614 18 12C18 9.23858 15.7614 7 13 7ZM10 12C10 10.3431 11.3431 9 13 9C14.6569 9 16 10.3431 16 12C16 13.6569 14.6569 15 13 15C11.3431 15 10 13.6569 10 12Z" fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M17.5 0H8.5L5.5 4H0V22H26V4H20.5L17.5 0ZM2 6H6.5L9.5 2H16.5L19.5 6H24V20H2V6Z" fill="currentColor"/>
        </svg>
    );
}
export default CameraIcon;