import { getEdicionesData } from '@/lib/ediciones'
import EdicionesClient from './EdicionesClient'

export default async function EdicionesPage() {
  const data = await getEdicionesData()
  return <EdicionesClient data={data} />
}