import jwt from "jsonwebtoken";

export const generateJWT = (uid: any = "", time: string = "10m") => {
  const secret: any = process.env.SECRET_KEY || 'insttantt2023';
  return new Promise((resolve, reject) => {
    const payload = { uid, 
      exp: Math.floor(Date.now() / 1000) + (60 * 10),
    };

    jwt.sign(payload, secret, (err: any, token: any) => {
    // jwt.sign(payload, secret, { expiresIn: time }, (err: any, token: any) => {
      if (err) {
        console.error('token: ', err);  
        reject("No se generó el Token");
      } else {
        resolve(token);
      }
    });
  });
};

export const parseJwt = async (token: any) => {
  const secret: any = process.env.SECRET_KEY || 'insttantt2023';
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err: any, decoded: any) => {
      if (err) {        
        reject("No se generó el Token");
      } else {
        // resolve(decoded.exp * 1000);
        resolve(decoded.exp );
      }
    });
  });
};

export const verifyJwt = async (token: any) => {
  const secret: any = process.env.SECRET_KEY || 'insttantt2023';
  
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err: any, decoded: any) => {
      if (err) {        
        reject("El Token ya expiró");
      } else {
        resolve('Token vigente');
      }
    });
  });
};
