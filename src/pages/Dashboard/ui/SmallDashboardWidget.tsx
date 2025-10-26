import { Flex, Paper, Text, Title } from "@mantine/core"
import { FC, ReactNode } from "react"

interface IProps {
    title: string,
    value: string,
    additional: string,
    icon: ReactNode,
}

const SmallDashboardWidget: FC<IProps> = ({title, value, additional, icon}) => {
return (
        <Paper shadow="md" radius={12} p={25} withBorder>
            <Flex justify={"space-between"} direction={"column"}>
                <Flex justify={"space-between"}>
                    <Text size="md">{title}</Text>
                    {icon}
                </Flex>
                <Flex mt={20} direction={"column"}>
                    <Title order={2}>{value}</Title>
                    <Text size="sm">{additional}</Text>
                </Flex>
            </Flex>
        </Paper>
    
  )
}

export default SmallDashboardWidget