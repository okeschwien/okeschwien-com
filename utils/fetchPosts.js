import { createClient } from 'contentful'

const CONTENTFUL_SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const CONTENTFUL_ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const fetchEntries = async () => {
  const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  })

  try {
    const { items } = await client.getEntries()

    if (!items) {
      throw new Error(`Error getting Entries for ${contentType.name}.`)
    }

    return items
  } catch (error) {
    console.log(error)
  }
}

export default fetchEntries
