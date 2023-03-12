import React, {DragEvent, ReactNode, SyntheticEvent, useEffect, useRef, useState,} from 'react';
import {
    DefaultAllowedImageTypes,
} from "../../constants/files";
import {
    formatBytesToMb,
} from "../../utils/files";
import {GetModifiers} from "../../utils/classNames";
import CameraIcon from "../Icons/CameraIcon";
import {useTranslation} from "react-i18next";

const componentClass = 'file-input';

interface FileInputProps {
    name: string;
    formName: string;
    title?: string;
    hint?: string;
    defaultPreview?: string;
    className?: string;
    maxSize?: number;
    file?: File;
    icon?: ReactNode;
    onChange?: (file: File) => void;
}

function FileInput(props: FileInputProps) {
    const {
        name,
        formName,
        title,
        hint,
        defaultPreview = '',
        className,
        maxSize = 3,
        file: propsFile,
        icon = <CameraIcon/>,
        onChange = () => {
        },
    } = props;
    const { t } = useTranslation();
    const id: string = `${formName}-${name}`;
    const blockRef = useRef<HTMLDivElement>();
    const inputRef = useRef<HTMLInputElement>();
    const [preview, setPreview] = useState<string>('');
    const [file, setFile] = useState<File>();

    const onChangeImage = (file: File, callback: (file: File) => void) => {
        const isValidSize: boolean = formatBytesToMb(file.size) <= maxSize;

        if (isValidSize && DefaultAllowedImageTypes.includes(file.type)) {
            callback(file);
        }
    }

    const onChangeFiles = (files: FileList | File[]): void => {
        const file: File = files && files[0];

        if (file) {
            const isValidSize: boolean = formatBytesToMb(file.size) <= maxSize;
            if (isValidSize) {
                onChangeImage(file, (file) => {
                    setPreview(URL.createObjectURL(file));
                    onChange(file);
                });
            }
        } else {
            setPreview('');
            onChange(null);
        }
    };

    const onDropHandler = (event: DragEvent<HTMLDivElement>): void => {
        event.preventDefault();
        if (event.dataTransfer.files.length) {
            onChangeFiles(event.dataTransfer.files);
        }
    };

    useEffect(() => {
        setFile(propsFile);
        if (propsFile) {
            setPreview(URL.createObjectURL(propsFile));
        } else {
            setPreview(null);
        }
    }, [propsFile]);

    useEffect(() => {
        if (defaultPreview) {
            setPreview(defaultPreview);
        } else {
            setPreview('');
        }
    }, [defaultPreview]);

    return (
        <div
            className={` ${className} ` + GetModifiers(componentClass, 'block', [{
                condition: !!preview,
                value: 'preview',
            },]) + ` ${className}`}
            onDrop={onDropHandler}
            onDragOver={(event: DragEvent<HTMLDivElement>): void => {
                event.preventDefault();
            }}
            onClick={() => {
                inputRef.current.click();
            }}
            ref={blockRef}
        >
            <input
                ref={inputRef}
                className="file-input"
                type="file"
                id={id}
                name={name}
                onChange={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    onChangeImage(event.target.files[0], (file) => {
                        setPreview(URL.createObjectURL(file));
                        onChange(file);
                    })
                    event.target.value = '';
                }}
            />
            {preview ? (
                <img
                    className={GetModifiers(componentClass, 'preview')}
                    src={preview}
                    onLoad={() => {
                        URL.revokeObjectURL(preview);
                    }}
                    onClick={(event: SyntheticEvent) => {
                        event.preventDefault();
                    }}
                    alt={t("COMPONENTS.FILE_INPUT_PREVIEW_ALT")}
                />
            ) : (
                <>
                    <div className={GetModifiers(componentClass, 'icon')}>
                        {icon}
                    </div>
                    <div className={GetModifiers(componentClass, 'title')}>
                        {title}
                    </div>
                    <div className={GetModifiers(componentClass, 'hint')}>
                        {hint}
                    </div>
                </>
            )}
        </div>
    );
}

export default FileInput;