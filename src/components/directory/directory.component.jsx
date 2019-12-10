import React from 'react';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

const SECTIONS = [
  {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    id: 1,
    linkUrl: 'hats',
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    id: 2,
    linkUrl: 'jackets',
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    id: 3,
    linkUrl: 'sneakers',
  },
  {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large',
    id: 4,
    linkUrl: 'womens',
  },
  {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    size: 'large',
    id: 5,
    linkUrl: 'mens',
  },
];

class Directory extends React.Component {
  state = {
    sections: SECTIONS,
  };

  render() {
    const itearteSections = this.state.sections;
    return (
      <div className="directory-menu">
        {itearteSections.map(({ id, ...remaningSectionProps }) => (
          <MenuItem key={id} {...remaningSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
