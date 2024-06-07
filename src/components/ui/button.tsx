import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'bg-COLORS-light_green text-COLORS-bg_color_app hover:bg-white/80',
				destructive:
					'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				outline:
					'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
				banner:
					'bg-white/80 text-COLORS-bg_color_app rounded-xl hover:bg-transparent hover:text-white/80 hover:outline transition-all hover:outline-white/80 hover:outline-1 ',
				workoutItem:
					'bg-white text-COLORS-bg_color_app rounded-3xl hover:bg-transparent hover:text-white/80 hover:outline transition-all hover:outline-white/80 hover:outline-1',
				trash: 'opacity-60 hover:opacity-100 transition-opacity duration-300',
				textVar:
					'bg-transparent focus:ring-0 border-none opacity-60 hover:opacity-100 transition-opacity duration-300 h-auto text-base p-0',
				delete:
					'bg-red-700 hover:bg-transparent hover:outline hover:outline-1 hover:outline-red-700'
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
				icon: 'h-10 w-10',
				trash: 'h-auto p-0'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		)
	}
)
Button.displayName = 'Button'

export { Button, buttonVariants }
