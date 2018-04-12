# Installation

[Click here](https://www.docker.com/community-edition) to install Docker.

# Usage

*   Open a terminal in the project directory.

## Start

### Development

docker-compose -f docker-compose.dev.yml up --build

## Stop

docker-compose down

## View

[Open in browser](http://localhost:9000)

## Command cheatsheet

*   Check processes that are running:

    docker-compose ps

*   How to access container shells to execute commands inside the running container:

    docker-compose exec <container_name> sh

*   Attach to the container to console logs:

    docker-attach <container_id>

# The Task

At Grid+ we are building a next generation hardware device for storing cryptocurrencies. Your task is to create the initial stage of a simple cryptocurrency “wallet” app that runs in the browser. Don’t worry -- you don’t need to use any cryptocurrency protocols (feel free to go beyond the requirements, though).

## Background

Everything in the wallet is partially dependent on a private key, which can be represented either as a 32-byte hex string or as a series of human readable words. Here’s yours:

### Hex:

f2db5f29c287fd8d88965a9e7b8d41a2b2f449261618f12cdc282d0cfd6fb13f

### Words (BIP39):

antenna slight trust minute occur certain envelope lonely nest gaze brand card

As the name implies, this private key must be kept secret by the user. It should not be saved to an external database and probably shouldn’t be persisted in the browser. You can assume this functions as a “password” to unlock the app, but it is also required for basic functionality, so you need to keep it somewhere. Part of the challenge is knowing what to do with this key.

An “address” is a function of the private key and can be shared, persisted, etc. It is public data and is used as the identifier for the user. Here is the address corresponding to your private key:

0x4A59fb38f909C6E04D2143e3a06246b2468B2fe2

If a user wishes to send you money, they send it to that address, which can also be represented as a QR code:

Okay, now that you know the basics, let’s go over the requirements.

## Wallet Requirements

The wallet you’re building does not need to be fully functional -- this means you don’t need to interact with the blockchain or do any cryptography. We are expecting a demo app that shows user flow and has a good aesthetic.

Your app should have, at a minimum, the following functionality and screens:

1.  “Unlock” the app with a private key (either the words or the hex string). You can assume the user will always paste one of these in. (In reality they would import an encrypted file, but don’t worry about that)
2.  Display your current balance. Assume you can call an API to get this number with your address.
3.  Send money using your private key. You must specify a recipient and an amount to send. Assume there is a function to do this operation -- you don’t need to write it.
4.  Receive money by providing an address or QR code to another user. You do not need to define the communication channel -- this is a display screen.
5.  View your transaction history. Assume you can call an API that will return a number of transactions (both incoming and outgoing) that have the following parameters: sender, recipient, amount
6.  Lock the app after a period of inactivity

## Wrapping Up

Those are the requirements for the app. Once you think you’re ready, we will schedule a time to go over it with you in the office. Good luck and congrats for getting this far!
