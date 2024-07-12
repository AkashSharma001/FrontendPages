
import LineChart from './DataSource/LineChart'
import HorizontalBarChart from './DataSource/HorizontalBarChart'
import UsabilityScore from './DataSource/UsabilityScore'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export default function DataSourceDetail() {
  const sampleLineChartData = [
    {
      id: 'A',
      color: '#577fed',
      data: [
        { year: '2019', value: 5 },
        { year: '2019.2', value: 8 },
        { year: '2019.5', value: 12 },
        { year: '2020', value: 14 },
        { year: '2020.6', value: 12 },
        { year: '2021.4', value: 10 },
        { year: '2022.1', value: 11 },
        { year: '2022.45', value: 13.5 },
        { year: '2022.6', value: 16.3 },
        { year: '2022.7', value: 19.5 }
      ]
    },
    {
      id: 'B',
      color: '#5228cb',
      data: [
        { year: '2019', value: 0 },
        { year: '2019.3', value: 5 },
        { year: '2019.55', value: 8 },
        { year: '2020.2', value: 12 },
        { year: '2020.8', value: 8.5 },
        { year: '2021.6', value: 5 },
        { year: '2022.2', value: 6.3 },
        { year: '2022.6', value: 9.2 },
        { year: '2022.9', value: 12.5 },
        { year: '2023.1', value: 15.5 },
        { year: '2023.2', value: 18.8 }
      ]
    }
  ];

  const sampleHorizontalBarChartData = [
    { age: '85+', percentage: 7 },
    { age: '75-85', percentage: 12 },
    { age: '65-75', percentage: 21 },
    { age: '45-65', percentage: 30 },
    { age: '18-46', percentage: 17 },
    { age: '2-17', percentage: 15 }
  ]

  return (
    <div className="container mx-auto">
      <header className="mb-4">
        <div className="flex flex-col justify-between lg:flex-row">
          <h1 className="text-2xl font-bold">
            Integrated Primary Care Information (IPCI)
          </h1>
          <div className="flex flex-col gap-2 mt-4 sm:mt-2 sm:flex-row">
            <Button
              variant="default"
              className="flex-1 bg-[#5c28e6] hover:bg-[#7644fffc]"
            >
              View data sample
            </Button>
            <Button
              variant="default"
              className="flex-1 bg-[#5c28e6] hover:bg-[#7644fffc]"
            >
              Request data access
            </Button>
          </div>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The Integrated Primary Care Information (IPCI) database is a
                longitudinal observational database containing routinely
                collected data from computer-GPs throughout the Netherlands.
              </p>
              <p>
                IPCI was started in 1992 by the department of Medical
                Informatics of the Erasmus Medical Center in Rotterdam with the
                objective to use the data for research on the use and effects of
                drugs. The current database includes patient records from over 2
                million patients. In 2016, the database started to increase
                significantly. In 2019, the data is also standardized to the
                Observational Medical Outcomes Partnership common data model
                (OMOP CDM), enabling collaboration with other databases within
                the Observational Health Data Sciences and Informatics (OHDSI)
                network.
              </p>
              <p>
                The primary goal of IPCI is to enable medical research to inform
                GPs and their organizations about the provided care and to use
                this information for their internal quality evaluation.
              </p>
              <p>
                IPCI facilitates studies across various medical specialties,
                ranging from chronic disease management to epidemiological
                research. Its extensive dataset allows researchers to explore
                trends, outcomes, and treatment effectiveness on a population
                scale, contributing valuable insights to public health policies
                and clinical practices.
              </p>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Data types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2">
                    <div className="whitespace-nowrap rounded-full border px-5 py-2 text-sm">
                      Primary care
                    </div>
                    <div className="rounded-full border px-5 py-2 text-sm">
                      Pharmacy dispensing
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    Care Setting
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full border px-5 py-2 text-sm">
                      Primary care
                    </div>
                    <div className="rounded-full border px-5 py-2 text-sm">
                      Community pharmacist
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    Countries
                  </h3>

                  <div className="flex items-center gap-2">
                    <div className="rounded-full border px-5 py-2 text-sm">
                      Netherlands
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Chart</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart
                  className="h-[250px] w-full"
                  data={sampleLineChartData}
                />
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <UsabilityScore
            score={87}
            missingValues={5}
            patientsRepresented={2.5}
          />
          <HorizontalBarChart
            data={sampleHorizontalBarChartData}
            title="Demographics %"
            valueKey="percentage"
            color="#bfa9f9"
            height={350}
          />
        </div>
      </div>
    </div>
  )
}
