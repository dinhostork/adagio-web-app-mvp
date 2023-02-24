import { useState } from "react";
import { FaRegCompass } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BrowserContainer } from "./Containers";
import { Browser, BrowserIconContainer, Menu, MenuContainer, MenuItem } from "./Topbar";
export default function BrowserComponent() {
  const [open, setOpen] = useState(false);

  return (
    <BrowserContainer>
      <Browser onClick={() => setOpen(!open)} open={open}>
        <BrowserIconContainer rotate={false}>
          <FaRegCompass id="browser-icon" />
        </BrowserIconContainer>
        <span>Explorar</span>
        <BrowserIconContainer rotate={open}>
          <MdOutlineKeyboardArrowDown size={32} />
        </BrowserIconContainer>
      </Browser>

      <MenuContainer open={open}>
        <Menu open={open}>
            <MenuItem>
                Inicio
            </MenuItem>
            <MenuItem>
                Inicio
            </MenuItem>
            <MenuItem>
                Inicio
            </MenuItem>
            <MenuItem>
                Inicio
            </MenuItem>
        </Menu>
      </MenuContainer>
    </BrowserContainer>
  );
}
