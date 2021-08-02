import Header from "../../common/Header";
import Section from "../../common/Section";
import { Wrapper } from "../../styled";

export default () => (
    <Wrapper>
        <Header title="O autorze" />
        <Section
            title="Paweł Urbanowski"
            body={<>nanan</>}
        />
    </Wrapper>
);