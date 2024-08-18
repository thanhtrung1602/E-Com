interface ICategories {
    id: number;
    name: string;
    img: string;
}

class Categories implements ICategories {
    id: number;
    name: string;
    img: string;

    constructor(id: number, name: string, img: string) {
        this.id = id;
        this.name = name;
        this.img = img;
    }
}

export default Categories
