// Get current date in SQL format
export const SQLDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
