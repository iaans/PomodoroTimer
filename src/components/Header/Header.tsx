import { HeaderButtons, HeaderContainer } from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <h1 className="title">Pomofocus</h1>
      <div className="group-button-header">
        <HeaderButtons>Report</HeaderButtons>
        <HeaderButtons>Settings</HeaderButtons>
        <HeaderButtons>Login</HeaderButtons>
      </div>
    </HeaderContainer>
  );
};

export default Header;
