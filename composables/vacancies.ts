export const useVacancies = () => {
  const vacancies = useState('vacancies', () => [
    {
      department: 'project execution',
      title: 'Project Manager – USA',
      text: ` • Support the team in the design of digital strategies<br />
              • Collect information, analyze needs, study best practices
              (benchmarking), analyze visit trends, identify performance
              indicators (KPIs) <br />
              • Actively participate in the conversation in order to
              create an effective tree structure and wireframe.<br />
              • Monitor new practices and trends`,
    },
    {
      department: 'project execution',
      title: 'Project Manager2 – USA',
      text: ` • Support the team in the design of digital strategies<br />
              • Collect information, analyze needs, study best practices
              (benchmarking), analyze visit trends, identify performance
              indicators (KPIs) <br />
              • Actively participate in the conversation in order to
              create an effective tree structure and wireframe.<br />
              • Monitor new practices and trends`,
    },
    {
      department: 'marketing and pr',

      title: 'CMO',
      text: ` • Support the team in the design of digital strategies<br />
              • Collect information, analyze needs, study best practices
              (benchmarking), analyze visit trends, identify performance
              indicators (KPIs) <br />
              • Actively participate in the conversation in order to
              create an effective tree structure and wireframe.<br />
              • Monitor new practices and trends`,
    },
    {
      department: 'engineering',
      title: 'Web Designer',
      text: ` • Support the team in the design of digital strategies<br />
              • Collect information, analyze needs, study best practices
              (benchmarking), analyze visit trends, identify performance
              indicators (KPIs) <br />
              • Actively participate in the conversation in order to
              create an effective tree structure and wireframe.<br />
              • Monitor new practices and trends`,
    },
  ])

  interface iFilter {
    type: string
    isActive: boolean
  }

  const filters = useState<iFilter[]>('vacanciesFilters', () => [])

  filters.value = [
    {
      type: 'all',
      isActive: false,
    },
    ...vacancies.value.map(v => ({ type: v.department, isActive: false })),
  ]

  console.log(filters.value)

  return { vacancies }
}
