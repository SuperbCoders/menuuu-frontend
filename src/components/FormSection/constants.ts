import {InputProps} from "../Input";

export enum FORM_SECTION_ROW_TYPE {
    INPUT = 'input',
    SELECT = 'select',
    BISECTED = 'bisected',
}

export interface FormSectionRow {
    type: FORM_SECTION_ROW_TYPE;
    className?: string;
    props?: InputProps;
    children?: FormSectionRow[];
}