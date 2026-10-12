export interface User {
  uuid: string;
  identityProviderId?: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
