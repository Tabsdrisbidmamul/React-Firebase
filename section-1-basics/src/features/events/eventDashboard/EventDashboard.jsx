import React from 'react';
import { Grid } from 'semantic-ui-react';

export default function EventDashboard(props) {
  return (
    <Grid>
      <Grid.Column width={10}>Left Column</Grid.Column>

      <Grid.Column width={6}>Right Column</Grid.Column>
    </Grid>
  );
}
