import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http'; // Keep this
import { App } from './app/app';

// Merge provideHttpClient() directly into the existing appConfig providers
bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient() // 👈 This injects the HTTP client into your app config!
  ]
})
.catch((err) => console.error(err));