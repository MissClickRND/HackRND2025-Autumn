import { Center, Flex, Typography } from '@mantine/core'
import { IconUser } from '@tabler/icons-react'
import { motion } from 'motion/react'
import { navButtonTitleVar } from '../../../layouts/MainLayout/components/animations'
import { useMeStore } from '../model/meStore'

const Avatar = () => {
    const {userName, userEmail} = useMeStore()
  return (
    <Flex align={'center'}>

        <Center w={50} h={50}>
        <IconUser size={30} color='black' />
        </Center>

        <Center
            component={ motion.div }
            variants={navButtonTitleVar}
            style={{
                position: "absolute",
                left: 80,
                borderRadius: ".5rem",
                pointerEvents: "none",
                zIndex: 100
            }}
            py={7}
            px={14}
            bg={"var(--navbar-button-color)"}
        >
            <Flex direction={"column"} gap={".1rem"}>
                <Typography>{userName}</Typography>
                <Typography>{userEmail}</Typography>
            </Flex>

        </Center>

    </Flex>
  )
}

export default Avatar