'use strict';

module.exports.connect = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "You're connected succesfully"
      },
    ),
  };

};
