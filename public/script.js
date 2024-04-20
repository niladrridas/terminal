// public/script.js

function executeCommand() {
    var command = document.getElementById("command-input").value;
    
    fetch('/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ command: command })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("terminal-output").innerText = data.output;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
