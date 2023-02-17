import PropTypes from "prop-types";
import css from "../ContactList/ContactList.module.css"

export const ContactList = ({ contacts, onContactDelete }) => (
  <ul className={css.list}>
    {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
            <p className={css.marker}></p>
             <p className={css.name}>{name}:</p>
             <p className={css.number}>{number}</p>
        
          <button
            className={css.btn}
            type="button"
            name="delte"
            onClick={() => onContactDelete(id)}
          >
            delete
          </button>
      </li>
    ))}
        </ul>
);

ContactList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onContactDelete: PropTypes.func,
};
