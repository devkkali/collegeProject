export const TokenSplitUtils = async (
  authorizationHeader: string | undefined
): Promise<{ bearer: string | undefined; token: string | undefined }> => {
  const result: { bearer: string | undefined; token: string | undefined } = {
    bearer: undefined,
    token: undefined,
  };

  if (authorizationHeader) {
    const [bearer, ...tokenParts] = authorizationHeader.split(" ");

    result.bearer = bearer;
    result.token = tokenParts.join(" ");
  }

  return result;
};
