export const sleep = async (ms: number): Promise<number> => await new Promise((r) => window.setTimeout(r, ms));
