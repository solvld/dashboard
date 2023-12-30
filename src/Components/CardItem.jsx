import React from 'react'
import { BadgeDelta, Card, Flex, Metric, Text } from '@tremor/react'

function CardItem({children}) {
  return (
		<Card className='w-xs' decorationColor='indigo'>
      <Flex justifyContent='between' alignItems='center'>
			  <Text>Sales</Text>
        <BadgeDelta deltaType='moderateIncrease'>{`+${Math.floor((children - 128)/10)}%`}</BadgeDelta>
      </Flex>
			<Metric>{`$${children}`}</Metric>
		</Card>
	)
}

export default CardItem