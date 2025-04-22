import Link from "next/link"

interface LogoProps {
  variant?: "default" | "white" | "black"
  size?: "sm" | "md" | "lg"
}

export function Logo({ variant = "default", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl",
  }

  const variantClasses = {
    default: "bg-black text-white",
    white: "bg-white text-black",
    black: "bg-black text-white",
  }

  return (
    <Link href="/" className="flex items-center">
      <div className={`font-bold tracking-tight ${sizeClasses[size]} ${variantClasses[variant]} px-2 py-1 rounded`}>
        VOLUNTEERVIBES
      </div>
    </Link>
  )
}
