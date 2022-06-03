import { DarkMode } from "@mui/icons-material";
import { Switch, Theme } from "@mui/material";
import { darkTheme } from "../../themes/darkTheme";
import { theme } from "../../themes/theme";
import { HeaderContainer, Logo, StyledBox } from "./Header.style";

interface HeaderProps {
  mode: Theme;
  setMode: (mode: Theme) => void;
}

export function Header({mode, setMode}: HeaderProps) {
  return (
    <HeaderContainer>
      <Logo src="/images/logo.svg" alt="Adote um Pet" />
      <StyledBox>
        <DarkMode />
        <Switch onChange={() => setMode(mode === theme ? darkTheme : theme)} />
      </StyledBox>
    </HeaderContainer>
  );
}