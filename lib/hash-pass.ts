import { compare, hash } from "bcryptjs";
export async function hashPassword(password: string) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export async function verifyPassword(password: string, hashedPassword: any) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
