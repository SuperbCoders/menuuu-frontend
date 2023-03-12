import React, {ChangeEvent, FocusEvent, useEffect, useState, useRef, useMemo, CSSProperties} from 'react';
import {GetModifiers, ModifierInterface} from "../../utils/classNames";
import {useTranslation} from "react-i18next";

const componentClass = 'input';

export interface InputProps {
    value: string;
    name?: string;
    formName?: string;
    label?: string;
    type?: string;
    placeholder?: string;
    minifiedPlaceholder?: string;
    hint?: string;
    errorText?: string;
    formatChars?: any;
    disabled?: boolean;
    validateOnDirty?: boolean;
    validateOnBlur?: boolean;
    forceValidate?: boolean;
    isInvalid?: boolean;
    readonly?: boolean;
    isStraightBorderTop?: boolean;
    isStraightBorderBottom?: boolean;
    style?: CSSProperties;
    blockStyle?: CSSProperties;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    focusChangedCallback?: (isFocused: boolean) => void;
}

function Input(props: InputProps) {
    const {
        value,
        name,
        formName,
        label,
        type = 'text',
        placeholder,
        minifiedPlaceholder,
        hint = '',
        errorText = '',
        disabled = false,
        validateOnDirty = true,
        validateOnBlur = true,
        forceValidate = false,
        isInvalid = false,
        readonly = false,
        isStraightBorderTop = false,
        isStraightBorderBottom = false,
        style,
        blockStyle,
        onChange = () => {
        },
        focusChangedCallback = () => {
        },
    } = props;
    const { t } = useTranslation();
    const id: string = `${formName}-${name}`;
    const wrapperRef = useRef<HTMLDivElement>();
    const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
    const [isDirty, setIsDirty] = useState<boolean>(false);
    const [isBlurred, setIsBlurred] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [resultError, setResultError] = useState<string>('');
    const invalid = useMemo<boolean>(() => !!resultError || (forceValidate && isInvalid), [resultError, forceValidate, isInvalid]);
    const ref = useRef<HTMLInputElement>();
    const defaultInvalidModifier: ModifierInterface = {
        condition: !!resultError || (forceValidate && isInvalid),
        value: 'invalid',
    };

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        const updateValue = () => {
            onChange(event);
            if (!isDirty) {
                setIsDirty(true);
            }
        }

        updateValue();
    };

    const onBlurHandler = (event: FocusEvent<HTMLInputElement>): void => {
        if (!isBlurred) {
            setIsBlurred(true);
        }
        onChangeFocus(false);
    };

    const onFocusHandler = (): void => {
        if (!readonly) {
            onChangeFocus(true);
        }
    };

    const onChangeFocus = (isFocused: boolean): void => {
        setIsFocused(isFocused);
        focusChangedCallback(isFocused);
    };

    useEffect(() => {
        if (forceValidate) {
            setResultError(errorText)
        } else if (validateOnDirty && validateOnBlur) {
            if (isBlurred && isDirty) {
                setResultError(errorText);
            }
        } else if (validateOnDirty) {
            if (isDirty) {
                setResultError(errorText);
            }
        } else if (validateOnBlur) {
            if (isBlurred) {
                setResultError(errorText);
            }
        } else {
            setResultError(errorText);
        }
    }, [isBlurred, isDirty, forceValidate, errorText]);

    const placeholderMinified = useMemo<boolean>(() => {
        return !!(value || isFocused);
    }, [value, isFocused]);

    return (
        <div className={GetModifiers(componentClass, 'wrapper')} ref={wrapperRef} style={style}>
            {label && (
                <label htmlFor={id} className={GetModifiers(componentClass, 'label')}>
                    {label}
                </label>
            )}
            <div
                className={GetModifiers(componentClass, 'block', [
                    defaultInvalidModifier,
                    {
                        condition: isFocused,
                        value: 'focused'
                    },
                    {
                        condition: !!resultError || (forceValidate && isInvalid),
                        value: 'invalid',
                    },
                    {
                        condition: readonly,
                        value: 'readonly',
                    },
                    {
                        condition: isStraightBorderTop,
                        value: 'straight-border-top',
                    },
                    {
                        condition: isStraightBorderBottom,
                        value: 'straight-border-bottom',
                    },
                ])}
                style={blockStyle}
                onClick={() => ref.current && ref.current.focus()}
            >
                <input
                    className={GetModifiers(componentClass, '', [
                        {
                            condition: !!resultError || (forceValidate && isInvalid),
                            value: 'invalid',
                        },
                    ])}
                    value={value}
                    type={passwordVisibility ? 'text' : type}
                    id={id}
                    name={name}
                    onChange={onChangeHandler}
                    onBlur={onBlurHandler}
                    onFocus={onFocusHandler}
                    disabled={disabled}
                    ref={ref}
                    readOnly={readonly}
                />
                {placeholder && (
                    <label htmlFor={id} className={GetModifiers(componentClass, 'placeholder', [
                        defaultInvalidModifier,
                        {
                            condition: placeholderMinified,
                            value: 'minified'
                        }
                    ])}>
                        {(placeholderMinified && minifiedPlaceholder) || t(placeholder)}
                    </label>
                )}
            </div>
        </div>
    );
}

export default Input;
