import React, { Component } from 'react';

import PublicNavigation from '../../src';
import ItemsBox from './ItemsBox';

class PublicNavigationDocs extends Component {
  constructor(props) {
    super(props);

    const defaultItems = [{}, {}, {}];

    this.state = {
      items: defaultItems,
      isItemsJSONValid: true,
      itemsJSON: createJSON(defaultItems),
    };

    this.updateItems = this.updateItems.bind(this);
  }

  updateItems(event) {
    const str = event.target.value;

    try {
      const items = JSON.parse(str);
      this.setState({
        isItemsJSONValid: true,
        items,
      });
    } catch (e) {
      this.setState({
        isItemsJSONValid: false,
      });
    } finally {
      this.setState({
        itemsJSON: createJSON(str),
      });
    }
  }

  render() {
    return (
      <section className="m-t-3">
        <PublicNavigation items={this.state.items} />
        <ItemsBox
          itemsJSON={this.state.itemsJSON}
          onChange={this.updateItems}
          isValid={this.state.isItemsJSONValid}
        />
      </section>
    );
  }
}

function createJSON(obj) {
  return JSON.stringify(obj, 'utf-8', 2);
}

export default PublicNavigationDocs;
