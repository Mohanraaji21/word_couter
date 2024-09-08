
let chars;

let clen_arr;

let words;

function calculate()
{
    chars = document.getElementById('words');
    
    let clen = 0;
    let char_count = 0;
    clen = (chars.value).length;

    let word_obj = {};
   //character counter
    for(i=0;i<clen;i++)
    {
        if(chars.value[i] === ' ')
        {
            continue;
        }
        else
        {
            char_count++;
        }
    }

    //document.body.innerHTML = char_count;

    

    // words counter


    //words = chars.value.split(" ").match(/\b\w+\b/g);
    words = chars.value.split(" ");
    let wlen = words.length;
    if(words[0]===null || words[0] === ' ')
    {
        wlen=0;
    }
    

    //repeated words
    

    for(i=0; i<words.length;i++)
    {   
        let ele = words[i];
            if(ele.length>0)
            {
            
                if(word_obj[ele])
                {
                    word_obj[ele]++;
                }
                else
                {
                    word_obj[ele] = 1;
                }
            }
            else{
                wlen=0;
            }
    }

  //  document.body.innerHTML = JSON.stringify(word_obj);
  //  console.log(word_obj);

    let repeated_count = Object.keys(word_obj).length;

    
    console.log(char_count);
    
  
    console.log(wlen);
    
    
    console.log(word_obj);

    let resultString = "Total Characters: " + char_count + "<br>"+"Total words: "   + wlen + "<br>"+"Repeated words: " + JSON.stringify(word_obj)+"<br>"+"Repeat count "+repeated_count;


    // Display results
    document.getElementById("results").innerHTML = resultString;

}