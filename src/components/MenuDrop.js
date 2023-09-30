import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";

function MenuDrop() {
  return (
    <>
      <Menu>
            
        <MenuButton variant="ghost" _hover={{opacity: 1}} as={Button}>
          <IconButton
            variant="ghost"
            aria-label="See menu"
            icon={<BiDotsVerticalRounded />}
          />
        </MenuButton>
        <MenuList>
          <MenuItem>Edit</MenuItem>
          <MenuItem>Delete</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default MenuDrop;
