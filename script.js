let counterValue = 0;
        document.getElementById("incrementBtn").addEventListener("click", function() {
            alert("Un-incremented value: " + counterValue);
            counterValue++;
            document.getElementById("counter").textContent = counterValue;
        });