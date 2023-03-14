import React, {MouseEvent} from 'react';
import {useTranslation} from "react-i18next";
import {GetModifiers} from "../../utils/classNames";
import Grid from "../Grid";
import LinkButton from "../LinkButton";
import {DialogMenuItemInterface} from "./constants";

interface DialogMenuProps {
    visibility: boolean;
    items: DialogMenuItemInterface[];
    onClose: (event: MouseEvent<HTMLDivElement>) => void;
}

const componentClass = 'dialog-menu';

function DialogMenu(props: DialogMenuProps) {
    const {
        visibility,
        items,
        onClose,
    } = props;
    const {t} = useTranslation();

    return (
        <div
            className={GetModifiers(componentClass, 'wrapper', [{
                condition: visibility,
                value: 'visible',
            }])}
            onClick={(event) => {
                event.stopPropagation();
                onClose(event);
            }}
        >
            <div
                className={GetModifiers(componentClass, '', [{
                    condition: visibility,
                    value: 'expanded',
                }])}
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                <Grid
                    columns={[
                        false,
                        (
                            <div className={GetModifiers(componentClass, 'list')}>
                                {items.map((item) => {
                                    const {
                                        title,
                                        description,
                                        to,
                                        onClick,
                                    } = item;

                                    return (
                                        <LinkButton
                                            key={title}
                                            to={to}
                                            className={GetModifiers(componentClass, 'item')}
                                            onClick={onClick ? (event) => {
                                                onClick();
                                                onClose(event);
                                            } : null}
                                        >
                                            {t(title)}
                                            {description && (
                                                <span
                                                    className={GetModifiers(componentClass, 'description')}
                                                >
                                                        {t(description)}
                                                    </span>
                                            )}
                                        </LinkButton>
                                    )
                                })}
                            </div>
                        ),
                    ]}
                />
            </div>
        </div>
    );
}

export default DialogMenu;
