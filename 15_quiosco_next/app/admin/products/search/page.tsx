import Heading from "@/components/ui/Heading"

export default async function SearchPage({ searchParams }: { searchParams: { search: string } }) {

  console.log(searchParams.search)

  return (
    <>
      <Heading>Resultados de búsqueda: {searchParams.search}</Heading>
    </>
  )
}