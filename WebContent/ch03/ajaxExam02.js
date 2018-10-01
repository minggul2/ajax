var xhrObject;
function startMethod(){
	xhrObject = new XMLHttpRequest();
	xhrObject.onreadystatechange = resultProcess;
	xhrObject.open("GET", "ajaxExam02.xml", true);
	xhrObject.send(null);
}

function resultProcess(){
	if(xhrObject.readyState == 4){
		if(xhrObject.status == 200){
			processXML();
		}
	}
}

function processXML(){
	var xmlDoc = xhrObject.responseXML;
	var subjects = xmlDoc.getElementsByTagName("subject");
	var trTag;
	var tdTag;
	
	if(document.getElementById("displayArea").innerText != "") return;
	
	for(var i = 0; i < subjects.length; i++){
		trTag = document.createElement("tr");
		
		
		var child = subjects[i].childNodes;
		for(var j = 0; j < child.length; j++){
			tdTag = document.createElement("td");
			
			if(child[j].firstChild != null){
				var text = document.createTextNode(child[j].firstChild.nodeValue);
				
				tdTag.appendChild(text);
				trTag.appendChild(tdTag);	
			}
		}
		document.getElementById("resultDisplay").appendChild(trTag);
	}
	
	
}
