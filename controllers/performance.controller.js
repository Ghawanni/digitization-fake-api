exports.performance = (req, res) => {
  res.status(200).send({
    typeCount: 250,
    timestamp: Date.now()
  })
}

exports.listOfInvoices = (req, res) => {
  res.status(200).send([
    {
      id: '321456',
      date: Date.now(),
      totalCash: 74.12
    },{
      id: '321457',
      date: Date.now(),
      totalCash: 12.20
    },{
      id: '321458',
      date: Date.now(),
      totalCash: 112.04

    },{
      id: '321459',
      date: Date.now(),
      totalCash: 54.85
    },{
      id: '321460',
      date: Date.now(),
      totalCash: 89.54
    }
  ])
}

exports.invoiceDetails = (req, res) => {
  res.status(200).send({
    iban: 'SAXXXXXXXXXXXX',
    dateOfTransaction: Date.now(),
    invoiceDate: Date.now(),
    invoiceValue: 88.54,
    invoiceBreakDown: [{
      date: Date.now,
      charactersCount: 58,
      monetaryValue: 1.32
    },
    {
      date: Date.now,
      charactersCount: 12,
      monetaryValue: 0.58
    },
    {
      date: Date.now,
      charactersCount: 785,
      monetaryValue: 23.50
    }, 
    {
      date: Date.now,
      charactersCount: 8,
      monetaryValue: 0.18
    }]
  })
}