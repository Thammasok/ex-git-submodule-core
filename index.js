const moduleA = require('./ex-git-submodule-a');
const moduleB = require('./ex-git-submodule-b');

const main = () => {
  console.log('Hello Core!');
  
  // call from module b
  const text = moduleB.sayHello('B');
  console.log(text);

  // call from module a
  const result = moduleA.add(1,3);
  console.log(result);
}

main();