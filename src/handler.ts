// DO NOT MODIFY THIS CODE
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Node } from "./main.js";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const data = JSON.parse(event.body || "{}");
    const functionName = data.functionName;
    const parameters = data.parameters;

    const node = new Node();
    const result = await node[functionName as keyof Node](parameters);

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
