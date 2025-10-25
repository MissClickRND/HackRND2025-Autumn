import { ActionIcon, Center, Flex, Typography } from '@mantine/core'
import { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import {motion} from 'motion/react'
import { navButtonTitleVar } from '../../../layouts/MainLayout/components/animations'

interface IProps {
    to: string,
    title: string, 
    icon: ReactNode,
}

const NavButton: FC<IProps> = ({to, title, icon}) => {
  return (
    <Flex align={"center"}>
        <NavLink style={{color: "black"}} to={to}><ActionIcon color='var(--navbar-button-color)' size={50} >{icon}</ActionIcon></NavLink>
        <Center variants={navButtonTitleVar} component={motion.div} style={{position: "absolute", left: 80, borderRadius: ".5rem", pointerEvents: 'none'}} py={7} px={14} bg='var(--navbar-button-color)'><Typography>{title}</Typography></Center>
    </Flex>
  )
}

export default NavButton