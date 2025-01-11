// Generated file - DO NOT EDIT
// Generated on: 2025-01-11T21:15:13.379Z

export interface CallModelInput {
  apiKey: string;
  model: string;
  messages: {
  role: string;
  content: string;
}[];
}

export interface BaseFunctions {
  callModel(input: CallModelInput): Promise<Record<string, any>>;
}
