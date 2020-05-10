const { users } = require('../../models');

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 로그인을 했을 때, 회원정보를 데이터베이스에서 확인하고, 회원의 id를 session에 담아주도록 구현하세요.
    // 1) 유저의 로그인을 확인 한다.
    // 2) 유저의 패스워드는 암호화 되어 있어야 한다.
    // 3) 유저가 로그인을 실패 했을 경우 409로 에러를 보낸다.
    // 4) 유저의 회원정보를 데이터베이스에서 확인한다.
    // 5) 회원의 id 를 session에 담아준다.

    res.end();
  },
};
