import { ChildrenType } from "~/types/childrenType";
import Header from "../components/Header";
<<<<<<< HEAD
=======
import Footer from "../components/Footer";
>>>>>>> 35ff99103815c6904dee799e16528bd253b8e9ce

function MainLayout({ children }: ChildrenType) {
    return (
        <>
            <Header />
            {children}
<<<<<<< HEAD
=======
            <Footer />
>>>>>>> 35ff99103815c6904dee799e16528bd253b8e9ce
        </>
    );
}

export default MainLayout;