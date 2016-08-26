import superagent from 'superagent';


const config = {
    url : 'http://localhost:3005/api/1/',
    api : [
        'X-Warp-API-Key',
        '60kh1r2bbls04cwscgc401df3lgrpl1s0wogw0g0sk'
    ], 
    contentType : [
        'Content-Type', 'application/json'

    ]
};


class AuthenticationApi {

    static signUp(newUser, cb) {
        
    }

    static login(user, cb, cbOnRegister) {
        
        let login = new Promise((resolve, reject)=> {
                superagent.post(config.url + 'login')
                        .set(...config.api)
                        .set(...config.contentType)
                        .send(user)
                        .end((err, res) => {
                            if(!err) {
                                return resolve(res.body);
                            }

                            return reject(JSON.parse(res.text));
                        });
        });
        
        return login.then((res) => {
            //console.log(res);
            if(res.status >= 200 && res.status < 300) {
                //console.log(res, "======");
                localStorage.token = res.result.session_token;
                localStorage.uid = res.result.user.id;
                //cb(false);
                return true;
            } else {
                //cb(true, res.message); //there is error
                return false;
            }
        });
    }

    static logout(sessionToken) {
        let logout =  new Promise((resolve, reject)=> {
                        superagent
                                .get('http://localhost:3005/api/1/logout')
                                .set({
                                    'X-Warp-API-Key':
                                        '60kh1r2bbls04cwscgc401df3lgrpl1s0wogw0g0sk',
                                                                      
                                    'X-Warp-Session-Token':
                                        `${sessionToken}`
                                })                                
                                .end((err, res) => {
                                    if(!err) {
                                        return resolve(res.body);
                                    }

                                    return reject(JSON.parse(res.text));
                                });

        });
        return logout.then((res) => {

                if(res.status >= 200 && res.status < 400) {
                        let isLoggedIn = false;
                        localStorage.removeItem("uid");
                        localStorage.removeItem("token");
                        return false;
                    } else {
                        let isLoggedIn = true;
                        return true;
                    }
            });

    }

    static getAuth(sessionToken) {
        //console.log(sessionToken);
        let getAuth =  new Promise((resolve, reject) => {
                        superagent.get(config.url + 'users/me')
                                .set(...config.api)
                                .set('X-Warp-Session-Token', sessionToken )
                                .end((err, res) => {
                                    if(!err) {
                                        return resolve(res.body);
                                    }

                                    return reject(JSON.parse(res.text));
                                });
                        });

                    
                return  getAuth.then((res) => {
                        if(res.status >= 200 && res.status < 300) {
                            localStorage.uid = res.result.id;
                            return true;
                        } else {
                            return false;
                        }
                    });
        }
}


export default AuthenticationApi;