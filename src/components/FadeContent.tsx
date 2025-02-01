import { useRef, useEffect, useState } from 'react';

interface FadeContentProps {
  children: React.ReactNode;
  blur?: boolean;
  duration?: number;
  delay?: number;
  easing?: string;
  threshold?: number;
  initialOpacity?: number;
  className?: string;
}

const FadeContent = ({
  children,
  blur = false,
  duration = 1000,
  delay = 0,
  easing = 'ease-out',
  threshold = 0.1,
  initialOpacity = 0,
  className = ''
}: FadeContentProps) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : initialOpacity,
        transition: `opacity ${duration}ms ${easing} ${delay}ms, filter ${duration}ms ${easing} ${delay}ms`,
        filter: blur ? (inView ? 'blur(0px)' : 'blur(10px)') : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default FadeContent;