import jwt from 'jsonwebtoken';

const JWT_SECTRET = process.env.JWT_SECRET || 'elsecreto';
const EXPIRES_IN = process.env.EXPIRES_IN || '7d';

export function singJwt(payload: | Buffer | object){
    return jwt.sign(payload, JWT_SECTRET, {
        expiresIn: EXPIRES_IN
    });
}

export function verifyJwt(token: string) {
    try{
        const decoded = jwt.verify(token, JWT_SECTRET);
        return decoded;
    }catch(error){
        return null;
    }
}