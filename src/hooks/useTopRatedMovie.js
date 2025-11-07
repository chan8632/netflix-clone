import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { api } from '../utils/api'

export const useTopRatedMovie = useQuery({
    queryKey:['top']
})


