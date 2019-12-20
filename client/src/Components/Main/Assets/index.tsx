import React from 'react';
import {BrowserRouter,Route,Switch, Redirect} from 'react-router-dom';
import * as Component from 'Components';
import BulkAudit from './BulkAudit';
import BulkCheckout from './BulkCheckout';
import Deleted from './Deleted';
import Hardware from './Hardware';
import Maintenance from './Maintenance';
import Show from './Show';
import Create from './Create';
import './AssetsStyle.scss';

const Assets = () => {
    return(
        <Route>
            <Route path="/assets/id/:id" component={Show} />
            <Route path="/assets/hardware" component={Hardware} />
            <Route path="/assets/create" component={Create} />

            <Route exact path="/assets/bulk-checkout" component={BulkCheckout} />
            <Route exact path="/assets/deleted" component={Deleted} />
            <Route exact path="/assets/maintenace" component={Maintenance} />
            <Route exact path="/assets/bulk-audit" component={BulkAudit} />

        </Route>
    )
}

export default Assets;