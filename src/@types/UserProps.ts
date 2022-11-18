export interface UserProps {
  name: string | null;
  email: string | null;
  authProvider: string | null;
  createdAt: Date;
  subscribed: boolean;
  subscriptionDate?: Date;
  altEmail?: string;
  birthday?: Date;
  gender?: "Male" | "Female" | "Prefer not to mention";
}
