
export default function Tabs({ children, buttons, buttonContainer }) {
  const ButtonContainer = buttonContainer
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
