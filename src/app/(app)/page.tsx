import { getHomeSesionSlides } from '@/lib/sesionSlides'
import HomeClient from './HomeClient'

export default async function Home() {
  const homeSlides = await getHomeSesionSlides()
  return <HomeClient homeSlides={homeSlides} />
}
