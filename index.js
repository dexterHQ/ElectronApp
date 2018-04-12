const { spawn } = require('child_process');
// exec('sh ./test.sh', function(error, stdout, stderr) {
// });

// execFile: executes a file with the specified arguments
const path = require('path');
const filename = path.join(__dirname, 'test.sh');
const ls = spawn('sh', [ filename ], {
	stdio: 'inherit',
  shell: true
});


const {ipcRenderer} = require('electron')
const {fs} = require('fs');

document.addEventListener('DOMContentLoaded', () => {
  let n = new Notification('You did it!', {
    body: 'Click me to download Lightning Network'
  })

  // Tell the notification to show the menubar popup window on click
  n.onclick = () => {
    // const { spawn } = require('child_process')
		//
    // const ls = spawn('sh', [ 'test.sh' ])
		//
    // ls.stdout.on('data', (data) => {
    //   console.log(`stdout: ${data}`);
    // });
		//
    // ls.stderr.on('data', (data) => {
    //   console.log(`stderr: ${data}`);
    // });
		//
    // ls.on('close', (code) => {
    //   console.log(`child process exited with code ${code}`);
    // });
    ipcRenderer.send('show-window')
  }

})
