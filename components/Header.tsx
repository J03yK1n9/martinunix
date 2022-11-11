import Link from "next/link"

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-96">
            <Link href="/">
                <img 
                  className="w-40 object-contain cursor-pointer" 
                  src="/logo.svg" 
                  alt="" 
                />
            </Link>
            <div className="hidden md:inline-flex items-center space-x-5">
              <h3>Home</h3>
              <h3>Articles</h3>
              <h3>About</h3>
            </div>
        </div>
    </header>
    
  )
}

export default Header