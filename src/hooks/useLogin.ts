import { useState } from "react"
import { login } from "@/services/auth.service"
import { LoginForm } from "@/types/auth"

export function useLogin() {
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  })

  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!form.email || !form.password) {
      setError("All fields are required")
      return
    }

    try {
      setLoading(true)
      await login(form)
      console.warn("Login successful", form)
    } catch (err) {
      setError("Invalid credentials")
    } finally {
      setLoading(false)
    }
  }

  return {
    form,
    error,
    loading,
    handleChange,
    handleSubmit,
  }
}
