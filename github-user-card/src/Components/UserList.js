import React from 'react';
import Card from './Card';
import { Grid } from 'semantic-ui-react';


export default function UserList(props) {
return (<Grid columns={3}>{props.users.map((user, idx)=><Grid.Column key={idx}><Card user={user}/></Grid.Column>)}</Grid>);
}
