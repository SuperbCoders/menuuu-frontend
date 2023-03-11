export const formatBytesToMb = (bytes: number): number => {
    return Math.round((bytes / (1024*1024)) * 1e2) / 1e2;
};