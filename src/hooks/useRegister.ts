import { useState } from "react"
import { register } from "@/services/auth.service"
import { RegisterForm } from "@/types/auth"

export function useRegister() {
  const [form, setForm] = useState<RegisterForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("All fields are required")
      return
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    try {
      setLoading(true)
      await register(form)
      console.warn("Registration successful", form)
    } catch (err) {
      setError("Registration failed")
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
