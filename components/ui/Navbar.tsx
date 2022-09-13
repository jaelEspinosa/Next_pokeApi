import { Input, Link, Spacer, Text, useTheme } from '@nextui-org/react'

import Image from 'next/image'
import { useRouter } from 'next/router'





const Navbar = () => {
    const router= useRouter()  
    const {theme} = useTheme()
    
       
  
   return (
    <div style={{
        zIndex:'1',
        position: 'fixed',
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'start',
        padding: '0px 1px',
        backgroundColor: theme?.colors.gray100.value


    }}>
        <div>
           <Image 
            alt='icono de la app'
            layout='fixed'
            width={50} height={50} 
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'/>
        </div>
  
        <Link href='/'>
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okémon</Text>
        </Link>
<Spacer style={{flex:1}}/>


<Spacer style={{flex:2}}/>
  <Link href='/favorites'>
    <Text color='white' 
          css={{
            paddingRight:'25px'
          }}>Favoritos</Text>
  </Link>



    </div>
  )
}



export default Navbar



