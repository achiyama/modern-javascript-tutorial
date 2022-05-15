/* 1. 分割代入を使用 */
const myProfile1 = {
  name1: '山田',
  age1: 24,
};

const { name1, age1 } = myProfile1;
const message1 = `私の名前は${name1}です。年齢は${age1}歳です。`;
console.log(message1);

/* 2. 抽出したプロパティに別名をつける */
const myProfile2 = {
  name2: '山田',
  age2: 24,
};

const { name2: newName, age2: newAge } = myProfile2;
const message2 = `私の名前は${newName}です。年齢は${newAge}歳です。`;
console.log(message2);

/* 3. 配列に対して分割代入を行う */
const myProfile3 = ['山田', 24];

const [name3, age3] = myProfile3;
console.log(name3, age3);
