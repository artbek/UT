var selected_strings = [];
var fs = document.getElementsByTagName('frame');
if (fs.length) {
	for (var i = 0; i < fs.length; i++) {
		frame_document = fs[i].contentDocument;
		selected_strings.push(frame_document.getSelection().toString());
	}
} else {
	console.log("else");
	selected_strings.push(document.getSelection().toString());
}

chrome.extension.sendMessage(selected_strings);

