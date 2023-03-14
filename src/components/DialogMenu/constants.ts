export interface DialogMenuItemInterface {
    title: string;
    description?: string;
    to?: string;
    onClick?: () => void;
}