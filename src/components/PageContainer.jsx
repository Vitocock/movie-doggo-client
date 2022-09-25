import Nav from "./Nav"
import SideBar from "./SideBar"
import Footer from "./Footer"

const PageContainer = ({ children }) => {
  return (
    <>
    <Nav />
    <SideBar />
    <main>
      {children}
    </main>
    <Footer />    
    </>
  )
}

export default PageContainer