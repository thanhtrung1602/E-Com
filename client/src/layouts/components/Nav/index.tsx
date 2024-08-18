/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imageNav1 from "~/assets/images/imageNav1.png";
import imageNav2 from "~/assets/images/imageNav2.png";
import imageNav3 from "~/assets/images/imageNav3.png";
import imageNav4 from "~/assets/images/imageNav4.png";
import imageNav5 from "~/assets/images/imageNav5.png";
import imageNav6 from "~/assets/images/imageNav6.png";
import Categories from "~/models/Categories";

const imageMap: Record<string, string> = {
    imageNav1: imageNav1,
    imageNav2: imageNav2,
    imageNav3: imageNav3,
    imageNav4: imageNav4,
    imageNav5: imageNav5,
    imageNav6: imageNav6,
};

function Nav() {
    const [categories, setCategories] = useState<Categories[]>([])

    useEffect(() => {
        const fecthAPI = () => fetch(`http://localhost:3000/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
        fecthAPI();
    }, [])

    // const { data: categories, error, isLoading } = useGet<Categories[]>(`/categories`);

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error loading categories</div>;

    return (
        <div className="flex justify-between px-[135px] pt-10">
            {categories?.map((category) => (
                <Link to={`/${category.name.toLowerCase()}`} key={category.id}>
                    <div className="bg-[#F4F4F6] flex justify-center items-center gap-x-4 px-4 py-1 rounded">
                        <span className="font-semibold">{category.name}</span>
                        <img src={imageMap[category.img]} alt={category.name} />
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Nav;