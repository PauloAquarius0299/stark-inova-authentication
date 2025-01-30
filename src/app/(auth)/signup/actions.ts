"use server";

import { lucia } from "@/auth";
import prisma from "@/lib/prisma";
import { signUpSchema, SignUpValues } from "@/lib/validation";
import { hash } from "@node-rs/argon2";
import { generateIdFromEntropySize } from "lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signUp(
  credentials: SignUpValues
): Promise<{ error?: string }> {
  try {
    const { username, email, password } = signUpSchema.parse(credentials);


    
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { username: { equals: username, mode: "insensitive" } },
          { email: { equals: email, mode: "insensitive" } },
        ],
      },
    });
    //console.log(existingUser)

    if (existingUser) {
      return {
        error:
          existingUser.username.toLowerCase() === username.toLowerCase()
            ? "Nome de usuário já existe"
            : "Email já existe",
      };
    }
    
    const passwordHash = await hash(password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    
    const userId = generateIdFromEntropySize(10);
    await prisma.user.create({
      data: {
        id: userId,
        username,
        displayName: username,
        email,
        passwordHash,
      },
    });

    
    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    (await cookies()).set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)

    redirect("/");
  } catch (error) {
    if (error instanceof Error && error.message.includes("Redirect")) {
      throw error;
    }
    return {
      error: "Algo deu errado, por favor, tente novamente",
    };
  }
}
