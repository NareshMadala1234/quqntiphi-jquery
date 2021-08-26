let givenText=`Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your
phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`
let replacedText=givenText.replace(/[0-9]/g,"X")
let replacedArray=replacedText.match(/[^\s][^.?!]+[.!?]/g);
console.log(replacedArray);

let index=1;
let count=0;
for(i in replacedArray)
{
    count=replacedArray[i].split(" ").length;
    if(count>3)
    {
        console.log(`${index}.${replacedArray[i]}`);
        index++;
    }
}
