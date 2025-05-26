import { OpenAI } from 'openai';
import { loadEnv } from './config';
import { AgentConfig, AgentResponse } from './types';

export class Agent {
  private openai: OpenAI;
  private config: AgentConfig;

  constructor(config: Partial<AgentConfig> = {}) {
    this.config = {
      model: 'gpt-4-turbo-preview',
      temperature: 0.7,
      maxTokens: 2000,
      ...config
    };
    
    loadEnv();
    this.openai = new OpenAI();
  }

  async run(systemPrompt: string, userPrompt: string): Promise<AgentResponse> {
    try {
      const completion = await this.openai.chat.completions.create({
        model: this.config.model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: this.config.temperature,
        max_tokens: this.config.maxTokens
      });

      return {
        content: completion.choices[0]?.message?.content || '',
        usage: completion.usage,
        model: this.config.model
      };
    } catch (error) {
      throw new Error(`Agent execution failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
}

export * from './types'; 