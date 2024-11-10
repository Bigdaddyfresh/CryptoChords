# Coding Challenge Submission <br><br>

## Description
This coding challenge involves tracking Ethereum transactions and potentially triggering sound events. This process combines real-time data updates, visual feedback, and audio feedback, allowing users to track and respond to Ethereum activity in an engaging, sensory-rich way. 

This visualization includes the following components

1. Transaction Feed Display:
    * You can see real-time list of Ethereum transactions in a structured format (e.g., a list of transaction details showing the sender (from), recipient (to), and value (ETH)).
    * The transactions would be continuously updated every few seconds as new data comes in from the blockchain API. This allows users to see live updates without refreshing the page manually.
    * This is possible because of the use of Infura API
    * 

2. Sound or Audio Trigger:
    * When new transactions occur on chain, audio cues are triggered. Depending on the nature of the transaction, different sounds could be heard, corresponding to different types of transactions (pop, hemi, or general ethereum transactions).
    * Users might hear musical notes, like 'C4' for one type of transaction or 'G4' for another, depending on how the app is set up to visualize the data through sound. These cues are intended to provide feedback for specific types of transactions, enabling users to easily distinguish between them audibly.

3. Dynamic Updates:
    * As new transactions are processed, viewers will see the list of transactions update dynamically. This provides an ever-changing stream of blockchain activity, keeping the user informed with real-time updates.

## Prerequisites, Dependencies, Versions
Prerequisites
Node.js 
Yarn
React
Ethereum Blockchain Interaction - ether.js
Audio Libarary placback

Dependencies
React and React DOM
Web3/Ethers.js
Howler.js

## Licensing
Please state if license is CC, MIT or ISC or other (please no GPL)

## Outside Libraries
Link any outside open source libraries used

## Steps
* clone repository
* install node.js
* use yarn start
* copy local host address to browser to view
