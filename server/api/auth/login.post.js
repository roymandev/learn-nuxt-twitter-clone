import { getUserByUsername } from "../../db/users";
import bcyrpt from "bcrypt";
import { generateTokens, sendRefreshToken } from "../../utils/jwt";
import { createRefreshToken } from "../../db/refreshToken";
import { userTransformer } from "../../transformers/user";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid params" })
    );
  }

  // Is user registered
  const user = await getUserByUsername(username);
  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Username or Password invalid",
      })
    );
  }

  // Validate Password
  const isPasswordMatch = await bcyrpt.compare(password, user.password);
  if (!isPasswordMatch) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Username or Password invalid",
      })
    );
  }

  // Generate Tokens
  // Access Token
  // Refresh Token
  const { accessToken, refreshToken } = generateTokens(user);

  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  });

  // Add http only cookie
  sendRefreshToken(event, refreshToken);

  return {
    access_token: accessToken,
    user: userTransformer(user),
  };
});
