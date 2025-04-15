import dotenv from 'dotenv';
dotenv.config();

const getRequiredEnvVar = (varName: keyof NodeJS.ProcessEnv): string => {
    const value = process.env[varName];
    if (!value) {
      throw new Error(`Missing required environment variable: ${varName}`);
    }
    return value;
  };
  
export const config: {baseURL: string, isProduction: boolean} = {
    baseURL: getRequiredEnvVar('API_URL'), 
    isProduction: getRequiredEnvVar('NODE_ENV') === 'production'
};
  