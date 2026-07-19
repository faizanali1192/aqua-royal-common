export interface AppLogoSettings {
  favicon?: string;
  iconLogoDark?: string;
  iconLogoLight?: string;
  mainLogoDark?: string;
  mainLogoLight?: string;
}

export interface AppThemePalette {
  accent: string;
  accentForeground: string;
  background: string;
  buttonBackground: string;
  buttonText: string;
  card: string;
  border: string;
  menuActiveBackground: string;
  menuActiveText: string;
  menuSelectorBar: string;
  menuSliderBackground: string;
  menuText: string;
  sidebar: string;
  text: string;
  mutedText: string;
}

export interface AppIntegrationEntry {
  key: string;
  value: string;
  isSecret?: boolean;
}

export interface AppSettings {
  brandName: string;
  seoDescription: string;
  supportEmail: string;
  logos: AppLogoSettings;
  lightTheme: AppThemePalette;
  darkTheme: AppThemePalette;
  integrations: AppIntegrationEntry[];
  updatedAt?: string;
}

export interface AppSettingsResponse {
  status: string;
  data: AppSettings;
}

export interface UploadNotificationSoundRequest {
  fileData: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
}

export interface UploadNotificationSoundResponse {
  status: string;
  message: string;
  data: {
    fileName: string;
    fileSize: number;
    mimeType: string;
    soundUrl: string;
  };
}

export type IntegrationConnectionStatus =
  | "connected"
  | "disconnected"
  | "notConfigured";

export interface IntegrationProviderHealth {
  checkedAt: string;
  configured: boolean;
  connected: boolean;
  message: string;
  status: IntegrationConnectionStatus;
}

export interface AppIntegrationHealthResponse {
  status: "success";
  data: {
    ai: {
      activeProvider: "gemini" | "openai" | "local";
      connected: boolean;
      gemini: IntegrationProviderHealth;
      openai: IntegrationProviderHealth;
    };
    pusher: IntegrationProviderHealth;
  };
}

export interface UpdateAppSettingsRequest {
  settings: Partial<AppSettings>;
}

export interface UpdateAppSettingsResponse {
  status: string;
  message: string;
  data: AppSettings;
}
