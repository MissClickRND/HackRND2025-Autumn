import { AreaChart } from '@mantine/charts'
import { Flex, Paper, Title } from '@mantine/core'
import { FC } from 'react'

interface IProps {
    title: string,
    data: Record<string, any>[] ,
    dataKey: string,
    series: {name: string, color: string}[]
}

const DashboardLineChartLinear: FC<IProps> = ({title, data, dataKey, series}) => {
  return (
   <Paper shadow="md" radius={12} withBorder p={25} >
    <Flex px={50} py={20} direction={"column"} gap={20} w={"100%"}>
        <Title order={2}>{title}</Title>
        <AreaChart curveType='linear'  data={data} dataKey={dataKey} series={series} tickLine="y" h={300} />
    </Flex>
    </Paper> 
  )
}

export default DashboardLineChartLinear