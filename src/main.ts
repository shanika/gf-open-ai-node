import OpenAI from "openai";
import { BaseFunctions, CallModelInput } from "./generated/inputTypes.js";
import { ChatCompletionMessageParam } from "openai/resources/index.js";

export class Node implements BaseFunctions {
  async callModel(input: CallModelInput): Promise<Record<string, any>> {
    const client = new OpenAI({
      apiKey: input.apiKey,
    });

    const chatCompletion = await client.chat.completions.create({
      messages: input.messages as ChatCompletionMessageParam[],
      model: input.model,
    });

    return {
      response: chatCompletion.choices[0].message.content,
    };
  }
}
