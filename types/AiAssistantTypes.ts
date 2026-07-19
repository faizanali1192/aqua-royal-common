export type AiChatRole = "user" | "assistant";

export type AiAssistantIntent =
  | "dashboard_overview"
  | "get_customer_details"
  | "get_inventory_status"
  | "get_low_stock"
  | "get_todays_sales"
  | "get_pending_payments"
  | "get_recent_payments"
  | "get_todays_deliveries"
  | "get_expenses_summary"
  | "general";

export type AiProvider = "gemini" | "openai" | "local";

export interface AiChatSession {
  sessionId: number;
  ownerUserId: number;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface AiChatMessage {
  messageId: number;
  sessionId: number;
  role: AiChatRole;
  content: string;
  data?: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
}

export interface AiAssistantStatusResponse {
  status: "success";
  data: {
    activeProvider: AiProvider;
    connectionStatus: "connected" | "disconnected" | "local";
    geminiConfigured: boolean;
    openaiConfigured: boolean;
    fallbackEnabled: boolean;
    providers: {
      gemini: {
        checkedAt: string;
        configured: boolean;
        connected: boolean;
        message: string;
        status: "connected" | "disconnected" | "notConfigured";
      };
      openai: {
        checkedAt: string;
        configured: boolean;
        connected: boolean;
        message: string;
        status: "connected" | "disconnected" | "notConfigured";
      };
    };
  };
}

export interface AiChatSessionsResponse {
  status: "success";
  data: AiChatSession[];
}

export interface AiChatSessionResponse {
  status: "success";
  data: {
    session: AiChatSession;
    messages: AiChatMessage[];
  };
}

export interface AiRenameSessionRequest {
  title: string;
}

export interface AiRenameSessionResponse {
  status: "success";
  message: string;
  data: AiChatSession;
}

export interface AiDeleteSessionResponse {
  status: "success";
  message: string;
}

export interface AiChatRequest {
  message: string;
  sessionId?: number | null;
}

export interface AiChatResponse {
  status: "success";
  data: {
    session: AiChatSession;
    userMessage: AiChatMessage;
    assistantMessage: AiChatMessage;
    intent: AiAssistantIntent;
    provider: AiProvider;
  };
}
