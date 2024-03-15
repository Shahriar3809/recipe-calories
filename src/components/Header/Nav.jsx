

const Nav = () => {
    return (
        <div className="flex justify-between items-center  py-6">
            <div>
                <h1 className="text-3xl font-bold">Recipe Calories</h1>
            </div>
            <div>
                <ul className="flex gap-5 text-base cursor-pointer">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>
            <div className="flex gap-3">
                <input className="p-2 px-3 rounded-full bg-slate-200" type="text" placeholder="Search" />
                <button>icon</button>
            </div>
        </div>
    );
};

export default Nav;