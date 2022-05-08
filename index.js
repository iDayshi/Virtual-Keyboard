localStorage.setItem('lang', 'Eng');
let arrayKeyLowerEngArr = [
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
];

let arrayKeyLowerRu = [
  'ё',
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
  'й',
  'ц',
  'у',
  'к',
  'е',
  'н',
  'г',
  'ш',
  'щ',
  'з',
  'х',
  'ъ',
  '\\',
  'ф',
  'ы',
  'в',
  'а',
  'п',
  'р',
  'о',
  'л',
  'д',
  'ж',
  'э',
  'я',
  'ч',
  'с',
  'м',
  'и',
  'т',
  'ь',
  'б',
  'ю',
  '.',
];

let arrayKeyUpperRu = [
  'Ё',
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
  'Й',
  'Ц',
  'У',
  'К',
  'Е',
  'Н',
  'Г',
  'Ш',
  'Щ',
  'З',
  'Х',
  'Ъ',
  '/',
  'Ф',
  'Ы',
  'В',
  'А',
  'П',
  'Р',
  'О',
  'Л',
  'Д',
  'Ж',
  'Э',
  'Я',
  'Ч',
  'С',
  'М',
  'И',
  'Т',
  'Ь',
  'Б',
  'Ю',
  ',',
];

const button = document.querySelector('.centr');
const blockKeyBoard = document.createElement('div');
blockKeyBoard.classList.add('position');
document.body.append(blockKeyBoard);

const keyLowerEng = (keys) => {
  const arrowBlock = document.createElement('div');
  keys.map((key) => {
    const keyBlock = document.createElement('div');
    keyBlock.id = key;
    keyBlock.innerText = key;
    if (key === 'Backspace') {
      keyBlock.classList.add('key-backspace', 'key-other');
      keyBlock.innerText = `Backspace`;
    }
    if (key === 'Tab') {
      keyBlock.classList.add('key-tab', 'key-other');
      keyBlock.innerText = `Tab`;
    }
    if (key === 'CapsLock') {
      keyBlock.classList.add('key-capslock', 'key-other');
      keyBlock.innerText = `Caps`;
    }
    if (key === 'Enter') {
      keyBlock.classList.add('key-enter', 'key-other');
      keyBlock.innerText = `Enter`;
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
      keyBlock.innerText = `Space`;
    }
    if (key === 'ArrowLeft' || key === 'ArrowRight') {
      keyBlock.classList.add('key-other');
      keyBlock.innerText = `Bok`;
    }
    if (key === 'ArrowUp') {
      keyBlock.classList.add('key-arrow-up', 'key-other');
      keyBlock.innerText = `Up`;
      arrowBlock.append(keyBlock);
      return;
    }

    if (key === 'ArrowDown') {
      keyBlock.classList.add('key-arrow-down', 'key-other');
      keyBlock.innerText = `Down`;
      arrowBlock.append(keyBlock);
      blockKeyBoard.append(arrowBlock);
      return;
    }

    if (key.length === 1) {
      keyBlock.classList.add('key-default');
    }
    blockKeyBoard.append(keyBlock);
  });
};

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  console.log(event.key);
  console.log(event.code);
  const buttonOther = document.getElementById(event.code);
  const button = document.getElementById(event.key);
  if (event.ctrlKey === true && event.altKey === true) {
    if (localStorage.getItem('lang') === 'Eng') {
      localStorage.setItem('lang', 'Ru');
      return blockKeyBoard
        .querySelectorAll('.key-default')
        .forEach((key, index) => {
          key.textContent = arrayKeyLowerRu[index];
        });
    } else {
      if (localStorage.getItem('lang') === 'Ru') {
        localStorage.setItem('lang', 'Eng');
        return blockKeyBoard
          .querySelectorAll('.key-default')
          .forEach((key, index) => {
            key.textContent = arrayKeyLowerEng[index];
          });
      }
    }
  }
  if (
    (localStorage.getItem('lang') === 'Ru' && event.code === 'ShiftLeft') ||
    event.code === 'ShiftRight'
  ) {
    blockKeyBoard.querySelectorAll('.key-default').forEach((key, index) => {
      key.textContent = arrayKeyUpperRu[index];
    });
    buttonOther.classList.add('active');
  }
  if (
    (localStorage.getItem('lang') === 'Eng' && event.code === 'ShiftLeft') ||
    event.code === 'ShiftRight'
  ) {
    blockKeyBoard.querySelectorAll('.key-default').forEach((key, index) => {
      key.textContent = arrayKeyUpperEng[index];
    });
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
    if (
      (localStorage.getItem('lang') === 'Eng' && event.code === 'ShiftLeft') ||
      event.code === 'ShiftRight'
    ) {
      blockKeyBoard
        .querySelectorAll('.key-default')
        .forEach((key, index) => (key.textContent = arrayKeyLowerEng[index]));
      buttonOther.classList.remove('active');
    }
    if (
      (localStorage.getItem('lang') === 'Ru' && event.code === 'ShiftLeft') ||
      event.code === 'ShiftRight'
    ) {
      blockKeyBoard
        .querySelectorAll('.key-default')
        .forEach((key, index) => (key.textContent = arrayKeyLowerRu[index]));
      buttonOther.classList.remove('active');
    }
    if (buttonOther) {
      buttonOther.classList.remove('active');
    } else {
      button.classList.remove('active');
    }
  });
});

// document.addEventListener('click', (event) => {
//   console.log(event.target);
//   console.log(event.code);
//   const buttonOther = document.getElementById(event.code);
//   const button = document.getElementById(event.key);
//   if (event.target) {
//     event.target.classList.add('active');
//   }
// });

keyLowerEng(arrayKeyLowerEngArr);
