const BadgeCs = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center px-3 py-1.5 font-bold leading-none text-white transform bg-gradient-to-r from-main to-emerald-600 rounded-full w-fit text-center text-sm md:text-base mb-2">
      {children}
    </div>
  )
}

export default BadgeCs
