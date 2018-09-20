import { APIGatewayEvent, Callback, Context, Handler } from "aws-lambda";

import { mono } from "../../mono";

export const handler: Handler = (
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
