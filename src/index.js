module.exports = function check(str, bracketsConfig) {
  // your solution

   if (str.length <= 1){
   	return false;}

  let matchingOpeningBracket, ch
  let stack = []

  let openingBrackets = ['[', '{', '(']
  let closingBrackets = [']', '}', ')']

  for (let i = 0; i < str.length; i++) {
    ch = str[i]

    if (closingBrackets.indexOf(ch) > -1) {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
      if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
        return false
      }
    } else {
      stack.push(ch)
    }
  }

  return (stack.length == 0)


};
