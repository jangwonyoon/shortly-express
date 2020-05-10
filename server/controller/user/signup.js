const { users } = require('../../models');

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 회원가입을 했을 때, 회원정보를 데이터베이스에 저장하도록 구현하세요.
    // 1) 유저의 아이디가 있는지 확인 한다.
    // 2) 유저의 아이디가 없다면 ... 생성한다.
    // 3) 유저의 아이디가 있다면 에러 메세지를 보낸다. 409로 반환 해준다. 타당하지 않은 에러
    // 4) 가입 하면 데이터베이스에 회원 정보를 넣어준다.

    // findOrCreate 함수는 배열로 원하는 데이터와 새로 만들어 졌는 지 아닌 지 boolean으로 반환 해준다.
    users
      .findOrCreate({
        where: {
          email: req.body.email,
        },
        defaults: {
          username: req.body.username,
          password: req.body.password,
        },
      })
      .then(([data, created]) => {
        if (!created) {
          return res.status(409).send('Already exists user');
        }
        return res.status(200).send(data);
      })
      .catch((error) => {
        console.log(error);
        return res.sendStatus(500);
      });
  },
};
