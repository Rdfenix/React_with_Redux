const express = require('express');

module.exports = function(server) {
    //definir url base
    const router = express.Router();
    server.use('/api', router);

    //mapear ciclo de pagamentos
    const BillingCycle = require('../api/billingCycle/billingCycleService');
    BillingCycle.register(router, '/billingCycles');
}