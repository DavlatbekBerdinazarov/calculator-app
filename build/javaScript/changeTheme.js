// selection
// themes
const theme1 = document.getElementById('1');
const theme2 = document.getElementById('2');
const theme3 = document.getElementById('3');
// contain-root
const bdy = document.getElementsByTagName('body')[0];
const mains = document.getElementsByTagName('main')[0];
const toogle = document.querySelector('.toogle');
const output = document.querySelector('.output');
const foot = document.querySelector('.foot');
const containerKeypad = document.querySelector('.items');
// keypad bg & shadow
const itemColorAll = document.querySelectorAll('.item');
const keyBgFirst = document.querySelectorAll('.key-bg-first');
const keybgMiddle = document.querySelector('.key-bg-middle ');
const title = document.querySelectorAll('.textTheme');
const toogleBg = document.querySelectorAll('.toogle-bg');
const keyBgLast = document.querySelectorAll('.key-bg-last');
const colorWhite = document.querySelectorAll('.color-white');
const cape = document.querySelector('#cape');
// toogle
  // const themefirst = document.querySelector('#satu');
  // const themeMiddle = document.querySelector('#dua');
  // const themeLast = document.querySelector('#tiga');

// class
class Themes {
  constructor(main, tk, screen, keyBg1, keyShadow, keyBg2_tg, keyShadow2, keyBg, keyShadow3, text, white) {
    this.main = main;
    this.tk = tk;
    this.screen = screen;
    this.keyBg1 = keyBg1;
    this.keyShadow = keyShadow;
    this.keyBg2Tg = keyBg2_tg;
    this.keyShadow2 = keyShadow2;
    this.keyBg = keyBg;
    this.keyShadow3 = keyShadow3;
    this.text = text;
    this.white = white;
  }
}
// theme change
theme1.addEventListener('click', () => {
  const themes1 = new Themes(
    'hsl(222, 26%, 31%)',
    'hsl(223, 31%, 20%)',
    'hsl(224, 36%, 15%)',
    'hsl(225, 21%, 49%)',
    'hsl(224, 28%, 35%)',
    'hsl(6, 63%, 50%)',
    'hsl(6, 70%, 34%)',
    'hsl(30, 25%, 89%)',
    'hsl(28, 16%, 65%)',
    'hsl(221, 14%, 31%)',
    'hsl(0, 0, 100%)'
  );

  changeColor(themes1.main, themes1.tk, themes1.screen, themes1.keyBg1, themes1.keyShadow, themes1.keyBg2Tg, themes1.keyShadow2, themes1.keyBg, themes1.keyShadow3, themes1.text, themes1.white);

  // tidak sesuai di class nya maka rebuild disini
  foot.style.color = '#fff';
  title.forEach((element) => {
    element.style.color = '#fff';
  });
  // color cureent
  theme1.style.opacity = '1';
  // perbuhan sisanya
  theme2.style.backgroundColor = '#aeaeae';
  theme2.style.transition = 'all 1s';
  theme2.style.opacity = '0.3';
  theme3.style.backgroundColor = '#aeaeae';
  theme3.style.transition = 'all 1s';
  theme3.style.opacity = '0.3';
});
theme2.addEventListener('click', () => {
  const themes2 = new Themes(
    'hsl(0, 0%, 90%)',
    'hsl(0, 5%, 81%)',
    'hsl(0, 0%, 93%)',
    'hsl(185, 42%, 37%)',
    'hsl(185, 58%, 25%)',
    'hsl(25, 98%, 40%)',
    'hsl(25, 99%, 27%)',
    'hsl(45, 7%, 89%)',
    'hsl(35, 11%, 61%)',
    'hsl(60, 10%, 19%)',
    'hsl(0, 0, 100%)'
  );
  changeColor(themes2.main, themes2.tk, themes2.screen, themes2.keyBg1, themes2.keyShadow, themes2.keyBg2Tg, themes2.keyShadow2, themes2.keyBg, themes2.keyShadow3, themes2.text, themes2.white);
  //   console.log(themes1);
  // animation
  // color saat ini
  theme2.style.opacity = '1';
  // perbahan sisanya
  theme1.style.backgroundColor = '#aeaeae';
  theme1.style.transition = 'all 1s';
  theme1.style.opacity = '0.3';
  theme3.style.backgroundColor = '#aeaeae';
  theme3.style.transition = 'all 1s';
  theme3.style.opacity = '0.3';
});
theme3.addEventListener('click', () => {
  const themes3 = new Themes(
    'hsl(268, 75%, 9%)',
    'hsl(268, 71%, 12%)',
    'hsl(268, 71%, 12%)',
    'hsl(281, 89%, 26%)',
    'hsl(285, 91%, 52%)',
    'hsl(176, 100%, 44%)',
    'hsl(177, 92%, 70%)',
    'hsl(268, 47%, 21%)',
    'hsl(290, 70%, 36%)',
    'hsl(52, 100%, 62%)',
    'hsl(0, 0, 100%)'
  );

  changeColor(themes3.main, themes3.tk, themes3.screen, themes3.keyBg1, themes3.keyShadow, themes3.keyBg2Tg, themes3.keyShadow2, themes3.keyBg, themes3.keyShadow3, themes3.text, themes3.white);

  // tidak sesuai di class nya maka rebuild disini
  cape.style.color = 'hsl(198, 20%, 13%)';
  //   console.log(themes2);
  // animation
  // color saat ini
  theme3.style.opacity = '1';
  // perubahan sisanya
  theme1.style.backgroundColor = '#aeaeae';
  theme1.style.transition = 'all 1s';
  theme1.style.opacity = '0.3';
  theme2.style.backgroundColor = '#aeaeae';
  theme2.style.transition = 'all 1s';
  theme2.style.opacity = '0.3';
});

// func
function changeColor(main, tk, screen, keyBg1, keyShadow, keybg2tg, keyShadow2, keybg3, keyShadow3, text, white) {
  bdy.style.backgroundColor = main;
  mains.style.backgroundColor = main;
  toogle.style.backgroundColor = tk;
  output.style.backgroundColor = screen;
  containerKeypad.style.backgroundColor = tk;
  foot.style.color = keyBg1;
  // first color ....... white = keybg3 & keyshadow3
  // middle color ....... orange = keybg2tg & keyshadow2
  // last color ....... green = keybg1 & keyshadow
  // text-color
  //   console.log(white);
  // text color
  title.forEach((element) => {
    element.style.color = text;
    // cls(element);
  });
  itemColorAll.forEach((element) => {
    element.style.color = text;
    // cls(element);
  });
  // first color
  keyBgFirst.forEach((element) => {
    element.style.backgroundColor = keybg3;
    element.style.boxShadow = `0 4px ${keyShadow3}`;
    // console.log(element);
  });
  // middle colar
  keybgMiddle.style.backgroundColor = keybg2tg;
  keybgMiddle.style.color = white;
  keybgMiddle.style.boxShadow = `0 4px ${keyShadow2}`;
  toogleBg.forEach((element) => {
    element.style.backgroundColor = keybg2tg;
    // cls(element);
  });
  // last color
  keyBgLast.forEach((element) => {
    element.style.backgroundColor = keyBg1;
    element.style.boxShadow = `0 4px ${keyShadow}`;
    element.style.color = white;
    // console.log(element);
  });
  // color white
  colorWhite.forEach((element) => {
    element.style.color = '#fff';
  });
}
function cls(params) {
  console.log(params);
}
