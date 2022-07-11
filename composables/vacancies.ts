import { Richtext } from 'storyblok-js-client'

export interface iVanacy {
  department: string
  title: string
  description: Richtext
}

export const useVacancies = (vacanciesList: iVanacy[]) => {
  const vacancies = useState('vacancies', () => vacanciesList)

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
