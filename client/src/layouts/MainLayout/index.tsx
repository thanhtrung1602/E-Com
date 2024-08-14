import { ChildrenType } from "~/types/childrenType";
import Header from "../components/Header";

function MainLayout({ children }: ChildrenType) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export default MainLayout;