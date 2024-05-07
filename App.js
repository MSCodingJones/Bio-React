import Header from "./components/Header"
import Main from  "./components/Main"
import Footer from "./components/Footer"

const App =()=> {

    const Bio = new Date()

    const theDay = today.getDay() == 1 ? 'Bio' : null


    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default App