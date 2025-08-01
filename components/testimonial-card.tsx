import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  company: string
  testimonial: string
  image?: string
}

export default function TestimonialCard({ name, company, testimonial, image }: TestimonialCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:bg-slate-50 group h-full">
      <CardContent className="p-8 h-full flex flex-col">
        {/* Stars */}
        <div className="flex mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
          ))}
        </div>

        {/* Testimonial */}
        <div className="flex-grow mb-6">
          <p className="text-slate-700 italic leading-relaxed">"{testimonial}"</p>
        </div>

        {/* Author */}
        <div className="flex items-center">
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-full w-12 h-12 flex items-center justify-center mr-4 overflow-hidden group-hover:scale-110 transition-transform duration-300">
            {image ? (
              <Image
                src={image || "/placeholder.svg"}
                alt={name}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-slate-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            )}
          </div>
          <div>
            <h4 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{name}</h4>
            <p className="text-slate-600 text-sm">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
