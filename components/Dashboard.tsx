import { AreaChart, Box, History } from 'lucide-react'
import RegisterStatus from './Dashboard/RegisterStatus'
import DataRequestsTable from './Dashboard/DataRequestsTable'
import Header from './Dashboard/Header'
import Footer from './Dashboard/Footer'
import StatusCard from './Dashboard/StatusCard'

/**
 * TestDash Component
 *
 * This component represents the main dashboard layout of the application.
 * It includes a header, a data table, various status cards, and a footer.
 * The layout is responsive and adjusts for different screen sizes.
 */

export default function Dashboard() {
  // Sample data for data requests
  const sampleData = [
    {
      id: 1,
      name: 'John Doe',
      team: 'Marketing',
      request: 'Data Analysis',
      date: '2023-06-01',
      status: 'Pending'
    },
    {
      id: 2,
      name: 'Jane Smith',
      team: 'Sales',
      request: 'Data Export',
      date: '2023-05-15',
      status: 'Pending'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      team: 'IT',
      request: 'Data Visualization',
      date: '2023-04-30',
      status: 'Pending'
    },
    {
      id: 4,
      name: 'Sarah Lee',
      team: 'HR',
      request: 'Data Reporting',
      date: '2023-03-20',
      status: 'Pending'
    },
    {
      id: 5,
      name: 'Tom Wilson',
      team: 'Finance',
      request: 'Data Cleaning',
      date: '2023-02-10',
      status: 'Pending'
    },
    {
      id: 6,
      name: 'Emily Brown',
      team: 'Operations',
      request: 'Data Integration',
      date: '2023-07-15',
      status: 'Pending'
    },
    {
      id: 7,
      name: 'Michael Clark',
      team: 'Product',
      request: 'Data Modeling',
      date: '2023-06-25',
      status: 'Pending'
    },
    {
      id: 8,
      name: 'Alice Green',
      team: 'Engineering',
      request: 'Data Architecture',
      date: '2023-05-05',
      status: 'Pending'
    },
    {
      id: 9,
      name: 'David White',
      team: 'Research',
      request: 'Data Experimentation',
      date: '2023-04-15',
      status: 'Pending'
    },
    {
      id: 10,
      name: 'Linda Harris',
      team: 'Customer Support',
      request: 'Data Insights',
      date: '2023-03-01',
      status: 'Pending'
    }
  ]

  // Sample avatars for team members
  const teamAvatars = Array(4).fill({
    src: '/placeholder-user.jpg',
    fallback: 'AB'
  })

  return (
    <div className="flex min-h-screen w-full flex-col items-center space-y-4 p-0">
      {/* Header component */}
      <Header />

      <main className="flex w-full max-w-6xl flex-col space-y-8">
        {/* DataRequestsTable component */}
        <DataRequestsTable data={sampleData} />

        <div className="rever grid w-full grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-0">
          <div className="grid grid-cols-2 gap-4 max-lg:order-last lg:col-span-2">
            {/* StatusCard components */}
            <StatusCard
              title="Team"
              avatars={teamAvatars}
              buttonText="Manage team"
            />
            <StatusCard
              title="Data requests"
              icon={History}
              value="2"
              buttonText="See requests"
            />
            <StatusCard
              title="Documents"
              icon={AreaChart}
              buttonText="View documents"
            />
            <StatusCard
              title="Studies"
              icon={Box}
              value="2"
              buttonText="Manage studies"
            />
          </div>
          <div className="flex h-fit w-full items-center lg:col-span-3">
            {/* Placeholder SVG for responsive design */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-12 w-12 text-[#5932e6] max-lg:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <div className="flex h-fit w-full flex-col divide-y divide-gray-200 rounded-lg border bg-white p-4 shadow-md lg:max-w-2xl">
              {/* RegisterStatus components */}
              <RegisterStatus
                name="European Register for Multiple Sclerosis"
                stage={2}
              />
              <RegisterStatus
                className="pt-4"
                name="UK Cystic Fibrosis Registry"
                stage={2}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
