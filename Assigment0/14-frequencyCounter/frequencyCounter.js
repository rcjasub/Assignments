function frequencyCounter(word) {
   let freq = {};
  
   for(let i = 0; i < word.length; i++)
   {
    let char = word[i];

    if(freq[char] == 1)
    {
      freq[char] += 1;
    }
    else{
      freq[char] = 1;
    }
   }

   return freq;
}

console.log(frequencyCounter('ee'))

// Do not edit this line;
module.exports = frequencyCounter;