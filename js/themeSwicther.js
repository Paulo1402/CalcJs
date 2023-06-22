const root = document.querySelector(':root')
const main = document.querySelector('main')

const lightPalette = {
  bgColor: '#f1f5f9',
  borderColor: '#aaa',
  fontColor: '#212529',
  primaryColor: '#26834a'
}

const darkPalette = {
  bgColor: '#212529',
  borderColor: '#666',
  fontColor: '#f1f5f9',
  primaryColor: '#4dff91'
}

let currentPalette = darkPalette

export function themeSwitcher() {
  if (main.dataset.theme === 'dark') {
    currentPalette = lightPalette
    main.dataset.theme = 'light'
  } else {
    currentPalette = darkPalette
    main.dataset.theme = 'dark'
  }

  root.style.setProperty('--bg-color', currentPalette.bgColor)
  root.style.setProperty('--border-color', currentPalette.borderColor)
  root.style.setProperty('--font-color', currentPalette.fontColor)
  root.style.setProperty('--primary-color', currentPalette.primaryColor)
}
