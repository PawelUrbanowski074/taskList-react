import Header from "../../common/Header";
import Section from "../../common/Section";
import { Wrapper } from "../../styled";
import { Paragraph, Link } from "./styled";

const AuthorPage = () => (
    <Wrapper>
        <Header title="O autorze" />
        <Section
            title="Paweł Urbanowski - kilka słów o mnie..."
            body={<>
                <Paragraph>
                Absolwent <strong>informatyki</strong>, obecny uczestnik kursu Front-end developera na platformie <strong>Youcode</strong>. Szukam pomysłu na przyszłość, stąd próba sił w tworzeniu stron internetowych.
                </Paragraph>
                <Paragraph>
                Poza nauką, gitarzysta basowy oraz fan siatkówki. W czasie wolnym lubię gotować, oglądać seriale oraz jeździć na rolkach.
                <br/>
                </Paragraph>
                <Paragraph>
                Jeśli chcesz spojrzeć na inne moje projekty, zapraszam Cię <Link target="_blank" href="https://github.com/palel">tutaj</Link>. 
                </Paragraph>
            </>}
        />
    </Wrapper>
);

export default AuthorPage;