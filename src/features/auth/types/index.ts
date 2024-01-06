import { User } from "@/stores/auth";

export type UserResponse = {
  jwt: string;
  user: User;
};
