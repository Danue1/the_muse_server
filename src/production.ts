import { Server } from "http";
import { APIGatewayEvent, Context } from "aws-lambda";
import serverless from "aws-serverless-express";

import { createServer } from "./server";

let server: Server;

export const handler = async (event: APIGatewayEvent, context: Context) => {
  if (!server) {
    try {
      console.log(":: PROCESS ::");
      console.log(process.env.DATABASE_NAME);
      console.log(process.env.DATABASE_USERNAME);
      console.log(process.env.DATABASE_PASSWORD);
      console.log(process.env.DATABASE_HOST);
      console.log(":: INIT ::");
      const app = await createServer();
      console.log(":: INIT APP ::");
      server = serverless.createServer(app);
      console.log(":: INIT SERVERLESS ::");
    } catch (error) {
      console.log(error);
    }
  }

  try {
    console.log(":: SUCCESS :: ");
    return serverless.proxy(server, event, context, "PROMISE").promise;
  } catch (error) {
    console.log(":: FAILURE :: ");
    return {
      statusCode: 500,
      headers: {},
      body: {
        error
      }
    };
  }
};
