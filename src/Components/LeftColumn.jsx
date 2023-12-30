import React from 'react'
import CardItem from './CardItem'

function LeftColumn() {
  return (
		<div className='w-full flex flex-col justify-between p-2'>
			<div className='flex flex-col lg:flex-row gap-2 w-full'>
				<CardItem>158</CardItem>
				<CardItem>185</CardItem>
				<CardItem>999</CardItem>
			</div>
		</div>
	)
}

export default LeftColumn