import React from 'react'
import AddResumePage from './components/AddResume'

function DashboardPage() {
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h1 className='font-bold text-3xl'>My resume</h1>
      <p>Unlock Opportunities with AI-Crafted Resumes</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8 '>
        <AddResumePage/>
      </div>
    </div>
  )
}

export default DashboardPage
