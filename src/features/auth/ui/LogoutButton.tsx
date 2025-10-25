import { ActionIcon } from "@mantine/core"
import { useLogout } from "../model/lib/hooks/useLogout"
import { IconLogout } from "@tabler/icons-react"

const LogoutButton = () => {
    const {logout, isLoading} = useLogout()
    const onClick = () => {
        logout()
    }
  return (
    <ActionIcon size={50} color="var(--main-color-orange)" style={{justifySelf: "end"}} onClick={onClick} loading={isLoading}>
        <IconLogout/>
    </ActionIcon>
  )
}

export default LogoutButton