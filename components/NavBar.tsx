import Link from "next/link";
import { ModeToggle } from "./custom-ui/ModeToggle";
import { AvatarDropDown } from "./custom-ui/AvatarDropDown";
import { SidebarTrigger } from "./ui/sidebar";

export default function NavBar() {
    return (
        <nav className="p-4 flex items-center justify-between">
            {/* LEFT */}
            <SidebarTrigger/>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
                <Link href="/">DashBoard</Link>
                <ModeToggle />
                <AvatarDropDown />
            </div>
        </nav>
    )
}