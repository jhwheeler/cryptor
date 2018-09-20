import { APIGatewayEvent, Callback, Context, Handler } from "aws-lambda";

import { mono } from "../../mono";
import { poly, splitAnalysis } from "../../poly";

export const monoHandler: Handler = (
  event: APIGatewayEvent,
  context: Context,
  cb: Callback
) => {
  const params = JSON.parse(event.body);
  const { ciphertext } = params;

  const analysis = mono(ciphertext);

  const response = {
    statusCode: 200,
    body: JSON.stringify(analysis)
  };

  cb(null, response);
};

export const polyHandler: Handler = (
  event: APIGatewayEvent,
  context: Context,
  cb: Callback
) => {
  const params = JSON.parse(event.body);
  const { ciphertext, keywordLength } = params;

  let analysis;

  if (keywordLength) {
    analysis = splitAnalysis(ciphertext, keywordLength);
  } else {
    analysis = poly(ciphertext);
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify(analysis)
  };

  cb(null, response);
};
