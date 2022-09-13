import { Text } from '@nextui-org/react'
import React from 'react'
import { Layout } from '../components/layouts'


const noExistePoke = () => {
 
  return (
    <Layout title = {'pokemon no existe'}>
    <Text h1 style={{
      textAlign:'center',
      paddingTop:'350px',
      textTransform:'capitalize'

    }}>Pokemon no encontrado</Text>

    </Layout>
  )
}

export default noExistePoke