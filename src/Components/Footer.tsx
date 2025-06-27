import React from 'react'

function Footer() {
  return (
    <footer className='footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4'>
        <aside>
            <p>Copyright &copy; {new Date().getFullYear()} - All rights reserved by the agency</p>
        </aside>
    </footer>
  )
}

export default Footer