import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo-white.png';
import { IoHomeOutline } from 'react-icons/io5';
import { BiCategoryAlt } from 'react-icons/bi';
import { GrBlog } from 'react-icons/gr';
import { FaRegComments } from 'react-icons/fa';
import { LuUsers } from 'react-icons/lu';
import { GoDot } from 'react-icons/go';
import { RouteBlog, RouteCategoryDetails } from '@/helpers/RouteName';

const AppSidebar = () => {
  return (
    <Sidebar>
      {/* logo */}
      <SidebarHeader className="bg-white">
        <img src={logo} alt="Logo" width={120} />
      </SidebarHeader>
      {/* Content */}
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarMenu>
            {/* Home  */}
            <SidebarMenuItem>
              <SidebarMenuButton>
                <IoHomeOutline />
                <Link to="">Home</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Category  */}
            <SidebarMenuItem>
              <SidebarMenuButton>
                <BiCategoryAlt />
                <Link to={RouteCategoryDetails}>Categories</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Blog  */}
            <SidebarMenuItem>
              <SidebarMenuButton>
                <GrBlog />
                <Link to={RouteBlog}>Blogs</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Comment  */}
            <SidebarMenuItem>
              <SidebarMenuButton>
                <FaRegComments />
                <Link to="">Comments</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* User  */}
            <SidebarMenuItem>
              <SidebarMenuButton>
                <LuUsers />
                <Link to="">Users</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Categories list */}
        <SidebarGroup>
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <GoDot />
                <Link to="">Category Item</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
