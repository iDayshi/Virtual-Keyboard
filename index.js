let arrayKeyLowerEng = [
  '`',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace',
  'Tab',
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  '[',
  ']',
  '\\',
  'CapsLock',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  ';',
  "'",
  'Enter',
  'ShiftLeft',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  ',',
  '.',
  '/',
  'ShiftRight',
  'ControlLeft',
  'Meta',
  'AltLeft',
  'Space',
  'AltRight',
  'ControlRight',
  'ArrowLeft',
  'ArrowUp',
  'ArrowDown',
  'ArrowRight',
];

let arrayKeyUpperEng = [
  '~',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '+',
  'Backspace',
  'Tab',
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  '{',
  '}',
  '|',
  'CapsLock',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  ':',
  '"',
  'Enter',
  'ShiftLeft',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M',
  '<',
  '>',
  '?',
  'ShiftRight',
  'ControlLeft',
  'Meta',
  'AltLeft',
  'Space',
  'AltRight',
  'ControlRight',
  'ArrowLeft',
  'ArrowUp',
  'ArrowDown',
  'ArrowRight',
];

const button = document.querySelector('.centr');
const blockKeyBoard = document.createElement('div');
const arrowBlock = document.createElement('div');
blockKeyBoard.classList.add('position');
document.body.append(blockKeyBoard);

const keyLowerEng = (keys) => {
  keys.map((key) => {
    const keyBlock = document.createElement('div');
    keyBlock.id = key;
    keyBlock.innerText = `${key}`;
    if (key === 'Backspace') {
      keyBlock.classList.add('key-backspace', 'key-other');
    }
    if (key === 'Tab') {
      keyBlock.classList.add('key-tab', 'key-other');
    }
    if (key === 'CapsLock') {
      keyBlock.classList.add('key-capslock', 'key-other');
    }
    if (key === 'Enter') {
      keyBlock.classList.add('key-enter', 'key-other');
    }
    if (key === 'ShiftLeft' || key === 'ShiftRight') {
      if (key === 'ShiftRight') {
        keyBlock.classList.add('key-shift-right', 'key-other');
        keyBlock.innerText = `Shift`;
      } else {
        keyBlock.classList.add('key-shift-left', 'key-other');
        keyBlock.innerText = `Shift`;
      }
    }
    if (key === 'ControlLeft' || key === 'ControlRight') {
      keyBlock.classList.add('key-other');
      keyBlock.innerText = `Ctrl`;
    }
    if (key === 'Meta') {
      keyBlock.classList.add('key-meta', 'key-other');
      keyBlock.innerText = ``;
    }
    if (key === 'AltLeft' || key === 'AltRight') {
      keyBlock.classList.add('key-other');
      keyBlock.innerText = `Alt`;
    }
    if (key === 'Space') {
      keyBlock.classList.add('key-space', 'key-other');
    }
    if (key === 'ArrowLeft' || key === 'ArrowRight') {
      keyBlock.classList.add('key-other');
      keyBlock.innerText = `Bok`;
    }
    if (key === 'ArrowUp') {
      keyBlock.classList.add('key-arrow-up', 'key-other');
      keyBlock.innerText = `Bok`;
      arrowBlock.append(keyBlock);
    }
    console.log(arrowBlock);
    if (key === 'ArrowDown') {
      keyBlock.classList.add('key-arrow-down', 'key-other');
      keyBlock.innerText = `Bok`;
      arrowBlock.append(keyBlock);
      blockKeyBoard.append(arrowBlock);
    }
    console.log(arrowBlock);
    if (key.length === 1) {
      keyBlock.classList.add('key-default');
    }
    // key.addEventListener('click', (event) => {
    //   button.classList.add('active');
    // });
    blockKeyBoard.append(keyBlock);
  });
};

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  console.log(event.key);
  console.log(event.code);
  const buttonOther = document.getElementById(event.code);
  const button = document.getElementById(event.key);
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    blockKeyBoard
      .querySelectorAll('.key-default')
      .forEach((key, index) => (key.textContent = arrayKeyUpperEng[index]));
    buttonOther.classList.add('active');
  } else if (
    event.code === 'AltLeft' ||
    event.code === 'AltRight' ||
    event.code === 'Space'
  ) {
    buttonOther.classList.add('active');
  } else if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
    buttonOther.classList.add('active');
  } else {
    button.classList.add('active');
  }

  document.addEventListener('keyup', (event) => {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      blockKeyBoard
        .querySelectorAll('.key-default')
        .forEach((key, index) => (key.textContent = arrayKeyLowerEng[index]));
      buttonOther.classList.remove('active');
    }
    if (buttonOther) {
      buttonOther.classList.remove('active');
    } else {
      button.classList.remove('active');
    }
  });
});

keyLowerEng(arrayKeyLowerEng);
