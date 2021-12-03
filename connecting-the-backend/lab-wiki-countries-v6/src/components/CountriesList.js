import { NavLink } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {props.countries.map((currentCountryObj) => (
          <NavLink
            className={(activeProps) =>
              `list-group-item list-group-item-action ${activeProps.isActive ? 'active' : ''
              }`
            }
            to={`/${currentCountryObj.cca3}`}
          >
            <img
              className="me-2"
              src={`https://flagcdn.com/28x21/${currentCountryObj.cca2.toLowerCase()}.png`}
              alt={`Flag of ${currentCountryObj.name.common}`}
            />
            {currentCountryObj.name.common}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
