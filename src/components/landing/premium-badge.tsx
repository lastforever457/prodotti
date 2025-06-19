import { Sparkles } from 'lucide-react'

const PremiumBadge = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div
    className={`inline-flex items-center px-4 py-2 rounded-full
      bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300]
      border border-[#D4AF37] shadow-md
      backdrop-blur-sm ${className}`}
  >
    <Sparkles className="w-4 h-4 text-[#B8860B] mr-2 animate-pulse drop-shadow" />
    <span className="text-[#7B5E00] font-semibold text-sm drop-shadow-sm">
      {children}
    </span>
  </div>
)

export default PremiumBadge
