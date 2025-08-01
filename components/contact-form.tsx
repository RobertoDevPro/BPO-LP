"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulação de envio
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white p-10 rounded-2xl shadow-lg h-full flex flex-col items-center justify-center text-center border border-slate-200">
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="h-8 w-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">Mensagem Enviada!</h3>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Obrigado por entrar em contato. Nossa equipe responderá em breve.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-slate-300 hover:bg-slate-50 text-slate-700"
        >
          Enviar nova mensagem
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-lg border border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-slate-700 font-medium">
            Nome Completo
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Seu nome completo"
            value={formState.name}
            onChange={handleChange}
            required
            className="border-slate-300 focus:border-blue-500 rounded-lg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-700 font-medium">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            value={formState.email}
            onChange={handleChange}
            required
            className="border-slate-300 focus:border-blue-500 rounded-lg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-slate-700 font-medium">
            Telefone
          </Label>
          <Input
            id="phone"
            name="phone"
            placeholder="(00) 00000-0000"
            value={formState.phone}
            onChange={handleChange}
            required
            className="border-slate-300 focus:border-blue-500 rounded-lg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-slate-700 font-medium">
            Empresa
          </Label>
          <Input
            id="company"
            name="company"
            placeholder="Nome da sua empresa"
            value={formState.company}
            onChange={handleChange}
            required
            className="border-slate-300 focus:border-blue-500 rounded-lg"
          />
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <Label htmlFor="message" className="text-slate-700 font-medium">
          Mensagem
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Como podemos ajudar sua empresa?"
          rows={4}
          value={formState.message}
          onChange={handleChange}
          required
          className="resize-none border-slate-300 focus:border-blue-500 rounded-lg"
        />
      </div>

      <div className="flex gap-4 mt-8">
        <Button
          type="submit"
          className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </Button>
        <Button
          type="button"
          className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 rounded-lg"
          onClick={() => {
            const message = `Olá! Meu nome é ${formState.name}, da empresa ${formState.company}. ${formState.message || "Gostaria de saber mais sobre os serviços de consultoria."}`
            window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, "_blank")
          }}
        >
          WhatsApp
        </Button>
      </div>
    </form>
  )
}
