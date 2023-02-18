import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
	return (
		<input
			className={cn(
				'flex h-10 w-full rounded-md border border-neutral-300 dark:border-neutral-600 dark:focus:border-neutral-700 bg-transparent py-2 px-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  dark:text-neutral-50 dark:focus:ring-neutral-700 dark:focus:ring-offset-neutral-900 transition-all dark:placeholder-neutral-600',
				className
			)}
			ref={ref}
			{...props}
		/>
	)
})
Input.displayName = 'Input'

export { Input }
