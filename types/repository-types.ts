// Define the ICreateAccountInput type
export type ICreateAccountInput = {
  username: string;
  password: string;
  email: string;
  // Add other properties as needed
};

// Define the ICreateAccountResponse type
export type ICreateAccountResponse = {
  success: boolean;
  message?: string;
  // Add other properties as needed
};

// Define the ILoginInput type
export type ILoginInput = {
  username: string;
  password: string;
  // Add other properties as needed
};

// Define the ILoginResponse type
export type ILoginResponse = {
  message: string;
  data: {
    access_token: string;
    refresh_token: string;
  }

};
