import { inputBtn } from './elements.js'
import { themeSwitcher } from './themeSwicther.js'
import { setupButtons, copyToClipboard, calculate, handleTyping, clearInput } from './functions.js'

const themeSwictherBtn = document.getElementById('themeSwitcher')
const copyToClipboardBtn = document.getElementById('copyToClipboard')
const equalBtn = document.getElementById('equal')
const clearBtn = document.getElementById('clear')
const keysBtns = document.querySelectorAll('.charKey')

themeSwictherBtn.addEventListener('click', themeSwitcher)
copyToClipboardBtn.addEventListener('click', copyToClipboard)
clearBtn.addEventListener('click', clearInput)
equalBtn.addEventListener('click', calculate)

inputBtn.addEventListener('keydown', handleTyping)
keysBtns.forEach(setupButtons)
