/* 1. デフォルト値の設定 */
const sayHello = (name = 'ゲスト') => console.log(`こんにちは！${name}さん`);
sayHello();
sayHello('山田');

/* 2. 分割代入時にデフォルト値を設定 */
const myProfile = {
  age: 24,
};

const { name = 'ゲスト' } = myProfile;
const message = `こんにちは！${name}さん！`;
console.log(message);
