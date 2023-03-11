export interface ModifierInterface {
    condition: any;
    value: string;
}

export const GetModifiers = (
    block: string,
    element: string = '',
    modifiers: ModifierInterface[] = [],
    separator: string = '_',
): string => {
    const defaultClass = element ? `${block}${separator}${separator}${element}` : block;
    const classNames: string[] = [defaultClass];
    modifiers.forEach((modifier) => {
        if (modifier.condition) {
            classNames.push(`${defaultClass}${separator}${modifier.value}`);
        }
    });

    return classNames.join(' ');
};