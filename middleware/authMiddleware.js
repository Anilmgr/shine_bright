import { UnauthorizedError } from "../errors/customError.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticatedUser = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) throw new UnauthorizedError("Unauthenticated user!");
    try {
        const { userId, email } = verifyJWT(token);
        req.user = { userId, email };
        next();
    } catch (error) {
        throw new UnauthorizedError("Unauthenticated user!");
    }
};
