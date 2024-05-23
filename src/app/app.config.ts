import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"eva64zhigueerick","appId":"1:531994311268:web:239473c84f6f2055e0fd71","storageBucket":"eva64zhigueerick.appspot.com","apiKey":"AIzaSyCbjT_QIyBSWx9j6j3eLculI_qQGSOW6s0","authDomain":"eva64zhigueerick.firebaseapp.com","messagingSenderId":"531994311268"})), provideFirestore(() => getFirestore())]
};
