import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

const MenuBar = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          position="right"
          name="login"
          active={activeItem === 'login'}
          onClick={handleItemClick}
        />
        <Menu.Menu>
          <Menu.Item
            name="register"
            active={activeItem === 'register'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default MenuBar;
