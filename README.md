iot-bulksample
===================

This repository contains two short Javascript programs written to run in Node.js.  One is a program to bulk add devices to the Watson IoT Platform.  The second is a program to bulk delete (unregister) devices from the Watson IoT Platform.  Both programs make use of the project "iot-nodejs" available here: https://github.com/ibm-watson-iot/iot-nodejs .

The files in this repository were inspired from the initial work done by jeffdare in this repository: https://github.com/jeffdare/bulk-add-devices .  My thanks to jeffdare for providing this as a starting point.

The programs interact with the Watson IoT Platform [Watson IoT](http://internetofthings.ibmcloud.com/).

**Steps**

1. 'git clone https://github.com/climbertjh/iot-bulksample'
2. from the top directory of the repository clone, change to the 'src' directory: 'cd src'
3. install into a local node_modules directory the 'ibmiotf' Javascript client API: 'npm install ibmiotf'.  Note, this will create a 'node_modules' directory in your 'src' directory.
4. Edit *config.json*. Add your organization's API-KEY and auth-token
5. Edit *devices.json* to add the list of the multiple devices that are to be registered.
6. Run the following command (from the src directory) to run the *bulkadd.js* script
    'node bulkadd.js'  This will register the devices listed to the organization specified, using the device type specified.
7. Run the following command to (from the src directory) run the *bulkdel.js* script
    'node bulkdel.js'  This will un-register the devices listed which were previously registered to the organization specified.  The device type in *devices.json* is not used.

**config.json**

Configuration file containing your organization credentials

    {
      "org": <orgid>,
      "id": "myAppliationId",
      "auth-key": <api-key>,
      "auth-token": <auth-token>
    }

Note - replace &lt.orgid&gt., <api-key>, and <auth-token> with the values for your Watson IoT organizatiaon, application API key and application auth-token, respectively before running the programs.

**devices.json**

Array containing your list of devices to be registered

    {
      "devices" : [
        {
          "typeId": "raspi",
          "deviceId": "device01"
        },
        {
          "typeId": "raspi",
          "deviceId": "device02"
        }
      ]
    }

Note that for bulkadd.js to work, all referred to device types (in the "typeId" field in devices.json) must have been created prior to invoking the device registration API.  Edit the *devices.json* file as appropriate for the device type and device identifiers for your organization and devices.

