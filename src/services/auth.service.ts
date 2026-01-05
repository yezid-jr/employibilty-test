import { LoginForm } from "@/types/auth"

export async function login(form: LoginForm): Promise<boolean> {
  // Esto es una simulación pero en un caso real aquí habría una petición a un servidor
  if (form.email === "admin@test.com" && form.password === "123456") {
    return true
  }

  throw new Error("Invalid credentials")
}
