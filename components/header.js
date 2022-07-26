import Link from 'next/link'
import Image from 'next/image'
import 'bulma/css/bulma.css'

export default function Header() {
  return (
    <nav className="navbar-header" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className='navbar-icon' href="/" >
            <Image className='navbar-image'
            height={69} width={69} src={'https://jpc4aux4c3ufmszw4fedao6gym4nouj7jdxxto6cm7dqxr7h.arweave.net/S8XAUvwW6FZLNuFIMDvGwzj_XUT9I73-m7wmfHC8fn0?ext=jpg'}
            />
        </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href='/blogs'>
              Blogs
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item" href='/blogs'>
                Air Polution
              </a>
              <a className="navbar-item" href='/blogs'>
                Environment
              </a>
              <a className="navbar-item" href='/blogs'>
                Wildlife & Trees
              </a>
              <Link href='https://greentechidea.com' className="navbar-divider">
              <a className="navbar-item">
                Greentechidea.com
              </a>
              </Link>
              <Link href='https://hookq.com' className="navbar-divider">
              <a className="navbar-item">
                HookQ Marketplace
              </a>
              </Link>
              
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Subscribe</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}


