let lastId = 1;
export const generateId = (prefix: string) => `${prefix}-${lastId++}`;