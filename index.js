alert(
  'Это детище ведёт себя очень странно. Но Для более адекватной работы язык на клавиатуре, и на операционной системе должны совпадать.'
);

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

let capsCheak = false;
const button = document.querySelector('.centr');
const blockKeyBoard = document.createElement('div');
const infoBlock = document.createElement('h2');
infoBlock.innerText = 'Shift + Alt для переключения языков.';
infoBlock.style.color = 'white';
const textarea = document.createElement('textarea');
textarea.classList.add('text');
textarea.rows = 5;
textarea.cols = 40;
textarea.style.width = '70%';
textarea.style.height = '100px';
blockKeyBoard.classList.add('position');
document.body.prepend(textarea);
document.body.append(blockKeyBoard, infoBlock);

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
    if (key === 'ArrowLeft') {
      keyBlock.classList.add('key-other');
      keyBlock.innerHTML = `&#8592`;
    }
    if (key === 'ArrowRight') {
      keyBlock.classList.add('key-other');
      keyBlock.innerHTML = `&#8594;`;
    }

    if (key === 'ArrowUp') {
      keyBlock.classList.add('key-arrow-up', 'key-other');
      keyBlock.innerHTML = `&#8593;`;
      arrowBlock.append(keyBlock);
      return;
    }

    if (key === 'ArrowDown') {
      keyBlock.classList.add('key-arrow-down', 'key-other');
      keyBlock.innerHTML = `&#8595;`;
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
  textarea.focus();
  const buttonOther = document.getElementById(event.code);
  const button = document.getElementById(event.key);

  if (buttonOther === null && button === null) {
    return (textarea.value = textarea.value + event.key);
  }
  if (event.shiftKey === true && event.altKey === true) {
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
    return buttonOther.classList.add('active');
  }
  if (
    (localStorage.getItem('lang') === 'Eng' && event.code === 'ShiftLeft') ||
    event.code === 'ShiftRight'
  ) {
    blockKeyBoard.querySelectorAll('.key-default').forEach((key, index) => {
      key.textContent = arrayKeyUpperEng[index];
    });
    return buttonOther.classList.add('active');
  } else if (event.code === 'AltLeft' || event.code === 'AltRight') {
    return buttonOther.classList.add('active');
  } else if (event.code === 'Space') {
    buttonOther.classList.add('active');
    return (textarea.value = textarea.value + event.key);
  } else if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
    return buttonOther.classList.add('active');
  } else if (event.code === 'Backspace') {
    buttonOther.classList.add('active');
    return (textarea.value = textarea.value.slice(0, -1));
  } else if (event.code === 'Enter') {
    buttonOther.classList.add('active');
    return (textarea.value = textarea.value + '\n');
  } else if (event.code === 'Tab') {
    buttonOther.classList.add('active');
    return (textarea.value = textarea.value + '  ');
  } else if (event.code === 'CapsLock') {
    buttonOther.classList.add('active');
    if (localStorage.getItem('lang') === 'Eng' && !capsCheak) {
      capsCheak = true;
      return blockKeyBoard
        .querySelectorAll('.key-default')
        .forEach((key, index) => (key.textContent = arrayKeyUpperEng[index]));
    } else if (localStorage.getItem('lang') === 'Ru' && !capsCheak) {
      capsCheak = true;
      return blockKeyBoard
        .querySelectorAll('.key-default')
        .forEach((key, index) => (key.textContent = arrayKeyUpperRu[index]));
    } else if (localStorage.getItem('lang') === 'Eng' && capsCheak) {
      capsCheak = false;
      buttonOther.classList.remove('active');
      return blockKeyBoard
        .querySelectorAll('.key-default')
        .forEach((key, index) => (key.textContent = arrayKeyLowerEng[index]));
    } else if (localStorage.getItem('lang') === 'Ru' && capsCheak) {
      capsCheak = false;
      buttonOther.classList.remove('active');
      return blockKeyBoard
        .querySelectorAll('.key-default')
        .forEach((key, index) => (key.textContent = arrayKeyLowerRu[index]));
    }
  }
  button.classList.add('active');

  textarea.value =
    textarea.value + document.getElementById(event.key).innerHTML;
});

