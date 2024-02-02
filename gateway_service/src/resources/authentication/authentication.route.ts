import { Router } from "express";
import { AuthenticationController, AuthenticationServices, AuthenticationValidation } from "./index.js";
import { validateRequest } from "zod-express-middleware";

export namespace AuthenticationRoute {
  export const Index = Router();

  /**
 * @openapi
 * '/heartcheck':
 *   get:
 *     tags:
 *       - Heart Check
 *     summary: Check if server is running
 *     responses:
 *       200:
 *         description: OK
 */

  /**
   * @openapi
   * '/resources/authentication/signup':
   *  post:
   *     tags:
   *     - Auth Controller
   *     summary: Create a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *            type: object
   *            required:
   *              - username
   *              - first_name
   *              - last_name
   *              - dob
   *              - gender
   *              - email
   *              - password
   *              - cnf_password
   *            properties:
   *              username:
   *                type: string
   *                default: jordan 
   *              first_name:
   *                type: string
   *                default: Jordan
   *              last_name:
   *                type: string
   *                default: Dsouza
   *              dob:
   *                type: string
   *                default: '22/01/2024'
   *              gender:
   *                type: string
   *                default: 'male'
   *              email:
   *                type: string
   *                default: jordandsouza1999@gmail.com
   *              password:
   *                type: string
   *                default: testpass
   *              cnf_password:
   *                type: string
   *                default: testpass
   *     responses:
   *      201:
   *        description: Created
   *      409:
   *        description: Conflict
   *      404:
   *        description: Not Found
   *      500:
   *        description: Server Error
   */
  Index.post("/authentication/signup", [
    validateRequest(AuthenticationValidation.SignUp),
    AuthenticationController.SignUp,
  ]);



  /**
 * @openapi
 * '/resources/authentication/signin':
 *   post:
 *     tags:
 *       - Auth Controller
 *     summary: Sign in a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - uid
 *               - password
 *             properties:
 *               uid:
 *                 type: string
 *                 default: johndoe
 *               password:
 *                 type: string
 *                 default: johnDoe20!@
 *     responses:
 *       200:
 *         description: OK
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not Found
 *       500:
 *         description: Server Error
  */
 Index.post("/authentication/signin", [
   validateRequest(AuthenticationValidation.SignIn),
   AuthenticationController.SignIn
  ]);
  /**
   * @openapi
   * '/resources/authentication/googlesignin':
   *   post:
   *     tags:
   *       - Auth Controller
   *     summary: Sign in a user
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - gtoken
   *             properties:
   *               gtoken:
   *                 type: string
   *                 default: eyJhbGciOiJSUzI1NiIsImtpZCI6ImJkYzRlMTA5ODE1ZjQ2OTQ2MGU2M2QzNGNkNjg0MjE1MTQ4ZDdiNTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNzk3MDE1ODE2MTcxLTg3ZTV2NXIwaGZlMWt1dWliamQ0dHVkYXM0YmtmM283LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNzk3MDE1ODE2MTcxLTg3ZTV2NXIwaGZlMWt1dWliamQ0dHVkYXM0YmtmM283LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAyMTA2Nzk0NjgwMTA2ODcxNzUzIiwiZW1haWwiOiJyb3NoYW5kZXZrb3RhMTk5N0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Imhkb21nWVdIUURMeGw4ZE9tZXc1YkEiLCJpYXQiOjE3MDY4NzE3MjAsImV4cCI6MTcwNjg3NTMyMH0.YAa3njmTnLoukrXY4UmsA36g2j-nSFjW4u3_rnfUCby77kB1NFrLvn28bh2LaNszY-_yTO2OzRvCgtGroFPtJzRpbRnTYPIL0eCHvzJDRjuvv8N6zHSe1Zlm-Cb9POAzVzSq40vjO5qVOgQB5IZzbwq88Q_ugaI1Awg3UvB_Y02zW09hqCAiBujeSsHZKqen-nc98KpkgnGzzT-6Q9BamYVa-GyP4AvIdaE3IwAJZ10f_4CYLTWKaYch-GMqRbwSEy4Isk3z2pkltcdkOZKlOXFm8z7d_bTHBvoe-MwFQ3MKbSN4Luwjr35lz1lXm0c28mMcMWM935UjuIlmeeMdtg
   *     responses:
 *       200:
 *         description: OK
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not Found
 *       500:
 *         description: Server Error
 */
  Index.post("/authentication/googlesignin", [
    validateRequest(AuthenticationValidation.GoogleSignIn),
    AuthenticationController.GoogleSignIn
  ]);












    /**
 * @openapi
 * '/resources/authentication/forgotpassword':
 *   post:
 *     tags:
 *       - Auth Controller
 *     summary: Email for Forget password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 default: roshandevkota1997@gmail.com
 *     responses:
 *       200:
 *         description: OK
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not Found
 *       500:
 *         description: Server Error
 */

    Index.post("/authentication/forgotpassword", [
      validateRequest(AuthenticationValidation.ForgotPassword),
      AuthenticationController.ForgotPassword,
    ]);






  /**
 * @openapi
 * '/resources/authentication/setpassword':
 *   post:
 *     tags:
 *       - Auth Controller
 *     summary: reset password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *               - new_password
 *               - cnf_password
 *             properties:
 *               token:
 *                 type: string
 *               new_password:
 *                 type: string
 *                 default: password
 *               cnf_password:
 *                 type: string
 *                 default: password
 *     responses:
 *       200:
 *         description: OK
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not Found
 *       500:
 *         description: Server Error
 */

  Index.post("/authentication/setpassword", [
    validateRequest(AuthenticationValidation.SetPassword),
    AuthenticationController.SetPassword,
  ]);




  /**
 * @openapi
 * '/resources/authentication/users':
 *   get:
 *     tags:
 *       - Auth Controller
 *     summary: Sign in a user
 *     responses:
 *       200:
 *         description: OK
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not Found
 *       500:
 *         description: Server Error
 */
  Index.get("/authentication/users", [
    AuthenticationController.Users
  ]);
}
