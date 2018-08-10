export default {
  options: {
    formatting: false,
    monthYear: 'mês/ano',
    validDate: 'válido\naté',
    cardTypes: [
      'amex',
      'dankort',
      'dinersclub',
      'discover',
      'jcb',
      'laser',
      'maestro',
      'mastercard',
      'unionpay',
      'visa',
      'visaelectron',
      'elo'
    ],
    inputTypes: [
      'number',
      'name',
      'expiry',
      'cvc'
    ],
    placeholders: {
      number: '•••• •••• •••• ••••',
      cvc: '•••',
      expiry: '••/••',
      name: 'Nome'
    }
  },
  classDisplay: {
    'jp-card-focused': false,
    'jp-card-valid': false,
    'jp-card-invalid': false
  },
  emptyCreditCardData: {
    number: '',
    name: '',
    expiry: '',
    cvc: ''
  }
}
