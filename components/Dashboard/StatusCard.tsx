import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

// Define the structure for avatar objects
interface AvatarData {
  src: string
  fallback: string
}

// Define the props for the StatusCard component
interface StatusCardProps {
  title: string
  icon?: React.ElementType
  value?: string | number
  buttonText: string
  avatars?: AvatarData[]
}

/**
 * StatusCard Component
 *
 * This component renders a card displaying status information. It can show either
 * a set of avatars or an icon with a value. The card includes a title and a button.
 *
 * @param title - The title of the status card
 * @param icon - The icon component to display (when not showing avatars)
 * @param value - The value to display alongside the icon (optional)
 * @param buttonText - The text to display on the card's button
 * @param avatars - An array of avatar objects to display (optional)
 */
export default function StatusCard({
  title,
  icon: Icon,
  value,
  buttonText,
  avatars
}: StatusCardProps) {
  return (
    <Card className="border shadow-md">
      <CardHeader>
        {/* Card title with responsive font size */}
        <CardTitle className="text-md min-[425px]:text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        {avatars ? (
          // Render avatars if provided
          <div className="flex space-x-2">
            {avatars.map((avatar, index) => (
              <Avatar className="h-6 w-6 lg:h-8 lg:w-8" key={index}>
                <AvatarImage src={avatar.src} />
                <AvatarFallback>{avatar.fallback}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        ) : Icon?(
          // Render icon and value if avatars are not provided
          <div className="flex items-center space-x-3">
            {/* Icon background */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dcd2f9]">
              <Icon className="h-6 w-6 text-[#5932e6]" />
            </div>
            {/* Display value if provided */}
            {value && <div className="text-3xl text-[#5932e6]">{value}</div>}
          </div>
        ):''}
        {/* Action button */}
        <Button className="mt-4 w-fit rounded-full bg-[#5932e6] px-4 font-light hover:bg-[#654ac8] max-[425px]:text-sm lg:px-8">
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  )
}
