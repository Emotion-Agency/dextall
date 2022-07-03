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

  const activeFilter = ref('all departments')

  const filteredVacancies = computed(() => {
    if (activeFilter.value === 'all departments') {
      return vacancies.value
    }

    return vacancies.value.filter(v => v.department === activeFilter.value)
  })

  interface iFilter {
    type: string
    isActive: boolean
    length: number
  }

  const filtersValues = [...new Set(vacancies.value.map(v => v.department))]

  const filters = useState<iFilter[]>('vacanciesFilters', () => [])

  filters.value = [
    {
      type: 'all departments',
      isActive: true,
      length: vacancies.value.length,
    },
    ...filtersValues.map(fv => ({
      type: fv,
      isActive: false,
      length: vacancies.value.filter(v => v.department === fv).length,
    })),
  ]

  watch(activeFilter, () => {
    filters.value = filters.value.map(f => {
      if (f.type === activeFilter.value) {
        return { ...f, isActive: true }
      }
      return { ...f, isActive: false }
    })
  })

  const onFilter = (value: string) => {
    activeFilter.value = value
  }

  return { vacancies, filteredVacancies, filters, onFilter }
}
