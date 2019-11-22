import React from 'react';
import {BrowserRouter,Route,Switch, Redirect} from 'react-router-dom';
import * as Component from 'Components';
import AuditDue from './AuditDue';
import AuditOverdue from './AuditOverdue';
import BulkAudit from './BulkAudit';
import BulkCheckout from './BulkCheckout';
import Deleted from './Deleted';
import ListAll from './ListAll';
import Maintenance from './Maintenance';
import Requested from './Requested';

const Assets = () => {
    return(
        <Route>
            <Route exact path="/assets/" component={ListAll} />
            <Route exact path="/assets/bulk-checkout" component={BulkCheckout} />
            <Route exact path="/assets/requested" component={Requested} />
            <Route exact path="/assets/deleted" component={Deleted} />
            <Route exact path="/assets/audit-due" component={AuditDue} />
            <Route exact path="/assets/audit-overdue" component={AuditOverdue} />
            <Route exact path="/assets/maintenace" component={Maintenance} />
            <Route exact path="/assets/bulk-audit" component={BulkAudit} />
            
            <Route exact path="/assets/*/*" component={Component.NotFound}/>
        </Route>
    )
}

export default Assets;