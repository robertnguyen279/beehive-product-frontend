export type Action = {
  type: string;
  payload?: any;
};

export type LoginUser = {
  email: string;
  password: string;
  remember?: any;
};
