"use strict";

const AWSXRay = require("aws-xray-sdk-core");
const AWS = AWSXRay.captureAWS(require("aws-sdk"));
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports.connect = async (event) => {
  
  console.log(JSON.stringify(event));

  var params = {
    TableName: "connectionTable",
    Item: {
      user_id: "4",
      date: "date",
    },
    ReturnValues: "ALL_OLD"  
  }
  
  console.log("Writing a new item to DynamoDB");

  const writeData = await docClient.put(params).promise();

  return writeData;
  
};