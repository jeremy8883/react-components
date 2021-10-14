/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* eslint-disable */

import React, { useState, useRef, useEffect, PureComponent } from 'react';
import { Story } from '@storybook/react';
import {
  Dropdown,
  Menu,
  Autocomplete,
  Field,
  Label,
  Item,
} from '@zendeskgarden/react-dropdowns';
import { Col, Row } from '@zendeskgarden/react-grid';
import starWarsNames from 'starwars-names';
import { FixedSizeList as List } from 'react-window';

const options = starWarsNames.all.map(s => ({ name: s, id: s.toLowerCase() }));



const ItemRenderer = React.memo((props: any) => {
  const { items, getItemProps, highlightedIndex, selectedItem } = props.data;
  const item = items[props.index];
  
  return (
    <Item value={item.name} style={props.style}>
      {item.name}
    </Item>
  );
})

export const Virtual: Story<any> = () => {
  const [selectedItem, setSelectedItem] = useState();
  const [matchingOptions, setMatchingOptions] = useState(options);

  const listRef = React.useRef();

  return (
    <Row justifyContent="center" style={{ minHeight: 450 }}>
      <Col md={3}>
        <Dropdown
          downshiftProps={{
            defaultHighlightedIndex: 0,
            itemToString: i => (i ? i.name : ''),
            itemCount: matchingOptions.length
          }}
          onStateChange={changes => {
            console.log(changes.highlightedIndex, '<-- incorrect index when scrolling highlightedIndex');
          }}
        >
          <Field>
            <Label>Choose a vegetable</Label>
            <Autocomplete>
              {selectedItem}
            </Autocomplete>
          </Field>
          <Menu>
            <List
              ref={listRef}
              width={300}
              height={matchingOptions.length < 5 ? matchingOptions.length * 42 : 200}
              itemCount={matchingOptions.length}
              itemSize={42}
              itemData={{
                items: matchingOptions,
                // getItemProps,
                // highlightedIndex,
                selectedItem
              }}
            >
              {ItemRenderer}
            </List>
          </Menu>
        </Dropdown>
      </Col>
    </Row>
  );
};
