import { LoginForm } from "@/types/auth"
import { RegisterForm } from "@/types/auth"

export async function login(form: LoginForm): Promise<boolean> {
  // Esto es una simulación pero en un caso real aquí habría una petición a un servidor
  if (form.email === "admin@test.com" && form.password === "123456") {
    return true
  }

  throw new Error("Invalid credentials")
}

export async function register(form: RegisterForm): Promise<boolean> {
  // Simulación (aquí iría la API real)
  if (form.password !== form.confirmPassword) {
    throw new Error("Passwords do not match")
  }

  console.warn("User registered:", form)
  return true
}
