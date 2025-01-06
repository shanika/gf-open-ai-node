// Generated file - DO NOT EDIT
// Generated on: 2025-01-06T02:35:05.820Z

export interface CallModalInput {
  apiKey: string;
  modal: string;
  messages: {
  role: string;
  content: string;
}[];
}

export interface BaseFunctions {
  callModal(input: CallModalInput): Promise<Record<string, any>>;
}
