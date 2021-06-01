import "./style.css";

const FieldsetWithButtons = ({ title, body }) => (
  <fieldset className="fieldset fieldset--buttons">
    <h2 className="fieldset__header">{title}</h2>
    {body}
  </fieldset>
);

export default FieldsetWithButtons;