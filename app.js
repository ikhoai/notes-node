console.log("hello app!");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;

var command = process.argv[2];

switch (command) {
	case "list":
			console.log("listing all item");
			notes.listNote();
		break;
	case "add":
		console.log("added one more item.");
	console.log(notes.addNote(argv.title, argv.note))

		break;
	case "delete":
		console.log(notes.deleteNote(argv.title));
		break;
	default:
		console.log("no command input!");

}
