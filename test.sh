#!/bin/sh

export GOPATH=~/gocode
export PATH=$PATH:$GOPATH/bin

go get -d github.com/lightningnetwork/lnd
cd $GOPATH/src/github.com/lightningnetwork/lnd
make && make install

# cd ~/go/dev/alice
# lnd --rpclisten=localhost:10001 --listen=localhost:10011 --restlisten=localhost:8001 --datadir=test_data --logdir=test_log --bitcoin.simnet --bitcoin.active --bitcoin.node=btcd --btcd.rpcuser=kek --btcd.rpcpass=kek
# lnd --rpclisten=localhost:10003 --listen=localhost:10013 --restlisten=localhost:8003 --datadir=test_data --logdir=test_log --bitcoin.testnet --bitcoin.active --bitcoin.node=neutrino --neutrino.connect=faucet.lightning.community


exit 0
