/* eslint-disable react-hooks/rules-of-hooks */
import { Button, Text } from '@nextui-org/react'
import React from 'react'
import { Layout } from '../components/layouts'
import { useRouter } from 'next/router';


const noExistePoke = () => {
const router = useRouter()


  return (
    <Layout title = {'pokemon no existe'}>
   
   <div style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    }}>
   <Text h1 style={{
      textAlign:'center',
      paddingTop:'350px',
      textTransform:'capitalize'

    }}>Pokemon no encontrado</Text>
    <Button   css={{
                    marginTop:'100px',
    }} 
              onPress={()=>router.push('/')}
              color='gradient'
              ghost
            >volver</Button>
   </div>
   

    </Layout>
  )
}

export default noExistePoke