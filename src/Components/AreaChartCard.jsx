import React from 'react'
import { AreaChart, Card, Title } from '@tremor/react'

const chartData = [
	{
		date: 'Jan 22',
		SemiAnalysis: 2890,
		'The Pragmatic Engineer': 2338,
	},
	{
		date: 'Feb 22',
		SemiAnalysis: 2756,
		'The Pragmatic Engineer': 2103,
	},
	{
		date: 'Mar 22',
		SemiAnalysis: 3322,
		'The Pragmatic Engineer': 2194,
	},
	{
		date: 'Apr 22',
		SemiAnalysis: 3470,
		'The Pragmatic Engineer': 2108,
	},
	{
		date: 'May 22',
		SemiAnalysis: 3475,
		'The Pragmatic Engineer': 1812,
	},
	{
		date: 'Jun 22',
		SemiAnalysis: 3129,
		'The Pragmatic Engineer': 1726,
	},
];
const valueFormatter = function (number) {
	return '$ ' + new Intl.NumberFormat('us').format(number).toString()
}

function AreaChartCard() {
  return (
		<Card>
			<Title>Newsletter revenue over time (USD)</Title>
			<AreaChart
				className='h-72 mt-4'
				data={chartData}
				index='date'
				categories={['SemiAnalysis', 'The Pragmatic Engineer']}
				colors={['indigo', 'cyan']}
				valueFormatter={valueFormatter}
			/>
		</Card>
	)
}

export default AreaChartCard