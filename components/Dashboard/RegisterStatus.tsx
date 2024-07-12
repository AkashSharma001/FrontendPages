import React from 'react'
import { cn } from "lib/utils"

// Define the stages of the registration process
const STAGES: string[] = [
  'Pending',
  'Evaluation',
  'Approved',
  'Ready to analyze'
]

// Define the props for the RegisterStatus component
interface RegisterStatusProps {
  className?: string
  name: string
  stage?: number
}

/**
 * RegisterStatus Component
 *
 * This component displays a visual representation of the registration status
 * for a given item. It shows a series of stages and highlights the current stage.
 *
 * @param className - Additional CSS classes to apply to the component
 * @param name - The name of the item being registered
 * @param stage - The current stage of registration (default: 0)
 */
export default function RegisterStatus({
  className,
  name,
  stage = 0
}: RegisterStatusProps) {
  return (
    <div
      className={cn(
        'm-2 flex items-center justify-around gap-4 max-lg:flex-col',
        className
      )}
    >
      {/* Name section */}
      <div className="flex items-start justify-start max-lg:w-full">
        <h3 className="w-40 text-center text-xs text-gray-800 max-lg:whitespace-nowrap max-lg:font-semibold">
          {name}
        </h3>
      </div>

      {/* Stages visualization */}
      <div className="flex w-full items-center">
        {STAGES.map((label, index) => {
          // Determine the color of the stage indicator
          let color = 'bg-gray-200'
          if (index < stage) color = 'bg-green-600'
          if (index === stage) color = 'bg-indigo-600'

          return (
            <React.Fragment key={label}>
              {/* Stage indicator and label */}
              <div className="flex flex-col items-center space-y-1">
                <div
                  className={`h-4 w-4 rounded-full min-[425px]:h-6 min-[425px]:w-6 ${color}`}
                />
                <span className="text-[8px] text-gray-600 min-[425px]:text-xs">
                  {label}
                </span>
              </div>

              {/* Connector line between stages */}
              {index < STAGES.length - 1 && (
                <div
                  className={`mb-4 h-[3px] flex-grow ${
                    index < stage ? 'bg-green-500' : 'bg-gray-200'
                  }`}
                />
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
