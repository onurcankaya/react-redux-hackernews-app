import axios from 'axios'

const HN_BASE_URL = 'https://hn.algolia.com/api/v1/search?query='

export const fetchStories = (query) => axios(`${HN_BASE_URL}${query}`)
