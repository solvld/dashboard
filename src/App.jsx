import LeftColumn from "./Components/LeftColumn"
import NavBar from "./Components/NavBar"
import RightColumn from "./Components/RightColumn"
import SideBar from "./Components/SideBar"


function App() {

  return (
		<main className='flex'>
			<SideBar />
			<div className='flex flex-col flex-1 relative'>
				<NavBar />

				<div className='grid md:grid-cols-3 grid-cols-1 w-full'>
					<div className="col-span-2">
            <LeftColumn />
          </div>
					<div className="w-full">
            <RightColumn />
          </div>
				</div>
			</div>
		</main>
	)
}

export default App
