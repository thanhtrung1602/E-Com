import { ChildrenType } from "~/types/childrenType";

function LoginLayout({ children }: ChildrenType) {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            {children}
        </div>
    );
}

export default LoginLayout;