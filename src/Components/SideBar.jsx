import React from 'react'
import { ArrowUpIcon, BoltIcon, ChartBarIcon, CreditCardIcon, DocumentTextIcon, EnvelopeIcon, HomeIcon } from '@heroicons/react/16/solid'

function SideBar() {
  return (
		<div className='bg-slate-800 flex-none w-14 sm:w-20 h-screen'>
			<div className='h-20 items-center flex'>
				<HomeIcon className='w-10 text-gray-300 left-3 sm:left-6 fixed' />
			</div>
			<div className='fixed left-3 sm:left-6 top-[100px]'>
				<ChartBarIcon className='w-10 bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 ' />
				<DocumentTextIcon className='w-10 bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 ' />
				<EnvelopeIcon className='w-10 bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 ' />
				<CreditCardIcon className='w-10 bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 ' />
			</div>
			<div className='fixed bottom-4 left-3 sm:left-6'>
				<ArrowUpIcon className='w-10 bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 ' />
				<BoltIcon className='w-10 bg-gray-600 p-2 rounded-lg mb-4 text-gray-300 ' />
			</div>
		</div>
	)
}

export default SideBar


