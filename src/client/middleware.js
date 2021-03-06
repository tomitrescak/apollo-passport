export default {
  applyMiddleware(req, next) {
    const token = localStorage.getItem('apToken');

    if (!token)
      return next();

    if (!req.options.headers)
      req.options.headers = new Headers();

    req.options.headers.authorization = `Bearer ${token}`;
    next();
  }
};
