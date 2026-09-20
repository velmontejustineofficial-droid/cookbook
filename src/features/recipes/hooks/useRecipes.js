import { useEffect, useState } from 'react'
import { recipeService } from '../services/recipeService.js'

export default function useRecipes() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isActive = true

    recipeService.fetchAll()
      .then((loadedRecipes) => {
        if (isActive) setRecipes([...loadedRecipes])
      })
      .catch(() => {
        if (isActive) {
          setRecipes([])
        }
      })
      .finally(() => {
        if (isActive) setLoading(false)
      })

    return () => { isActive = false }
  }, [])

  return { recipes, loading }
}