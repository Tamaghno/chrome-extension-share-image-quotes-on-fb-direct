console.log("my extension")
alert("ShareTam Extension Active")

var dom=document.getElementById("rso");
//var links = document.getElementsByClassName("r");

var links = document.getElementsByTagName("a");

var formatted_links = [];

for(let i=0;i<links.length;i++)
{
    // let title = links[i].getElementsByTagName("h3");
    let title = links[i].text;
    let href = links[i].href;
    //console.log("link is",title[0]);
    if(title!=="" && href!==""){
    formatted_links.push({title: title, href: href});
    }
}

// chrome.runtime.sendMessage(
//     {
//     "action": "print_messages",
//     "data": formatted_links
//     },
//     function(res){
//         console.log(res);
//         }
//     )

chrome.runtime.sendMessage(
    {
    "action": "print_messages",
    "data": formatted_links
    },
    res => {
        console.log(res);
        }
    )