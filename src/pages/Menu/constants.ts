import {ROUTE_MENU_LIST, ROUTE_PREVIEW, ROUTE_PUBLICATION} from "../../constants/routes";
import {DialogMenuItemInterface} from "../../components/DialogMenu/constants";

export const MenuDialogItems: DialogMenuItemInterface[] = [
    {
        title: 'MENU.DIALOG_QR_CODE_TITLE',
        to: ROUTE_PUBLICATION,
    },
    {
        title: 'MENU.DIALOG_PREVIEW_TITLE',
        to: ROUTE_PREVIEW,
    },
    {
        title: 'MENU.DIALOG_EDIT_LIST_TITLE',
        to: ROUTE_MENU_LIST,
    },
    {
        title: 'MENU.DIALOG_UNPUBLISH_TITLE',
    },
]