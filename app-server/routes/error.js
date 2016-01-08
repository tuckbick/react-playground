export default function errorRoutes (err, req, res, next) {
  res.status(err.status || 500);
  res.send(`ERROR:\nmessage: ${err.message}\nerror: ${err}`);
}
