const fetch = require("node-fetch")

exports.handler = async (evt) => {
  let response = await fetch("https://8vxi4j08va.execute-api.eu-west-2.amazonaws.com/Prod/museum", {
    method: 'POST',
    body: JSON.stringify(evt)
  });

  let json = await response.json()
  return json;
}
