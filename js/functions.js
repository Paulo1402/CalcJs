import { inputBtn,  resultInputBtn } from './elements.js'

function calculate() {
  try {
    const result = eval(inputBtn.value)

     resultInputBtn.classList.remove('error')
     resultInputBtn.value = result
  } catch (error) {
     resultInputBtn.classList.add('error')
     resultInputBtn.value = 'Resultado inválido!'
  }
}

function clearInput() {
  inputBtn.value = ''
  inputBtn.focus()

   resultInputBtn.value = ''
   resultInputBtn.classList.remove('error')
}

function copyToClipboard(e) {
  const button = e.currentTarget

  if (button.innerText === 'Copy') {
    button.innerText = 'Copied!'
    button.classList.add('success')
    navigator.clipboard.writeText( resultInputBtn.value)

    setTimeout(() => {
      button.innerText = 'Copy'
      button.classList.remove('success')
    }, 1500)
  }
}

function setupButtons (charKeyBtn) {
  charKeyBtn.addEventListener('click', () => {
    const value = charKeyBtn.dataset.value
    inputBtn.value += value
  })
}

function handleTyping(e) {
  e.preventDefault()

  const allowedKeys = [
    '(',
    ')',
    '/',
    '*',
    '-',
    '+',
    '9',
    '8',
    '7',
    '6',
    '5',
    '4',
    '3',
    '2',
    '1',
    '0',
    '.',
    '%',
    ' '
  ]

  if (allowedKeys.includes(e.key)) {
    inputBtn.value += e.key
    return
  }

  if (e.key === 'Backspace') {
    inputBtn.value = inputBtn.value.slice(0, -1)
  }

  if (e.key === 'Enter') {
    calculate()
  }
}

export {
  calculate,
  clearInput,
  copyToClipboard,
  setupButtons,
  handleTyping
}