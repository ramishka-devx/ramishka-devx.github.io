import { useEffect, useRef, useState } from 'react'

export default function LazyImage({ src, alt, className, style }) {
    const [isLoaded, setIsLoaded] = useState(false)
    const imgRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target
                        img.src = img.dataset.src
                        img.onload = () => setIsLoaded(true)
                        observer.unobserve(img)
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (imgRef.current) {
            observer.observe(imgRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <img
            ref={imgRef}
            data-src={src}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
            alt={alt}
            className={`transition-all duration-500 ${isLoaded ? 'blur-0' : 'blur-md'} ${className}`}
            style={style}
        />
    )
}
