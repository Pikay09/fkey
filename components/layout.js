import Footer from '../components/footer'
import Meta from '../components/meta'
import Header from './header'

export default function Layout({ children }) {
  return (
    <>
    <Header/>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
