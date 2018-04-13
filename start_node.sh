#!/bin/sh

cd ~/go/dev/alice
lnd --rpclisten=localhost:10001 --listen=localhost:10011 --restlisten=localhost:8001 --datadir=test_data --logdir=test_log --bitcoin.testnet --bitcoin.active --bitcoin.node=neutrino --neutrino.connect=faucet.lightning.community

exit 0
