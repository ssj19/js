// console.log(document.getElementById("title"));
// document.getElementsByTagName('')
// document.getElementBy('')

function sayhello() {
	// body...
	var name=document.getElementById("name").value;
	var msg="Hey "+name+" bro";
	document.getElementById("content").textContent=msg;
}