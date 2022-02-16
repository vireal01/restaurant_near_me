import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [restaurants, setRestaurants] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          location: 'NY',
          limit: 50
        }
      })
      setErrorMessage('')
      setRestaurants(response.data.businesses)
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  }

  const messageText = errorMessage === '' ?
    `We have found ${restaurants.length} results` :
    errorMessage

  useEffect(() => {
    searchApi('pasta')
  }, [])

  return [searchApi, restaurants, messageText]
}