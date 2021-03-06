/**
 *****************************************************************************
 Copyright (c) 2016 IBM Corporation.
 All rights reserved. This program and the accompanying materials
 are made available under the terms of the Eclipse Public License v1.0
 which accompanies this distribution, and is available at
 http://www.eclipse.org/legal/epl-v10.html
 Contributors:
  Jeffrey Dare
  Tim Hahn
 *****************************************************************************
 *
 */

var iotf = require("ibmiotf");
var config = require('./config.json');
var devicesToDel = require('./devices.json')

var appClient = new iotf.IotfApplication(config);

//setting the log level to trace. By default its 'warn'
appClient.log.setLevel('info');

//sample device Request
var devices = devicesToDel.devices;

for (i=0; i<devices.length; i++) {
   console.log("deleting "+devices[i].deviceId);

   // Register Multiple devices
   appClient.
   unregisterDevice(devices[i].typeId, devices[i].deviceId). then (function onSuccess (response) {
     //Success callback
         	console.log("Success");
         	console.log(response);
   }, function onError (argument) {
     //Failure callback
         	console.log("Fail");
         	console.log(argument);
   });
}

console.log("Exiting!!!");
