import { ChildrenType } from "~/types/childrenType";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout({ children }: ChildrenType) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default MainLayout;