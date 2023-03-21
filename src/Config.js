export const Config = {
  APIKEY: import.meta.env.VITE_APIKEY,
  AUTHDOMAIN: import.meta.env.VITE_AUTHDOMAIN,
  DATABASE_URL: import.meta.env.VITE_DATABASE_URL,
  PROJECT_ID: import.meta.env.VITE_PROJECT_ID,
  STORAGE_BUCKET: import.meta.env.VITE_STORAGE_BUCKET,
  MESSAGING_SENDER_ID: import.meta.env.VITE_MESSAGING_SENDER_ID,
  APP_ID: import.meta.env.VITE_APP_ID,
  MEASUREMENT_ID: import.meta.env.VITE_MEASUREMENT_ID,
  BASE_URL: window.location.origin,
};
