import { twMerge } from 'tailwind-merge'

export const PlayIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="32"
      height="32"
      className={twMerge('h-auto w-full', className)}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_64_3306)">
        <path d="M32 16L8 29.8564L8 2.14359L32 16Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_64_3306">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
