import { CdsButton } from "@circutor/react-ui";

export default function Home() {
  
  return (
    <CdsButton
      type="submit"
      buttonType="primary"
      icon="delete"
      iconPosition="right"
      loading
    >
      Button label
    </CdsButton>
  );
}