document.addEventListener('keyup', (event) => {
  const buttonOther = document.getElementById(event.code);
  const button = document.getElementById(event.key);

  if (event.code === 'CapsLock') {
    return;
  }
  if (
    (localStorage.getItem('lang') === 'Eng' && event.code === 'ShiftLeft') ||
    event.code === 'ShiftRight'
  ) {
    blockKeyBoard
      .querySelectorAll('.key-default')
      .forEach((key, index) => (key.textContent = arrayKeyLowerEng[index]));
    return buttonOther.classList.remove('active');
  }
  if (
    (localStorage.getItem('lang') === 'Ru' && event.code === 'ShiftLeft') ||
    event.code === 'ShiftRight'
  ) {
    blockKeyBoard
      .querySelectorAll('.key-default')
      .forEach((key, index) => (key.textContent = arrayKeyLowerRu[index]));
    return buttonOther.classList.remove('active');
  }
  if (buttonOther) {
    buttonOther.classList.remove('active');
  } else if (button) {
    button.classList.remove('active');
  } else return;
});

document.addEventListener('mousedown', (event) => {
  const button = event.target;

  if (
    button !== blockKeyBoard &&
    button !== document.body &&
    button !== textarea &&
    button !== document.querySelector('html')
  ) {
    if (localStorage.getItem('lang') === 'Ru' && button.innerHTML === 'Shift') {
      blockKeyBoard.querySelectorAll('.key-default').forEach((key, index) => {
        key.textContent = arrayKeyUpperRu[index];
      });
    }
    if (
      localStorage.getItem('lang') === 'Eng' &&
      button.innerHTML === 'Shift'
    ) {
      blockKeyBoard.querySelectorAll('.key-default').forEach((key, index) => {
        key.textContent = arrayKeyUpperEng[index];
      });
    }
    if (button.innerHTML === 'Caps') {
      button.classList.add('active');
      if (localStorage.getItem('lang') === 'Eng' && !capsCheak) {
        capsCheak = true;
        return blockKeyBoard
          .querySelectorAll('.key-default')
          .forEach((key, index) => (key.textContent = arrayKeyUpperEng[index]));
      } else if (localStorage.getItem('lang') === 'Ru' && !capsCheak) {
        capsCheak = true;
        return blockKeyBoard
          .querySelectorAll('.key-default')
          .forEach((key, index) => (key.textContent = arrayKeyUpperRu[index]));
      } else if (localStorage.getItem('lang') === 'Eng' && capsCheak) {
        capsCheak = false;
        button.classList.remove('active');
        return blockKeyBoard
          .querySelectorAll('.key-default')
          .forEach((key, index) => (key.textContent = arrayKeyLowerEng[index]));
      } else if (localStorage.getItem('lang') === 'Ru' && capsCheak) {
        capsCheak = false;
        button.classList.remove('active');
        return blockKeyBoard
          .querySelectorAll('.key-default')
          .forEach((key, index) => (key.textContent = arrayKeyLowerRu[index]));
      }
    } else if (button.innerHTML === 'Alt') {
      return button.classList.add('active');
    } else if (button.innerHTML === 'Space') {
      button.classList.add('active');
      return (textarea.value = textarea.value + ' ');
    } else if (button.innerHTML === 'Ctrl') {
      return button.classList.add('active');
    } else if (button.innerHTML === 'Backspace') {
      button.classList.add('active');
      return (textarea.value = textarea.value.slice(0, -1));
    } else if (button.innerHTML === 'Enter') {
      button.classList.add('active');
      return (textarea.value = textarea.value + '\n');
    } else if (button.innerHTML === 'Tab') {
      button.classList.add('active');
      return (textarea.value = textarea.value + '  ');
    }
    if (button.innerHTML !== 'Shift') {
      textarea.value = textarea.value + button.innerHTML;
      button.classList.add('active');
    }
  }
});

document.addEventListener('mouseup', (event) => {
  const button = event.target;
  if (localStorage.getItem('lang') === 'Eng' && button.innerHTML === 'Shift') {
    blockKeyBoard
      .querySelectorAll('.key-default')
      .forEach((key, index) => (key.textContent = arrayKeyLowerEng[index]));
    return event.target.classList.remove('active');
  }
  if (localStorage.getItem('lang') === 'Ru' && button.innerHTML === 'Shift') {
    blockKeyBoard
      .querySelectorAll('.key-default')
      .forEach((key, index) => (key.textContent = arrayKeyLowerRu[index]));
    return event.target.classList.remove('active');
  }
  if (event.target) {
    event.target.classList.remove('active');
  }
});

function loadingKeyBoard() {
  keyLowerEng(arrayKeyLowerEngArr);
  if (localStorage.getItem('lang') === 'Ru') {
    blockKeyBoard.querySelectorAll('.key-default').forEach((key, index) => {
      key.textContent = arrayKeyLowerRu[index];
    });
    return;
  } else {
    blockKeyBoard.querySelectorAll('.key-default').forEach((key, index) => {
      key.textContent = arrayKeyLowerEng[index];
    });
    return;
  }
}

loadingKeyBoard();
