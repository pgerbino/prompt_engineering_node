export interface AgentConfig {
  model: string;
  temperature: number;
  maxTokens: number;
}

export interface AgentResponse {
  content: string;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  model: string;
}

export interface Tool {
  name: string;
  description: string;
  execute: (input: any) => Promise<any>;
} 