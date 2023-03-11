export interface DefaultAction<PayloadType> {
    type: string;
    payload?: PayloadType;
}