export function getLocalStorageItem(key: string): string {
    return window.localStorage.getItem(key);
}

export function setLocalStorageItem(key: string, value: string,): void {
    window.localStorage.setItem(key, value);
}

export function removeLocalStorageItem(key: string) {
    window.localStorage.removeItem(key);
}