const {ipcRenderer} = require('electron')
const {fs} = require('fs');
const path = require('path');
var babysprocess;

function download_lnd(){
  console.log("STRTATTTAT");
  const { spawn } = require('child_process');
  const path = require('path');
  const filename = path.join(__dirname, 'test.sh');
  const baby = spawn('sh', [ filename ], {
  	env: process.env.PATH,
  	cwd: process.cwd(),
  	stdio: 'inherit',
    shell: true
  });

  let n = new Notification('You did it!', {
    body: baby.pid
  })

  babysprocess = baby

}

function debug() {
  console.log(__dirname)
  const filename = path.join(__dirname, 'start_node.sh');
  console.log(filename)
}

function kill_lnd() {
  let n = new Notification('You did it!', {
    body: babyspid
  })

  babysprocess.kill('SIGINT')
}

function start_lnd(){
  const { spawn } = require('child_process');
  const path = require('path');
  const filename = path.join(__dirname, 'start_node.sh');

  const baby = spawn('sh', [ filename ], {
    env: process.env,
    // cwd: process.cwd(),
    shell: true
    // No stdio inherit , with it set you cannot debug
  });

  console.log(baby)

  baby.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  baby.stderr.on('data', (data) => {
    console.log(baby)
    console.log(`stderr: ${data}`);
  });

  baby.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

  console.log(baby.pid);
  let n = new Notification('You did it!', {
    body: baby.pid
  })

  babysprocess = baby

}



function stop_lnd() {
  let n = new Notification('You did it!', {
    body: babyspid
  })

  babysprocess.kill('SIGINT')
}
