'use client'

const StyledCss = () => {
  return (
    <style jsx global>{`
      @keyframes float {
        0%,
        100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
      }
      @keyframes slideInUp {
        from {
          transform: translateY(100px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
      @keyframes slideInLeft {
        from {
          transform: translateX(-100px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideInRight {
        from {
          transform: translateX(100px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes fadeInScale {
        from {
          transform: scale(0.8);
          opacity: 0;
        }
        to {
          transform: scale(1);
          opacity: 1;
        }
      }
      @keyframes shimmer {
        0% {
          background-position: -200% 0;
        }
        100% {
          background-position: 200% 0;
        }
      }
      .animate-slide-up {
        animation: slideInUp 0.8s ease-out forwards;
      }
      .animate-slide-left {
        animation: slideInLeft 0.8s ease-out forwards;
      }
      .animate-slide-right {
        animation: slideInRight 0.8s ease-out forwards;
      }
      .animate-fade-scale {
        animation: fadeInScale 0.6s ease-out forwards;
      }
      .shimmer {
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.4),
          transparent
        );
        background-size: 200% 100%;
        animation: shimmer 2s infinite;
      }
    `}</style>
  )
}

export default StyledCss
