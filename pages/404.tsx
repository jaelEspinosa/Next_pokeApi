/* eslint-disable react-hooks/rules-of-hooks */
import { Text } from '@nextui-org/react'
import React from 'react'
import { Layout } from '../components/layouts'
import { useRouter } from 'next/router';


const noExistePoke = () => {
const router = useRouter()

setTimeout(() => {
  router.push('/')
}, 3000);
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