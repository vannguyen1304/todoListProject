const middleware = {
  validateEmty: (req, res, next) => {
    if (req.body.todo) {
      next();
    } else {
      res.json({ errorMessage: "input is empty" });
    }
  },
  validateLength: (req, res, next) => {
    const length = req.body.todo.length;
    if (req.body.todo && length > 5 && length < 10) {
      next();
    } else {
      res.json({ errorMessage: "Length error" });
    }
  },
  validateSpecialsCharater: (req, res, next) => {
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(req.body.todo)) {
      res.json({ errorMessage: "input contains special characters " });
    } else {
      next();
    }
  },
};
module.exports = middleware;
