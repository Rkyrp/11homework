//1задание
function logArguments(fn) {
    return function(...args) {
      console.log("Arguments:", args);
      return fn(...args);
    };
  }
  function sum(a, b) {
    return a + b;
  }
  const loggedSum = logArguments(sum);
  console.log(loggedSum(5, 3));
  //2задание
  function validate(fn, validator) {
    return function(...args) {
      if (!validator(...args)) {
        throw new Error("Ошибка проверки, аргумент не соответствует критериям");
      }
      return fn(...args);
    };
  }
  function sum(a, b) {
    return a + b;
  }
  function isPositive(a, b) {
    return a > 0 && b > 0;
  }
  const validatedSum = validate(sum, isPositive);
  
  try {
    console.log(validatedSum(19, 84)); 
  } catch (error) {
    console.error(error.message);
  }
  
  