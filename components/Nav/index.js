
import CheckboxWithLabel from '../CheckboxWithLabel';
import SwitchWithLabel from '../SwitchWithLabel';

const githubLink = {
  label: 'GitHub',
  href: 'https://github.com/alexander-dev-hub/react-next-motion',
};

const Nav = ({ manualEnabled, enableManualAnimation, toggleAnimation }) => {
  return (
    <nav>
      <ul>
        <li>
          <SwitchWithLabel 
            defaultChecked
            label='Animation On/Off'
            disabled={!manualEnabled}
            onChange={toggleAnimation} />
          <CheckboxWithLabel
            label='Enable Manual Animation'
            toggle={enableManualAnimation} />
        </li>
        <li><a href={githubLink.href}>{githubLink.label}</a></li>
      </ul>
      <style jsx>{`
        :global(body) {
          margin: 0;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          font-size: 14px;
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
