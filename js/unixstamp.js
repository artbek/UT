chrome.tabs.executeScript(null, {file:"js/content_script.js"});

chrome.extension.onMessage.addListener(function(messages) {
	var outputs = [];
	for (var i = 0; i < messages.length; i++) {
		outputs.push(process(messages[i]));
	}

	for (var i = 0; i < outputs.length; i++) {
		document.getElementById("output").innerHTML += "<h6>" + 
			outputs[i]['input']  + "</h6><h3>" + outputs[i]['date'] + "</h3>";
	}
});


function process(input) {
	var output_date = {
		input: input,
		date: "Not a timestamp!"
	};

	if (parseInt(input)) {
		output_date['date'] = new Date(input * 1000).toString();
	}

	return output_date;
}

