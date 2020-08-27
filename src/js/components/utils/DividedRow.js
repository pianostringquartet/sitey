import React from "react";
import { List, Grid, Header, Card, Icon, Image } from "semantic-ui-react";

// NOT BEING USED; difficult to work in both separate cases
// the 'header' has to come 


// where each item is like: id, url, header, description

const DividedRow = ({ items, header = null }) => (
  <Grid columns={items.length} divided>
    {/* {if (header) header} */}
    <Grid.Row>
      {items.map((item) => (
        <Grid.Column key={item.id}>
          <Header href={item.url} target="_blank">
            {item.header}
            <Header.Subheader>{item.description}</Header.Subheader>
          </Header>
        </Grid.Column>
      ))}
    </Grid.Row>
  </Grid>
);

export default DividedRow