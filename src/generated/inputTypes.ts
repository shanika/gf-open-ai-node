// Generated file - DO NOT EDIT
// Generated on: 2025-01-07T08:27:00.949Z

export interface CallModalInput {
  apiKey: string;
  model: string;
  messages: {
  role: string;
  content: string;
}[];
}

export interface BaseFunctions {
  callModal(input: CallModalInput): Promise<Record<string, any>>;
}
