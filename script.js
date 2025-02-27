let counterValue = 0;
document.getElementById("incrementBtn").addEventListener("click", function() {
	alert(counterValue);
	counterValue++;
	document.getElementById("counter").textContent = counterValue;
});