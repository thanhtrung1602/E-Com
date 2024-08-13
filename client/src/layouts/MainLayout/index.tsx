import { ChildrenType } from "~/types/childrenType";

function MainLayout({ children }: ChildrenType) {
    return (
        <>
            {children}
        </>
    );
}

export default MainLayout;