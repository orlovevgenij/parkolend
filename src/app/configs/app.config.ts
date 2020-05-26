import {InjectionToken} from '@angular/core';
import { environment } from '../../environments/environment';
export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {
  /*endPoint: environment.apiUrl,
  loginPath: '/api/login',
  searchPath: '/api/search',
  pagesPath: '/api/pages',
  toolsPath: '/api/tools',*/
};
