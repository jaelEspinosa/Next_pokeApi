import { Link, Spacer, Text, useTheme } from '@nextui-org/react'
import NextLink from 'next/link'
import Image from 'next/image'




const Navbar = () => {
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
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray100.value


    }}>
        <div>
                <Image 
            alt='icono de la app'
            layout='fixed'
            width={70} height={70} 
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'/>
        </div>
  
        <Link href='/'>
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okémon</Text>
        </Link>
   

<Spacer style={{flex:1}}/>
  <Link href='/favorites'>
    <Text color='white'>Favoritos</Text>
  </Link>



    </div>
  )
}



export default Navbar



