chrome.browserAction.onClicked.addListener(function(tab) {
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
     var activeTab = tabs[0];
     var url = activeTab.url; 
	 var nyt= /nytimes.com/g;
	 var wapo= /washingtonpost.com/g;
	 if( url.match(nyt)  ){
		 chrome.tabs.executeScript(activeTab.id, {file: 'nyt.js'});
	 }
	 if(url.match(wapo)){
		 chrome.tabs.executeScript(activeTab.id, {file: 'wapo.js'});
	 }

  });
});