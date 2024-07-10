import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

interface UsabilityScoreProps {
  score: number
  missingValues: number
  patientsRepresented: number
}

/**
 * UsabilityScore Component
 *
 * This component displays usability score information in a styled Card layout.
 * It includes the score value, average missing values, and number of patients represented.
 *
 * @param score - The usability score to display prominently.
 * @param missingValues - The average number of missing values associated with the data.
 * @param patientsRepresented - The number of patients represented by the data.
 */

const UsabilityScore: React.FC<UsabilityScoreProps> = ({
  score,
  missingValues,
  patientsRepresented
}) => (
  <Card>
    <CardHeader>
      {/* Card header with title */}
      <CardTitle>Usability Score</CardTitle>
    </CardHeader>

    <CardContent className="flex flex-col items-center">
      {/* Circular visualization of the score */}
      <div className="relative h-40 w-40">
        <svg className="h-full w-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="42.5"
            fill="none"
            stroke="#bda4f1"
            strokeWidth="8"
          />
          <rect
            x="46"
            y="3.82"
            width="9.5"
            height="7.5"
            rx="5"
            ry="5"
            fill="#5c28e6"
          />
          <rect
            x="46"
            y="88.82"
            width="9.5"
            height="7.5"
            rx="5"
            ry="5"
            fill="#5c28e6"
          />
          <rect
            x="88.82"
            y="46"
            width="7.5"
            height="9.5"
            rx="5"
            ry="5"
            fill="#5c28e6"
          />
          <rect
            x="3.82"
            y="46"
            width="7.5"
            height="9.5"
            rx="5"
            ry="5"
            fill="#5c28e6"
          />
        </svg>
        {/* Score value */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-4xl font-bold">
          {score}
        </div>
      </div>
      {/* Stats displayed in a row or column based on screen size */}
      <div className="flex w-full flex-row items-center justify-around gap-4 max-[425px]:mt-2 max-[425px]:flex-col">
        {/* Average missing values */}
        <div className="flex flex-col items-center">
          <span className="text-2xl font-semibold">{missingValues}</span>
          <div className="text-sm text-muted-foreground">
            Avg. missing values
          </div>
        </div>
        {/* Patients represented */}
        <div className="flex flex-col items-center">
          <span className="text-2xl font-semibold">{patientsRepresented}</span>
          <div className="text-sm text-muted-foreground">
            Patients represented
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

export default UsabilityScore
