import { Flex, Grid, Text, Title } from '@mantine/core'
import SmallDashboardWidget from './SmallDashboardWidget'
import { IconCurrencyDollar, IconFolders, IconTrendingUp, IconUsers } from '@tabler/icons-react'
import DashboardBarChart from './DashboardBarChart'
import DashboardLineChart from './DashboardLineChart'
import DashboardLineChartLinear from './DashboardLineChartLinear'

const barChartData = [
    {
        month: "2024-01",
        up: 14000000,
        down: 7000000,
    },
    {
        month: "2024-02",
        up: 7000000,
        down: 4000000,
    },
    {
        month: "2024-03",
        up: 25000000,
        down: 14000000,
    }
]

const firstRow = [
    {
        title: "Всего проектов",
        value: "3",
        additional: "Активных: 1",
        icon: <IconFolders/>
    },
    {
        title: "Общая выручка",
        value: "48 000 000",
        additional: "По всем проектам",
        icon: <IconCurrencyDollar/>
    },
    {
        title: "Общие затраты",
        value: "27 700 000 ₽",
        additional: "По всем проектам",
        icon: <IconTrendingUp/>
    },
    {
        title: "Прибыль",
        value: "20 300 000 ",
        additional: "Маржа: 42.3%",
        icon: <IconUsers/>
    },
]

const Dashboard = () => {
  return (
    <Flex px={50} py={20} direction={"column"} gap={20} w={"100%"}>
        <Title order={1} style={{fontWeight: "bold"}}>Дашборд</Title>
        <Grid style={{gap: "200px"}} gutter={50} w={"100%"}>
            {firstRow.map((item) => (
            <Grid.Col span={3}><SmallDashboardWidget {...item} /></Grid.Col>
            ))}
        </Grid>
        <Grid gutter={50}>
            <Grid.Col span={6}>
                <DashboardBarChart title="Выручка и затраты по проектам" data={barChartData} series={[{name: "up", color: "violet.6"}, {name: "down", color: 'orange.6'}]} dataKey='month'  />
            </Grid.Col>
            <Grid.Col span={6}>
                <DashboardLineChart dataKey='month' title='Динамика выручки и затрат' data={barChartData} series={[{name: "up", color: "violet.6"}, {name: "down", color: 'orange.6'}]} />
            </Grid.Col>
            <Grid.Col span={12}>
                <DashboardLineChartLinear dataKey='month' title="Динамика выручки и затрат" data={barChartData} series={[{name: "up", color: "violet.6"}, {name: 'down', color: "orange.6"}]} />
            </Grid.Col>
        </Grid>
    </Flex>
  )
}

export default Dashboard