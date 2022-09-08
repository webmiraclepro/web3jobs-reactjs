import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const key = JSON.parse(process.env.REACT_APP_FIREBASE_KEY || '{}');
const app = initializeApp(key);
const storage = getStorage(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, storage, analytics };
