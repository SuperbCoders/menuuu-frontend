import {MouseEvent} from "react";

export const CreateRipple = (
    event: MouseEvent<HTMLDivElement>,
    block: HTMLDivElement,
    className: string,
) => {
    const ripple: HTMLSpanElement = block.querySelector(`.${className}`);
    const circle: HTMLSpanElement = document.createElement('span');
    const diameter: number = Math.max(block.clientWidth, block.clientHeight);
    const radius: number = diameter / 2;
    const blockRect: DOMRect = block.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - blockRect.left - radius}px`;
    circle.style.top = `${event.clientY - blockRect.top - radius}px`;
    circle.classList.add(className);

    if (ripple) {
        ripple.remove();
    }

    block.appendChild(circle);
}