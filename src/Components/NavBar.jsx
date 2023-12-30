import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { TextInput } from '@tremor/react'
import React from 'react'

function NavBar() {
  return (
		<nav className="relative w-full sm:flex justify-between items-center p-2">
			<h1 className="font-bold text-gray-300">Dashboard</h1>
			<div className="py-2">
				<TextInput icon={MagnifyingGlassIcon} placeholder='Search...' />
			</div>
		</nav>
	)
}

export default NavBar