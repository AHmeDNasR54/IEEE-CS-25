
// from 54 to 56

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;


while(index<friends.length)
{
    if(!(isNaN(friends[index])))
    {
        index++;
        continue;
    }
    if(friends[index][0]=="A")
    {
        index++
        continue;
    }
    console.log(`"${++counter} => ${friends[index]}"`)
    index++;
}

