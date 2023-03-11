import React, {ReactNode} from 'react';
import {GetModifiers} from "../../utils/classNames";

const componentClass = 'grid';

export interface GridProps {
    columns: ReactNode[];
    className?: string;
    columnClassNames?: string[];
}

function Grid(props: GridProps) {
    const {
        columns,
        className = '',
        columnClassNames = ['', '', ''],
    } = props;

    return (
        <div className={`${GetModifiers(componentClass)} ${className}`}>
            <div className={GetModifiers(componentClass, 'column', [{
                condition: true,
                value: '1',
            }]) + ` ${columnClassNames[0]}`}>
                {columns[0]}
            </div>
            {columns[2] ? (
                <>
                    <div className={GetModifiers(componentClass, 'column', [{
                        condition: true,
                        value: '2',
                    }]) + ` ${columnClassNames[1]}`}>
                        {columns[1]}
                    </div>
                    <div className={GetModifiers(componentClass, 'column', [{
                        condition: true,
                        value: '3',
                    }]) + ` ${columnClassNames[2]}`}>
                        {columns[2]}
                    </div>
                </>
            ) : (
                <div className={GetModifiers(componentClass, 'column', [{
                    condition: true,
                    value: '2-3',
                }]) + ` ${columnClassNames[1]}`}>
                    {columns[1]}
                </div>
            )}
        </div>
    );
}

export default Grid;