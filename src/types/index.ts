export type ViewportMode = 'desktop' | 'mobile';

export enum ScreenshotTypeEnum {
  HTML = 'html',
  IMAGE = 'image',
}

export interface ScreencaptureData {
  id: string;
  name: string;
  contentType: ScreenshotTypeEnum;
  htmlContent?: string;
  imageUrl?: string;
  thumbnailUrl?: string;
  originalUrl?: string;
  createdAt?: string;
  author?: string;
  tags?: string[];
  description?: string;
}
