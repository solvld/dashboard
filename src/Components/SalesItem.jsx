import { Card, Flex, Tab, TabGroup, TabList, Title, Text, Metric, Divider, Bold, DonutChart } from '@tremor/react'
import { ChartPieIcon, ListBulletIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

const cities = [
	{
		name: 'New York',
		sales: 9800,
	},
	{
		name: 'London',
		sales: 4567,
	},
	{
		name: 'Hong Kong',
		sales: 3908,
	},
	{
		name: 'San Francisco',
		sales: 2400,
	},
	{
		name: 'Singapore',
		sales: 1908,
	},
	{
		name: 'Zurich',
		sales: 1398,
	},
];

const valueFormatter = number =>
	`$ ${new Intl.NumberFormat('us').format(number).toString()}`

function SalesItem() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
		<Card className='max-w-full mx-auto'>
			<Flex className='space-x-8 flex-col lg:flex-row'>
				<Title>Overview</Title>
				<TabGroup index={selectedIndex} onChange={setSelectedIndex}>
					<TabList variant='solid'>
						<Tab icon={ChartPieIcon}>Chart</Tab>
						<Tab icon={ListBulletIcon}>List</Tab>
					</TabList>
				</TabGroup>
			</Flex>
			<Text className='mt-8'>Portfolio Value</Text>
			<Metric>$ 13, 382</Metric>
			<Divider />
			<Text className='mt-8'>
				<Bold>Asset Allocation</Bold>
			</Text>
      <Text>1 Asset</Text>
			{selectedIndex === 0 ? (
				<DonutChart
					className='mt-6'
					data={cities}
					category='sales'
					index='name'
					valueFormatter={valueFormatter}
				/>
			) : (
				<>
          <Flex className='mt-8 justify-between'></Flex>
        </>
			)}
		</Card>
	)
}

export default SalesItem
