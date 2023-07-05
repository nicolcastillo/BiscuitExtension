async function handler_cookie(){
	var sessionid = await chrome.cookies.get(
		{url: "https://rol.redhat.com/rol/app/classes", name:"sessionid_prod"});
	var token = await chrome.cookies.get(
		{url: "https://rol.redhat.com/rol/app/classes", name:"csrftoken"});
    
        if (token == null || sessionid == null){
        return null;
    };
    
    return {token: token.value, id: sessionid.value}
};

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    handler_cookie().then(sendResponse);
    return true;
});
