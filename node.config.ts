import { NodeConfig } from "@lang-engine/lang-engine-node";

const config: NodeConfig = {
  name: "OpenAI Chat API Node",
  functions: [
    {
      name: "callModel",
      displayName: "Call Model",
      inputs: [
        {
          name: "apiKey",
          displayName: "Open AI API Key",
          type: "secret",
          required: true,
        },
        {
          name: "model",
          displayName: "Model",
          type: "select",
          required: true,
          options: [
            { value: "gpt-4o", label: "GPT-4o" },
            { value: "gpt-4o-mini", label: "GPT-4o Mini" },
            { value: "gpt-4o-2024-08-06", label: "GPT-4o 2024-08-06" },
          ],
        },
        {
          name: "messages",
          displayName: "Messages",
          type: "array",
          required: true,
          mappable: true,
          itemsType: {
            name: "message",
            displayName: "Message",
            type: "object",
            required: true,
            fields: [
              {
                name: "role",
                type: "select",
                displayName: "Role",
                required: true,
                options: [
                  { value: "system", label: "System" },
                  { value: "user", label: "User" },
                  { value: "assistant", label: "Assistant" },
                ],
              },
              {
                name: "content",
                type: "string",
                displayName: "Content",
                required: true,
                useTemplate: true,
                isMultiline: true,
              },
            ],
          },
        },
        {
          name: "profile",
          displayName: "Profile",
          type: "object",
          required: false,
          fields: [
            {
              name: "name",
              type: "string",
              displayName: "Name",
              required: false,
            },
            {
              name: "age",
              type: "number",
              displayName: "Age",
              required: false,
            },
          ],
          mappable: true,
        },
      ],
    },
  ],
};

export default config;
