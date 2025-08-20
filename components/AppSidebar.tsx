import { Users, LayoutGrid, CalendarDays, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import Link from "next/link";

const navItems = [
  {
    title: "Employees",
<<<<<<< HEAD
    url: "/Employee",
=======
    url: "/employees",
>>>>>>> parent of ec6dbfe (Updates on the UI)
    icon: Users,
  },
  {
    title: "Sections",
    url: "/Sections",
    icon: LayoutGrid,
  },
  {
    title: "Schedule",
    url: "/Schedule",
    icon: CalendarDays,
  },
  {
    title: "Settings",
<<<<<<< HEAD
    url: "/Settings",
    icon: Settings,
  },
];
import { logo } from "*.png"; // Adjust the path as necessary
=======
    url: "/settings",
    icon: Settings,
  },
];
import { logo } from "../public/logo.png"; // Adjust the path as necessary
>>>>>>> parent of ec6dbfe (Updates on the UI)
import Image from "next/image";

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader> 
        <SidebarMenu> 
            <SidebarMenuItem> 
                <SidebarMenuButton asChild> 
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.png" alt="Logo" width={50} height={50} />
                        <span className="text-sm font-semibold">Lapasha Management</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="flex items-center gap-2">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter >
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
