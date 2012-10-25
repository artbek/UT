chrome.tabs.executeScript(null, {file:"js/content_script.js"});

chrome.extension.onMessage.addListener(function(messages) {
	var outputs = [];
	for (var i = 0; i < messages.length; i++) {
		if (messages[i].length > 0) {
			outputs.push(process(messages[i]));
		}
	}

	document.getElementById("output").innerHTML = "";
	if (outputs.length > 0) {
		for (var i = 0; i < outputs.length; i++) {
			document.getElementById("output").innerHTML += "<h6>" +
				outputs[i]['input']  + "</h6><h3>" + outputs[i]['date'] + "</h3>";
		}
	} else {
		document.getElementById("output").innerHTML = "<h3>No selection detected!</h3>";
	}
});


function process(input) {
	var output_date = {
		input: input,
		date: "Not a timestamp!"
	};

	if (parseInt(input)) {
		var d = new Date(input * 1000);
		var date_string = _zero(d.getDate()) + "/" + _zero(d.getMonth() + 1) + "/" + d.getFullYear();
		var time_string = _zero(d.getHours()) + ":" + _zero(d.getMinutes());
		output_date['date'] = date_string + "&nbsp;(" + time_string + ")";
	}

	return output_date;
}


function _zero(number) {
	return ("0" + number).slice(-2)
}
