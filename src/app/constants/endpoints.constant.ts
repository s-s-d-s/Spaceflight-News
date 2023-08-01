import { environment } from '@app/environment';

export const EndpointsConstants: Record<string, string> = {
  ARTICLES: `${environment.apiUrl}`,
}
