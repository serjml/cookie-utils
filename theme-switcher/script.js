class ThemeSwitcher {
  selector = {
    switchThemeButton: '[data-js-theme-switcher',
  }

  themes = {
    dark: 'dark',
    light: 'light',
  }

  stateClasses = {
    isDarkTheme: 'is-dark-theme',
  }

  storageKey = 'theme';

  constructor() {
    this.switchThemeButtonElement = document.querySelector(this.selector.switchThemeButton);
    this.setInitialThemes();
    this.bindEvent();
  }

  get isDarkThemeCashed() {
    return localStorage.getItem(this.storageKey) === this.themes.dark;
  }

  setInitialThemes() {
    document.documentElement.classList.toggle(this.stateClasses.isDarkTheme, this.isDarkThemeCashed);
  };

  onClick = () => {
    localStorage.setItem(this.storageKey, this.isDarkThemeCashed ? this.themes.light : this.themes.dark);

    document.documentElement.classList.toggle(this.stateClasses.isDarkTheme);
  } 

  bindEvent() {
    this.switchThemeButtonElement.addEventListener('click', this.onClick)
  };
}

new ThemeSwitcher()