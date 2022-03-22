import { Container } from "./style";
import {
    SubmitButton, 
    InputLink, 
    InputText, 
    FormInputs, 
    TitleForm, 
    PublishForm, 
    UserProfile
} from '../../components/PublishPost';

export default function Timeline() {
  return (
    <Container>
      <PublishForm>
        <UserProfile>

        </UserProfile>
        <FormInputs>
          <TitleForm>What are you going to share today?</TitleForm>
          <InputLink placeholder="http://..."></InputLink>
          <InputText placeholder="Awesome article about #javascript"></InputText>
          <SubmitButton>Publish</SubmitButton>
        </FormInputs>
      </PublishForm>
    </Container>
  );
}