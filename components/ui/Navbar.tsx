import { Input, Link, Spacer, Text, useTheme } from '@nextui-org/react'

import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'


const Navbar = () => {
    const router= useRouter()  
    const {theme} = useTheme()
    const [busqueda, setBusqueda] = useState<string>('')
      
  const mostrarPokemon = (e:any)=>{
    e.preventDefault()
    router.push(`/name/${busqueda.toLowerCase()}`)
      
  }  
    
   return (
    <div style={{
        zIndex:'1',
        position: 'fixed',
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        flexWrap:'wrap',
        rowGap:'10px',
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
<form
      onSubmit={mostrarPokemon}
      style={{
        display:'flex'
      }}>
    <Image style={{cursor:'pointer'}} onClick={mostrarPokemon} src='/lupa.png' alt='buscar' height={50} width={50}/>
    <Spacer x={1}/>
    <Input 
    clearable
    size='lg'
    bordered
    color='success'
    labelPlaceholder="Buscar"
    initialValue={busqueda}
    onChange={e=> setBusqueda(e.target.value)}
    
    />
</form>
<Spacer style={{flex:1}}/>
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



