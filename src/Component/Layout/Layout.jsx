import React from 'react'
import Header from '../HeaderSection/Header'

export default function Layout({children}) {
  return (
    <div>
        <Header />
        <main>
            {children}
        </main>
      
    </div>
  )
}
