const input = 'Can you give us directions to Sydney, Australia';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (i = 0; i < input.length; i++) {
  for (j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      console.log(input[i])
    }
  }
};
