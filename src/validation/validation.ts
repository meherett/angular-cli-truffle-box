export function CanBeNumber(str: string): boolean { if (!str) { return false; } return !isNaN(+str); }
