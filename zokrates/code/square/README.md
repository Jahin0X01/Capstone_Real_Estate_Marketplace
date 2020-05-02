# Udacity Blockchain Capstone
### how to Run ZoKrates and get the proof.json and the verifier.sol

First install doker into your system from https://docs.docker.com/get-docker/
```sh
$ docker run -v /path/to/zokrates/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash
$cd code/square
$~/zokrates compile -i square.code
$~/zokrates setup
$~/zokrates compute-witness -a 3 9
$~/zokrates generate-proof
$~/zokrates export-verifier
```
Now Move the proof.json to the `eth-contracts\test` and make sure to copy the content on the proof.json file to the verification proof in the `TestSquareVerifier.js` to be the same as when you run the test it tell you that you have pass the test or not.

And move the verifier.sol to the `eth-contracts\contracts` and rename the file or change the name in the `migrations\2_deploy_contracts.js` to be both like each other to deploy it
