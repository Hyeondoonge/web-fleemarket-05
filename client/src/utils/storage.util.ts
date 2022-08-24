export enum StorageKey {
  Theme = 'theme',
}

export function setThemeLocalStorage(isDarkMode: boolean) {
  localStorage.setItem(StorageKey.Theme, JSON.stringify(isDarkMode));
}

export function getThemeLocalStorage(defaultTheme: boolean) {
  const isDarkMode = localStorage.getItem(StorageKey.Theme);
  if (isDarkMode === null) {
    return defaultTheme;
  }
  return Boolean(JSON.parse(isDarkMode));
}
