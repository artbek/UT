var selected_strings = [];
var fs = document.getElementsByTagName('frame');
if (fs.length) {
	console.log("if");
	for (var i = 0; i < fs.length; i++) {
		frame_document = fs[i].contentDocument;
		selected_strings.push(frame_document.getSelection().toString());
	}
} else {
	console.log("else");
	selected_strings.push(document.getSelection().toString());
}

console.log(selected_strings);
chrome.extension.sendMessage(selected_strings);

