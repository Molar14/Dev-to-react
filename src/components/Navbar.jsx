import DevLogo from "../assets/Icons"

function NavBar() {return (<div className="bg-[#FFFFFF] text-black sticky top-0 pl-60 pt-3 pr-60 pb-3 flex flex-row place-content-between gap-0 ">
    <div className="flex flex-row">
    <DevLogo /> 
    <input type="text" placeholder="Search..." className="rounded-md pl-2 pt-3 pr-2 pb-3 border-gray-400 border focus:outline-none focus:border-[#3B49DF] focus:ring-1 focus:ring-[#3B49DF] text-black"/>
    </div>
    <div className="flex flex-row gap-6 items-center" >
        <span className="p-2 border border-transparent hover:border-[#3B49DF] rounded">
            Log in
        </span>
        <span className="border border-[#3B49DF] p-2 hover:bg-[#3B49DF] hover:text-white rounded">
            Create account
        </span>
    </div>
</div>)}
export default NavBar