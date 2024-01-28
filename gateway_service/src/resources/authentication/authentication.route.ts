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
   *                default: johndoe 
   *              first_name:
   *                type: string
   *                default: John
   *              last_name:
   *                type: string
   *                default: Doe
   *              dob:
   *                type: string
   *                default: '22/01/2024'
   *              gender:
   *                type: string
   *                default: 'male'
   *              email:
   *                type: string
   *                default: johndoe@mail.com
   *              password:
   *                type: string
   *                default: johnDoe20!@
   *              cnf_password:
   *                type: string
   *                default: johnDoe20!@
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
}
