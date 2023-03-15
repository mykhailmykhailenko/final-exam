const UserNotFoundError = require('../errors/UserNotFoundError');
const UncorrectPassword = require('../errors/UncorrectPassword');
const TokenError = require('../errors/TokenError');
const ServerError = require('../errors/ServerError');
const RightsError = require('../errors/RightsError');
const NotUniqueEmail = require('../errors/NotUniqueEmail');
const NotEnoughMoney = require('../errors/NotEnoughMoney');
const DevAlreadyExistError = require('../errors/DevAlreadyExistError');
const BankDeclineError = require('../errors/BankDeclineError');
const BadRequestError = require('../errors/BadRequestError');
const ApplicationError = require('../errors/ApplicationError');


module.exports = async (err, req, res, next) => {
  if (err instanceof UserNotFoundError) {
    return res.status(404).send({error: err.message});
  }
  if (err instanceof UncorrectPassword) {
    return res.status(406).send({error: err.message});
  }
  if (err instanceof TokenError) {
    return res.status(408).send({error: err.message});
  }
  if (err instanceof ServerError) {
    return res.status(500).send({error: err.message});
  }
  if (err instanceof RightsError) {
    return res.status(423).send({error: err.message});
  }
  if (err instanceof NotUniqueEmail) {
    return res.status(409).send({error: err.message});
  }
  if (err instanceof NotEnoughMoney) {
    return res.status(417).send({error: err.message});
  }
  if (err instanceof DevAlreadyExistError) {
    return res.status(406).send({error: err.message});
  }
  if (err instanceof BankDeclineError) {
    return res.status(403).send({error: err.message});
  }
  if (err instanceof BadRequestError) {
    return res.status(400).send({error: err.message});
  }
  if (err instanceof ApplicationError) {
    return res.status(500).send({error: err.message});
  }
  if (err.message ===
    'new row for relation "Banks" violates check constraint "Banks_balance_ck"' ||
    err.message ===
    'new row for relation "Users" violates check constraint "Users_balance_ck"') {
    err.message = 'Not Enough money';
    err.code = 406;
  }
  if (!err.message || !err.code) {
    res.status(500).send('Server Error');
  } else {
    res.status(err.code).send(err.message);
  }
};
