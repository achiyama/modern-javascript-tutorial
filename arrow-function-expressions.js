/* 1. 従来の関数 */
function func1(value) {
  return value;
}

console.log(func1('func1です'));

/* 2. 関数を定義して変数に格納 */
const func2 = function (value) {
  return value;
};

console.log(func2('func2です'));

/* 3. アロー関数を定義 */
const func3 = (value) => {
  return value;
};

/* 4. アロー関数の省略形 */
const func4 = (value) => value;

console.log(func4('func4です'));

/* 5. 返却値が複数行 */
const func5 = (value1, value2) => ({
  name: value1,
  age: value2,
});

console.log(func5('山田', 24));
