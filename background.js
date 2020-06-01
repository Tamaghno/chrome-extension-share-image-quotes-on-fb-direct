// alert("Hi")

function MyGenericClick(info,tab){
    console.log("Clicked on page:",info,tab);
    
}

function MyImageClick(info,tab){
    console.log("clicked an image",info,tab);
    chrome.windows.create({
        "url": "http://www.facebook.com/sharer.php?u=" + info.srcUrl + "&display=popup",
        "type": "popup"
    })
}
function MyQuoteClick(info,tab){
    console.log("selected a quote",info,tab);
    chrome.windows.create({
        "url": "http://www.facebook.com/sharer.php?u=" + info.pageUrl + "&display=popup&quote=" + info.selectionText,
        "type": "popup"
    })
}
chrome.contextMenus.create({
    "title": "Share",
    "contexts": ["page"],
    "onclick": MyGenericClick
})
chrome.contextMenus.create({
    "title": "Share Image on Fb",
    "contexts": ["image"],
    "onclick": MyImageClick
})
chrome.contextMenus.create({
    "title": "Share Quote on Fb",
    "contexts": ["selection"],
    "onclick": MyQuoteClick
})

function sendResponse(){

}

chrome.runtime.onMessage.addListener(
    function(msg, sender, sendResponse){
    console.log("message",msg)
    sendResponse({"text": "received the  links"});
})

